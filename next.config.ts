import type { NextConfig } from "next";
import { __next_app__ } from "next/dist/build/templates/app-page";
const nextConfig: NextConfig = {
  images: {
    // unoptimized: true,
    // disableStaticImages: true
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    
    config.module.rules.push();
    return config
  }
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

module.exports = nextConfig
