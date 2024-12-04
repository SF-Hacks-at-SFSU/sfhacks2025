// import LogoAtlas from "./components/logoAtlas";
import Logos from "./components/Logos";
import sponsorsData from "@/custom-img-loader/sponsor-logos/data.json";
import { SponsorsDatum } from "./types";
import Link from "next/link";

const currentSponsors = (sponsorsData as SponsorsDatum[]).filter(
	({ isCurrent }) => isCurrent
);
const pastSponsors = (sponsorsData as SponsorsDatum[]).filter(
	({ isCurrent }) => !isCurrent
);

export default function SponsorsPage() {
	return (
		<main>
			<h1>Our Sponsors</h1>
			<Logos
				logoData={currentSponsors}
				outputOptions={{
					outputFileName: "current-sponsors",
					outputDir: "/logo-atlases",
				}}
			></Logos>

			<Link
				href="/sponsors/why-sponsor"
				className="button"
			>
				Sponsor Us!
			</Link>
			<h2>Past Sponsors</h2>
			<Logos
				className="pastSponsors"
				logoData={pastSponsors}
				outputOptions={{
					outputFileName: "past-sponsors",
					outputDir: "/logo-atlases",
				}}
			></Logos>
		</main>
	);
}
