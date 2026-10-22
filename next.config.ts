import type { NextConfig } from "next";

const isExport = process.env.NEXT_EXPORT === "true";

const nextConfig: NextConfig = {
  /* config options here */
  ...(isExport
    ? {
        output: "export" as const,
        trailingSlash: true,
      }
    : {}),
  images: {
    unoptimized: isExport,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  ...(!isExport
    ? {
        cacheComponents: true,
        partialPrefetching: true,
      }
    : {}),
  reactCompiler: true,
  turbopack: {
    // A stray package-lock.json exists in the home folder; pin the project root explicitly.
    root: process.cwd(),
  },
};

export default nextConfig;
