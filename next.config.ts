import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.weeklyinqilab.com",
        pathname: "/**", // allow all images from this domain
      },
    ],
  },
};

export default nextConfig;
