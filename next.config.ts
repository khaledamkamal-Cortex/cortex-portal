import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static marketing site — export plain HTML so it can be served
  // from GitHub Pages (or any static host).
  output: "export",
  images: { unoptimized: true },
  // Subpath the site is served from (e.g. /cortex-portal on GitHub Pages).
  // Must match NEXT_PUBLIC_BASE_PATH, which src/lib/asset.ts uses to prefix
  // public/ assets that basePath does not cover.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
};

export default nextConfig;
