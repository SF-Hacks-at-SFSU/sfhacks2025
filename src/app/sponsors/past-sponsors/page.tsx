import Link from "next/link";
import "./styles.css";

import sponsorsData from "@/custom-img-loader/sponsor-logos/data";
import { SponsorsDatum } from "@/custom-img-loader/sponsor-logos/data";
import LogoContainer from "./components/LogoContainer";


const pastSponsors = (sponsorsData as SponsorsDatum[]).filter(
	({ isCurrent }) => !isCurrent
);


export default function PastSponsorsPage() {
	return (
		<main>
			<h1>Our Past Sponsors</h1>
			<Link
				href="/sponsors/why-sponsor"
				className="button"
			>
				Sponsor Us!
			</Link>
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
