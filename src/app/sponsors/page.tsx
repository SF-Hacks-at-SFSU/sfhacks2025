// import LogoAtlas from "./components/logoAtlas";
import LogoContainer from "./components/LogoContainer";
import sponsorsData from "@/custom-img-loader/sponsor-logos/data";
import { SponsorsDatum } from "@/custom-img-loader/sponsor-logos/data";
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
			<LogoContainer
				logoData={currentSponsors}
				outputOptions={{
					outputFileName: "current-sponsors",
					outputDir: "/logo-atlases",
				}}
			></LogoContainer>

			<Link
				href="/sponsors/why-sponsor"
				className="button"
			>
				Sponsor Us!
			</Link>
			<h2>Past Sponsors</h2>
			<LogoContainer
				className="pastSponsors"
				logoData={pastSponsors}
				outputOptions={{
					outputFileName: "past-sponsors",
					outputDir: "/logo-atlases",
				}}
			></LogoContainer>
		</main>
	);
}
