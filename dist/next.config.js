"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nextConfig = {
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
exports.default = nextConfig;
