import Image from "next/image";
import CountDown from "./components/Countdown";
import "./styles.css";

export default function Home() {
	return (
		<main id="home">
			<h2 className="logo">
				<Image
					src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo-horizontal.png`}
					alt="SF Hacks Logo"
					width={272 * 2}
					height={92 * 2}
					style={{
						backgroundColor: "#fff5d980",
						backdropFilter: "blur(4px)",
						borderRadius: "16px",
					}}
				/>
			</h2>
			{/* <p className="bg-transparent text-black text-2xl font-bold ">
				Cohosted by:{" "}
			</p>
			<a
				href="https://www.openmind.org"
				target="_blank"
				className="bg-transparent pb-5	"
			>
				<Image
					src="/sponsor-logos/current/OpenMind(black).svg"
					className="bg-transparent"
					alt="Openmind logo"
					width={400}
					height={300}
				/>
			</a> Hiding title sponsor for now*/}
			{/* <span className="card">
				<h3>Theme</h3>
				<strong>Tech For Good</strong>
			</span> Hiding the theme for now until the theme for 2026 is ready to be published*/}
			<div className="card">
				<h3>Date</h3>
				<CountDown />
			</div>
		</main>
	);
}
