import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SF Hacks 2025",
  description: "Bigger, Better, with more Air Fryers",
};

export default function RootLayout({ children }) {
  // console.log(logo)
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        { children }
      </body>
    </html>
  );
}
