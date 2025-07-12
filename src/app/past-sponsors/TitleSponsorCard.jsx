"use client"; // Required for using useState in Next.js App Router

import { useState } from "react";
import Image from "next/image";

export default function TitleSponsorCard() {
	const [showInfo, setShowInfo] = useState(false);

	return (
		<div className="relative w-full max-w-5xl mx-auto">
			<div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
				<div className="px-6 py-2 border-2 border-white bg-[#261D4B] text-white font-bold text-sm shadow-md rounded-full">
					Previous Title Sponsor
				</div>
			</div>

			<div className="block w-full h-auto rounded-3xl border-2 border-white shadow-2xl bg-[#261D4B] p-10 pt-14 transition-shadow">
				<div className="flex flex-col items-center justify-center space-y-8">
					{showInfo ? (
						<>
							<h2 className="text-2xl font-semibold text-white text-center">
								About OpenMind
							</h2>
							<p className="text-white text-lg text-center max-w-3xl">
								OpenMind is shaping a future where robots establish their own
								identities and collaborate with humans in decentralized,
								self-governed communities. With OpenMind, intelligent machines
								don’t just assist—they integrate, evolve, and enhance the way we
								live, work, and connect.
							</p>

							<div className="flex flex-col md:flex-row items-center gap-6 max-w-4xl mt-8">
								<div className="relative w-full md:w-1/2 aspect-[4/3]">
									<Image
										src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/sponsor-logos/current/FRENCHIE.png`}
										alt="Frenchie the robodog"
										fill
										className="rounded-xl object-contain"
									/>
								</div>
								<p className="text-white text-base md:w-1/2">
									<strong className="block text-lg mb-2">Meet Frenchie.</strong>
									Frenchie is a robodog powered by OM1. He is also integrated
									with Coinbase Wallet, which allows people to send him crypto
									and have him complete certain tasks.
									<br />
									<br />
									Kids often ask Frenchie for help on math homework, and
									Frenchie even loves chasing squirrels!
								</p>
							</div>

							<div className="flex flex-col md:flex-row items-center gap-6 max-w-4xl mt-10">
								<div className="relative w-full md:w-1/2 aspect-[4/3] order-2 md:order-1">
									<Image
										src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/sponsor-logos/current/IRIS.png`}
										alt="Iris the humanoid"
										fill
										className="rounded-xl object-contain"
									/>
								</div>
								<p className="text-white text-base md:w-1/2 order-1 md:order-2">
									<strong className="block text-lg mb-2">
										Meet Iris - The First Humanoid on the Robonet.
									</strong>
									Iris, the first fully autonomous humanoid powered by OM1, is
									making history as the first robot with its own identity on
									FABRIC.
								</p>
							</div>

							<a
								href="https://www.openmind.org"
								target="_blank"
								className="underline underline-offset-auto cursor-pointer hover:text-sf-pink duration-150"
							>
								openmind.org
							</a>

							<button
								onClick={() => setShowInfo(false)}
								className="mt-10 px-6 py-2 rounded-full bg-white text-[#261D4B] font-semibold hover:bg-gray-200 transition"
							>
								Back
							</button>
						</>
					) : (
						<>
							<div className="relative w-full h-64 md:h-80 lg:h-96 pb-20">
								<a
									href="https://www.openmind.org"
									target="_blank"
									rel="noopener noreferrer"
									className="relative w-full h-64 md:h-80 lg:h-96 pb-20 block"
								>
									<Image
										src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/sponsor-logos/current/OpenMind.svg`}
										alt="Sponsor Logo"
										layout="fill"
										objectFit="contain"
										className="rounded-xl hover:scale-[103%] duration-200"
									/>
								</a>
							</div>
							<button
								onClick={() => setShowInfo(true)}
								className="mt-4 px-6 py-2 rounded-full bg-white text-[#261D4B] font-semibold hover:bg-gray-200 transition"
							>
								Learn More
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
