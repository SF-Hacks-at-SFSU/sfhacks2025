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
      <body className={`${inter.className}`}>
        <Navbar isOpen={isOpen} handleToggle={handleToggle} />
        <main className="pt-24 bg-webdev-temp">{children}</main>
      </body>
    </html>
  );
}
