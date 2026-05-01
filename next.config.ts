import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  transpilePackages: ["recharts"],
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
