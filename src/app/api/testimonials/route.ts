import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const PHP_API_URL = "http://localhost:8085/api/testimonials.php";
const DATA_PATH = path.join(process.cwd(), "src", "data", "testimonials.json");

export type Testimonial = {
  id: string;
  name: string;
  role?: string;
  company?: string;
  location?: string;
  category?: string;
  rating: number;
  tourName: string;
  review: string;
  date: string;
  verified: boolean;
  avatarColor?: string;
  createdAt: string;
};

function readLocalTestimonials(): Testimonial[] {
  try {
    if (fs.existsSync(DATA_PATH)) {
      const raw = fs.readFileSync(DATA_PATH, "utf8");
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error("Error reading local testimonials:", err);
  }
  return [];
}

function writeLocalTestimonials(items: Testimonial[]): boolean {
  try {
    const dir = path.dirname(DATA_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_PATH, JSON.stringify(items, null, 2), "utf8");
    return true;
  } catch (err) {
    console.error("Error writing local testimonials:", err);
    return false;
  }
}

// GET: Load testimonials (first from PHP if running, fallback to local JSON)
export async function GET() {
  try {
    // Attempt fetching from local PHP endpoint
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1200);

    const res = await fetch(PHP_API_URL, {
      signal: controller.signal,
      cache: "no-store",
    });
    clearTimeout(timeout);

    if (res.ok) {
      const phpData = await res.json();
      if (phpData && Array.isArray(phpData.data) && phpData.data.length > 0) {
        return NextResponse.json({
          success: true,
          source: "php_backend",
          message: "Loaded from PHP SQLite database",
          data: phpData.data,
        });
      }
    }
  } catch {
    // PHP server offline or timed out; seamlessly fallback to local JSON
  }

  const localItems = readLocalTestimonials();
  return NextResponse.json({
    success: true,
    source: "local_json",
    message: "Loaded from local storage",
    data: localItems,
  });
}

// POST: Add new testimonial
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.name || !body.review) {
      return NextResponse.json(
        { success: false, message: "Reviewer name and review text are required." },
        { status: 400 }
      );
    }

    const colors = [
      "from-amber-500 to-amber-700",
      "from-blue-600 to-indigo-800",
      "from-emerald-600 to-teal-800",
      "from-purple-600 to-violet-800",
      "from-rose-500 to-rose-700",
    ];

    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const now = new Date();
    const formattedDate = `${months[now.getMonth()]} ${now.getFullYear()}`;

    const newItem: Testimonial = {
      id: `test-${Date.now()}-${Math.floor(Math.random() * 900 + 100)}`,
      name: String(body.name).trim().slice(0, 80),
      role: String(body.role || "Guest Traveler").trim().slice(0, 80),
      company: String(body.company || "").trim().slice(0, 100),
      location: String(body.location || "India").trim().slice(0, 80),
      category: String(body.category || "traveler").trim(),
      rating: Math.max(1, Math.min(5, Number(body.rating) || 5)),
      tourName: String(body.tourName || "Curated India Package").trim().slice(0, 120),
      review: String(body.review).trim().slice(0, 2500),
      date: formattedDate,
      verified: body.verified !== false,
      avatarColor: colors[Math.floor(Math.random() * colors.length)],
      createdAt: now.toISOString(),
    };

    // Forward to PHP backend if reachable
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 1200);
      await fetch(PHP_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
        signal: controller.signal,
      });
      clearTimeout(timeout);
    } catch {
      // Ignored if PHP server is not active
    }

    // Persist locally
    const existing = readLocalTestimonials();
    existing.unshift(newItem);
    writeLocalTestimonials(existing);

    return NextResponse.json(
      {
        success: true,
        message: "Testimonial published successfully!",
        data: newItem,
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      { success: false, message: "Failed to create testimonial.", error: errorMsg },
      { status: 500 }
    );
  }
}

// DELETE: Delete a testimonial by ID
export async function DELETE(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Testimonial ID is required for deletion." },
        { status: 400 }
      );
    }

    // Forward deletion to PHP backend if reachable
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 1200);
      await fetch(`${PHP_API_URL}?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
        signal: controller.signal,
      });
      clearTimeout(timeout);
    } catch {
      // Ignored
    }

    // Remove from local JSON
    const existing = readLocalTestimonials();
    const filtered = existing.filter((item) => item.id !== id);
    writeLocalTestimonials(filtered);

    return NextResponse.json({
      success: true,
      message: `Testimonial ${id} deleted successfully.`,
      remainingCount: filtered.length,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      { success: false, message: "Failed to delete testimonial.", error: errorMsg },
      { status: 500 }
    );
  }
}
