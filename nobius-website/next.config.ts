import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove 'output: export' to enable server-side features (API routes)
  // Deploy to Netlify/Render as Next.js app (not static site)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
