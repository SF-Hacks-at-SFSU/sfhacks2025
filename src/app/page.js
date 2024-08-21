import Image from "next/image";
import CountDown from "@/components/countdown/Countdown";
import AboutUs from "@/components/aboutUs/AboutUs";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <section className="w-screen h-screen bg-webdev-temp flex flex-col gap-20">
        <Navbar />
        <div className="grid justify-items-center ">
          <Image src="/logo.png" alt="logo" 
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '50%', height: 'auto' }} 
          />
          <CountDown />
        </div>
      </section>
      <AboutUs />
    </main>
  )
}
