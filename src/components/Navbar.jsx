"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const NavLinks = () => {
    return (
        <div className="grid items-center gap-4 font-semibold justify-items-center text-black md:grid md:grid-cols-6 md:gap-28 md:justify-items-center justify-self-center
        md:items-center md:px-8 md:py-2">
            <Image src="/logo.png" alt="SF Hacks logo" width={40} height={40} className="hidden"/>
            <Link href="/">Home</Link>
            <Link href="" className="hidden">Team</Link>
            <Link href="" >FAQs</Link>
            <Link href="" >Meet the Officers</Link>
            <Link href="">Sponsors</Link>
            <Link href="">Alumni Wall</Link>
            <div className=""> 
              <button className="hidden ">Log In</button>
            </div>
        </div>
    )
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => {
        setIsOpen(!isOpen)
        console.log('clicked')
    }
    return (
        <div className="flex justify-end ">
            <div className={`${isOpen ? 'hidden' : 'block' } px-4 py-2`}>
                <Menu size={55} onClick={handleToggle} className="text-red-700"/>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden' } bg-slate-300 w-5/6 h-screen flex flex-col gap-20`}>
                <div className="flex justify-end  px-2 ">
                    <X onClick={handleToggle} size={70} className="text-black"/>
                </div>
                <NavLinks />
            </div>
        </div>
    )
}