import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SF Hacks 2025",
  description: "Bigger, Better, with more Air Fryers",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
        style={{ backgroundColor: "#16133d" }}
      >
        <Navbar />
        <main
          className="pt-24 pb-24 bg-webdev-temp min-h-[100vh] h-max bg-[auto_100vh] bg-top bg-no-repeat"
          
        >
          {children}
        </main>
      </body>
    </html>
  );
}
