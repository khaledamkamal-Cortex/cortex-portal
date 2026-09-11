import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static marketing site — export plain HTML so it can be served
  // from GitHub Pages (or any static host).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
