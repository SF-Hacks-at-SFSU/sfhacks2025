import Image from "next/image";
import CountDown from "@/components/countdown/Countdown";
import AboutUs from "@/components/aboutUs/AboutUs";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      {/* <section className="w-screen h-screen bg-webdev-temp flex flex-col gap-8">
        <div className="">
          <Navbar />
        </div>
        <div className="grid grid-cols-2 px-40 justify-between  flex-1">
          <Image src="/logo.png" alt="logo" 
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '50%', height: 'auto' }} 
          />
          <CountDown />
        </div>
        

      </section> */}
      {/* <AboutUs /> */}
      <Navbar />

    </main>
  )
}
