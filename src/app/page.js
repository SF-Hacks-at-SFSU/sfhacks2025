import Image from "next/image";
import CountDown from "@/components/countdown/Countdown";
import AboutUs from "@/components/aboutUs/AboutUs";

export default function Home() {
  return (
    <main>
      <section className="w-screen h-screen bg-webdev-temp"></section>
      <CountDown />
      {/* <AboutUs /> */}
    </main>
  )
}
