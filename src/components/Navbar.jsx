"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NavLinks = () => {
  return (
    <div
      className="text-2xl grid items-center gap-4 font-semibold justify-items-center text-black 
            md:grid md:grid-cols-6 md:justify-items-center
            md:items-center md:px-8 md:py-2 md:gap-12 md:text-xl md:bg-sfTan md:rounded-4xl lg:text-lg lg:gap-20"
    >
      <Link href="/" className="hidden md:block">
        <Image
          src="/logo.png"
          alt="logo"
          width={0}
          height={0}
          sizes="100vw"
          className=" md:h-auto md:w-8 lg:w-10"
        />
      </Link>
      <Link href="/" className="md:hidden">
        Home
      </Link>
      <Link href="https://sfhacks-2024.devpost.com/project-gallery" className="md:hover:underline">
        2024 Projects
      </Link>
      <Link href="https://tally.so/r/woOWKN" target = '_blank'className="md:hover:underline">
        Code Jams! <span className="md:hidden"></span>
      </Link>
      <Link href="/aboutUs" className="md:hover:underline">
        Team
      </Link>
      <Link href="/faqpage" className="md:hover:underline">
        FAQs
      </Link>
      
      <div className="/aboutUs">
        <button
          className="md:bg-login-button md:px-4 md:py-2 
              md:rounded-4xl"
        >
          <a href="https://tally.so/r/3lRZjk" target="_blank">Register</a>
        </button>
      </div>
    </div>
  );
};

export default function Navbar({ isOpen, handleToggle }) {
  return (
    <div className="flex justify-end md:block">
      <div className={`${isOpen ? "hidden" : "block"} px-4 py-2 md:hidden`}>
        <Menu size={55} onClick={handleToggle} className="text-black" />
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } bg-sfyellow w-5/6 h-screen flex 
                flex-col gap-20 md:hidden`}
      >
        <div className="flex justify-end px-2 ">
          <X onClick={handleToggle} size={70} className="text-black" />
        </div>
        <NavLinks />
      </div>
      <div className="hidden md:flex md:justify-center ">
        <NavLinks />
      </div>
    </div>
  );
}
