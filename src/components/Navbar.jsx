"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const NavLinks = () => {
    return (
        <div className="text-black bg-yellowy rounded-4xl hidden md:grid md:grid-cols-6 md:gap-28 md:justify-items-center justify-self-center
        md:items-center md:px-8 md:py-2">
            <Image src="/logo.png" alt="SF Hacks logo" width={40} height={40}/>
            <Link href="">Team</Link>
            <Link href="">FAQs</Link>
            <Link href="">Sponsors</Link>
            <Link href="">Alumni</Link>
            <div className=""> 
              <button className="bg-login-button py-1 px-4 rounded-4xl">Log In</button>
            </div>
        </div>
    )
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="px-20 py-4 ">
          <div className="flex justify-end p-2 md:justify-center"> 
            <div className="flex justify-items-center">
                <NavLinks />
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                {isOpen ? <X /> : <Menu size={50}/>}
            </button>
          </div>
        </div>
    )
}