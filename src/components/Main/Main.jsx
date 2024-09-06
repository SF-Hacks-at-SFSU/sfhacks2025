"use client";

import { useState } from "react";
import Image from "next/image";
import CountDown from "@/components/countdown/Countdown";
import AboutUs from "@/components/aboutUs/AboutUs";
import Navbar from "@/components/Navbar";

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="w-95vw h-screen bg-webdev-temp items-center align-contents-center flex flex-col md-gap-6">  
        <div className="md:px-24 md:py-4 md:w-[98vw] w-screen">
          <Navbar isOpen={isOpen} handleToggle={handleToggle} />
        </div>
        <div className="flex flex-col gap-2 w-1/3 h-max items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={0}
            height={0}
            sizes="100vh"
            className={`w-[300px] h-fit ${isOpen ? "hidden" : "block"}`}
          />
          <CountDown />
          <a href="https://discord.gg/P5PsDR6G7W" target="_blank">
            <button className="bg-sfPink w-40 h-12 text-xl text-black rounded-full ">
              {" "}
              Discord{" "}
            </button>
          </a>
        </div>
      </div>
      <AboutUs />
    </div>
  );
}
