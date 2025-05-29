"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nextConfig = {
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
exports.default = nextConfig;
