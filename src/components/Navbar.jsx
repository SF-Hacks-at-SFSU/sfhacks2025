import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
    return (
        <div className="px-20 py-4 absolute">
          <div className="text-black bg-yellowy grid grid-cols-6 gap-28 justify-items-center items-center px-8 py-2 rounded-4xl"> 
            <Image src="/logo.png" alt="SF Hacks logo" width={40} height={40}/>
            <Link href="">Team</Link>
            <Link href="">FAQs</Link>
            <Link href="">Sponsors</Link>
            <Link href="">Alumni</Link>
            <div> 
              <button className="bg-login-button py-1 px-4 rounded-4xl">Log In</button>
            </div>
          </div>
        </div>
    )
}