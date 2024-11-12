"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <html lang="en">
      <head>
        {/* Should Replace this with a metadata object in the future */}
        <title>SF Hacks</title>
      </head>
			<body className={`${inter.className}`} style={{backgroundColor: "#16133d"}}>
				<Navbar isOpen={isOpen} handleToggle={handleToggle} />
				<main
					className="pt-24 pb-24 bg-webdev-temp"
					style={{
						minHeight: "100vh",
						height: "max-content",
            backgroundSize: "auto 100vh",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat"
					}}
				>
					{children}
				</main>
			</body>
    </html>
  );
}
