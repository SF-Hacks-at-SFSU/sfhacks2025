import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./globalComponents/NavBar";
import { MLHBanner } from "./globalComponents/MLHBanner";
import { Analytics } from "@vercel/analytics/react";
import nextConfig from "@nextConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "SF Hacks 2025",
	description: "Bigger, Better, with more Air Fryers",
	icons: {
		// I honestly don't have a good reason to use ico files here but might as well
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/icon.png",
		other: {
			rel: "apple-touch-icon-precomposed",
			url: "/icon.png",
		},
	},
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body
				className={`${inter.className}`}
				style={{
					backgroundColor: "var(--background-color-solid)",
					backgroundImage: `linear-gradient(
				rgb(from var(--background-color-solid) r g b / 0) 90vh,
				rgb(from var(--background-color-solid) r g b / 0.5) 97vh,
				rgb(from var(--background-color-solid) r g b / 1) 100vh
			),
			url("${nextConfig.basePath}/webdevCityBackground-01.svg")`,
				}}
			>
				<Navbar />

				{/* renamed Huy's bg-webdev-temp to rootBackground */}
				{children}
				<MLHBanner></MLHBanner>
				<Analytics></Analytics>
			</body>
		</html>
	);
}
