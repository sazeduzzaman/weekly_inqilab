import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
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
