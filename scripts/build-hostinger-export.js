const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ZipArchive } = require("archiver");

const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "out");
const DOT_NEXT = path.join(ROOT, ".next");
const DOWNLOADS_ZIP = path.join("C:", "Users", "HP", "Downloads", "indivoya-hostinger-public_html.zip");
const LOCAL_ZIP = path.join(ROOT, "indivoya-hostinger-public_html.zip");

async function main() {
  console.log("=== Building Static Export for Hostinger public_html ===");

  // 1. Clean previous build artifacts
  if (fs.existsSync(OUT_DIR)) {
    console.log("-> Cleaning previous out/ directory...");
    fs.rmSync(OUT_DIR, { recursive: true, force: true });
  }
  if (fs.existsSync(DOT_NEXT)) {
    console.log("-> Cleaning previous .next/ directory...");
    fs.rmSync(DOT_NEXT, { recursive: true, force: true });
  }

  // 2. Run Next.js build with NEXT_EXPORT=true
  console.log("-> Running Next.js static export build...");
  execSync("npx next build", {
    cwd: ROOT,
    env: { ...process.env, NEXT_EXPORT: "true", NODE_OPTIONS: "--max-old-space-size=4096" },
    stdio: "inherit",
  });

  // 3. Inject PHP backend into out/api/
  console.log("-> Injecting PHP backend and .htaccess into out/...");
  const outApiDir = path.join(OUT_DIR, "api");
  if (!fs.existsSync(outApiDir)) fs.mkdirSync(outApiDir, { recursive: true });

  const phpSource = path.join(ROOT, "api", "testimonials.php");
  if (fs.existsSync(phpSource)) {
    fs.copyFileSync(phpSource, path.join(outApiDir, "testimonials.php"));
    console.log("   ✓ Copied api/testimonials.php -> out/api/testimonials.php");
  }

  const outDataDir = path.join(OUT_DIR, "src", "data");
  if (!fs.existsSync(outDataDir)) fs.mkdirSync(outDataDir, { recursive: true });

  const jsonSource = path.join(ROOT, "src", "data", "testimonials.json");
  if (fs.existsSync(jsonSource)) {
    fs.copyFileSync(jsonSource, path.join(outDataDir, "testimonials.json"));
    console.log("   ✓ Copied src/data/testimonials.json -> out/src/data/testimonials.json");
  }

  const htaccessSource = path.join(ROOT, ".htaccess");
  if (fs.existsSync(htaccessSource)) {
    fs.copyFileSync(htaccessSource, path.join(OUT_DIR, ".htaccess"));
    console.log("   ✓ Copied .htaccess -> out/.htaccess");
  }

  // 4. Create ZIP archive with strict Linux forward slashes (/)
  console.log("-> Creating zip with Linux-compatible forward slashes (/)...");
  await createZip(OUT_DIR, DOWNLOADS_ZIP);
  fs.copyFileSync(DOWNLOADS_ZIP, LOCAL_ZIP);

  const stats = fs.statSync(DOWNLOADS_ZIP);
  const mb = (stats.size / (1024 * 1024)).toFixed(2);
  console.log(`\n======================================================`);
  console.log(`SUCCESS! Created Hostinger package (${mb} MB)`);
  console.log(`- Path 1: ${DOWNLOADS_ZIP}`);
  console.log(`- Path 2: ${LOCAL_ZIP}`);
  console.log(`======================================================\n`);
}

function createZip(sourceDir, outPath) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(outPath)) fs.unlinkSync(outPath);

    const output = fs.createWriteStream(outPath);
    const archive = new ZipArchive({ zlib: { level: 9 } });

    output.on("close", resolve);
    archive.on("error", reject);

    archive.pipe(output);

    // Recursively walk directory and add entries with strict forward slashes
    function walk(currentDir) {
      const entries = fs.readdirSync(currentDir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(currentDir, entry.name);
        const relPath = path.relative(sourceDir, fullPath).split(path.sep).join("/");

        if (entry.isDirectory()) {
          walk(fullPath);
        } else {
          archive.file(fullPath, { name: relPath });
        }
      }
    }

    walk(sourceDir);
    archive.finalize();
  });
}

main().catch((err) => {
  console.error("Build failed:", err);
  process.exit(1);
});
