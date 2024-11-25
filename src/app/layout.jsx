import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./globalComponents/Navbar";

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
  }
  
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${inter.className}`}
				style={{ backgroundColor: "#16133d"}}
			>
				<Navbar />
        {/* renamed Huy's bg-webdev-temp to rootBackground */}
        {children}
				{/* <main className="rootBackground">{children}</main> */}
			</body>
		</html>
	);
}
