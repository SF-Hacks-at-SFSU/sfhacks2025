// import LogoAtlas from "./components/logoAtlas";
import LogoContainer from "./components/LogoContainer";
import sponsorsData, {
	SponsorTier,
} from "@/custom-img-loader/sponsor-logos/data";
import { SponsorsDatum } from "@/custom-img-loader/sponsor-logos/data";
import Link from "next/link";
import TieredSponsors from "./components/TieredSponsorsGrid";

const currentSponsors = (sponsorsData as SponsorsDatum[]).filter(
	({ isCurrent }) => isCurrent
);

const sponsorsGold = sponsorsData.filter(
	({ isCurrent, tier }) => isCurrent && tier === SponsorTier.Gold
);

const pastSponsors = (sponsorsData as SponsorsDatum[]).filter(
	({ isCurrent }) => !isCurrent
);

export default function SponsorsPage() {
	return (
		<main>
			<h1>Our Sponsors</h1>
			<TieredSponsors
				logoData={sponsorsGold}
				tier={SponsorTier.Gold}
			></TieredSponsors>
			{/* <LogoContainer
				logoData={currentSponsors}
				outputOptions={{
					outputFileName: "current-sponsors",
					outputDir: "/logo-atlases",
				}}
			></LogoContainer> */}

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
