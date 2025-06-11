import Image from "next/image";
import CountDown from "./components/Countdown";
import "./styles.css";

export default function Home() {
	return (
		<main id="home">
			<h2 className="logo">
				<Image
					src="/logoNew-horizontal.png"
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
