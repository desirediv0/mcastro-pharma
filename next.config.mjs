/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  // Lets verification builds run beside a local `next dev` without sharing the .next folder.
  distDir: process.env.NEXT_DIST_DIR || '.next',
}
export default nextConfig
