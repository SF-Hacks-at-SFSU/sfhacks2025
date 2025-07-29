import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./globalComponents/NavBar";
import { MLHBanner } from "./globalComponents/MLHBanner";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata = {
	title: "SF Hacks 2025",
	description: "Bigger, Better, with more Air Fryers",
	icons: {
		// I honestly don't have a good reason to use ico files here but might as well
		icon: `${basePath}/favicon.ico`,
		shortcut: `${basePath}/favicon.ico`,
		apple: `${basePath}/icon.png`,
		other: {
			rel: `${basePath}apple-touch-icon-precomposed`,
			url: `${basePath}/icon.png`,
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
			url("${basePath}/background.svg")`,
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
