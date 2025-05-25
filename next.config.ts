import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['ajkal.us', 'v2.weeklyinqilab.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // matches all hostnames
        pathname: "**", // matches all paths
      },
    ],
  },
};

export default nextConfig;
