import type { NextConfig } from "next";
import { __next_app__ } from "next/dist/build/templates/app-page";

const nextConfig: NextConfig = {
	output: "export",
	basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "", // The environment variable code comes from https://github.com/nextjs/deploy-github-pages/blob/main/next.config.ts
	images: {
		unoptimized: true,
		// disableStaticImages: true
	},
};

export default nextConfig;
