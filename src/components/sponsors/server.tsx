import React, { useEffect, useRef } from "react";
import * as sponsorsData from "./sponsorsPageData.js";

// import
// const sponsorsElements = sponsorsData.sponsors.map((obj) => (
// 	<SponsorsElement sponsorObject={obj} key={obj.name}></SponsorsElement>
// ));

export function SponsorsContainer() {
	const canvasRef = useRef(null as HTMLCanvasElement);

	// Promise.all(imgs.map(()=>{}))
	// imgs.src = sponsorsData.sponsors[0].logoPath;
	useEffect(() => {
		const ctx = canvasRef.current.getContext("2d");
		loadImages(ctx);
	}, []);

	async function loadImages(ctx: CanvasRenderingContext2D) {
		const imgs = sponsorsData.sponsors.map(() => new Image());
		await Promise.all(
			imgs.map((img, i) => {
				img.src = sponsorsData.sponsors[i].logoPath;
				new Promise((resolve) =>
					img.addEventListener("load", () => {
            ctx.drawImage(img, 0, 0);
            console.log(img.height)
					})
				);
			})
		);
		console.log(imgs);
    π
    

		ctx.fillStyle = "#f2d23f30";
		ctx.fillRect(0, 0, 40, 40);
	}

	// CSS must use className instead of the styles tag
	return (
		<div>
			<canvas ref={canvasRef}></canvas>
			<div></div>
			<p>wvrvev</p>
		</div>
	);
}

export async function SponsorLogos() {
	return <div>Sponsor Image</div>;
}
{
	/* <EventImages
	imageData={sponsorsData.eventImages}
	width={600}
	height={200}
></EventImages>; */
}

// <SponsorsContainer>{sponsorsElements}</SponsorsContainer>

//   <footer>
// 	<address id="contacts">
// 		<ul>
// 			<li>
// 				Email:{" "}
// 				<a href="mailto:sfhacksteam@gmail.com">sfhacksteam@gmail.com</a>
// 			</li>
// 			<li>
// 				Linkedin:{" "}
// 				<a
// 					href="https://www.linkedin.com/company/sf-hacks-sfsu/"
// 					target="_blank"
// 					rel="author"
// 				>
// 					SF Hacks at SFSU
// 				</a>
// 			</li>
// 			<li>
// 				Discord:{" "}
// 				<a
// 					href="https://discord.gg/sxQjq7SjjW"
// 					target="_blank"
// 					rel="author"
// 				>
// 					SF Hacks at SFSU
// 				</a>
// 			</li>
// 		</ul>
// 	</address>
// 	<div>
// 		<ul>
// 			<li>
// 				Instagram:{" "}
// 				<a
// 					href="https://www.instagram.com/sf.hacks/?hl=en"
// 					target="_blank"
// 					rel="author"
// 				>
// 					sf.hacks
// 				</a>
// 			</li>
// 			<li>
// 				TikTok:{" "}
// 				<a
// 					href="https://www.tiktok.com/@sfhacks"
// 					target="_blank"
// 					rel="author"
// 				>
// 					sfhacks
// 				</a>
// 			</li>
// 		</ul>
// 	</div>
// </footer>
