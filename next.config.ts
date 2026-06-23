import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['api.placeholder.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
