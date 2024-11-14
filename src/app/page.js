import Image from "next/image";
import CountDown from "@/components/countdown/Countdown";
import AboutUs from "@/app/aboutUs/AboutUs";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main/Main";

export default function Home() {
	return (
		/**
		 * There shouldn't be a <main> element here because the root layout already has a <main> element.
		 * There should only ever be *1* main element
		 */
		<Main />
	);
}
