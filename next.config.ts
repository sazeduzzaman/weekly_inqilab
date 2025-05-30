import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // ✅ You can remove this if using remotePatterns instead
    // domains: ['ajkal.us', 'v2.weeklyinqilab.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // ❌ invalid
        pathname: "**", // ❌ invalid
      },
    ],
  },
};

export default nextConfig;
