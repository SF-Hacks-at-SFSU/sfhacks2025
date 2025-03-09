import Image from "next/image";
import CountDown from "./components/Countdown";
import "./styles.css";

export default function Home() {
	return (
		<main id="home">
			<hgroup>
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
				<CountDown />
			</hgroup>
		</main>
	);
}