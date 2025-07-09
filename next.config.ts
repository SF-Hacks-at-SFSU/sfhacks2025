import type { NextConfig } from "next";
import { __next_app__ } from "next/dist/build/templates/app-page";
const nextConfig: NextConfig = {
	output: "export",
	images: {
		unoptimized: true,
		// disableStaticImages: true
	},
};

module.exports = nextConfig;
