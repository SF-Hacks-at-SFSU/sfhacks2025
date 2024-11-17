import Image from "next/image";
import CountDown from "../components/countdown/Countdown";
import "./styles.css";

export default function Home() {
	return (
		<main className="mainLandingPage">
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

								// ?????
								// className={`w-[300px] h-fit ${
								//     isOpen ? "hidden" : "block"
								// }`}
							/>
						</h2>
						<CountDown />
						{/* old discord button */}
						{/* <button  className="bg-sfPink w-40 h-12 text-xl text-black rounded-full">
                        {" "}
                        <a href="https://discord.gg/P5PsDR6G7W" target="_blank">
                        Discord{" "}
                        </a>
                        </button> */}
					</hgroup>
					<a
						className="discordButton"
						href="https://discord.gg/P5PsDR6G7W"
						target="_blank"
					>
						Discord{" "}
					</a>
			{/* <div className="w-95vw items-center align-contents-center flex flex-col md-gap-6">
				<div className="mainLandingPage flex flex-col gap-2 w-1/3 h-max items-center ">
					
				</div>
			</div> */}
		</main>
	);
}
