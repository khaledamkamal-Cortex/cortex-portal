// next/image skips the basePath prefix for unoptimized images, so public/
// assets must be prefixed manually when the site is served from a subpath
// (e.g. GitHub Pages). NEXT_PUBLIC_BASE_PATH is inlined at build time and
// must match next.config.ts basePath.
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
