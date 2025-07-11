import {
	SponsorsDatum,
	SponsorTier,
} from "@/custom-img-loader/sponsor-logos/data";
import Image from "next/image";
import nextConfig from "@nextConfig";

interface TieredSponsorsGridProps {
	name?: string;
	logoData: SponsorsDatum[];
	tier: SponsorTier;
}

export default function TieredSponsors({
	name = "",
	logoData,
	tier,
}: TieredSponsorsGridProps) {
	return (
		<div
			className={`criticalInfo tieredSponsorsGrid sponsorTier-${tier} ${name}`}
		>
			{logoData.map((logoDatum, index) => (
				<a
					key={index}
					href={logoDatum.url}
					target="_blank"
				>
					<img
						// img must be used instead of Image because of the dynamic src url
						alt={logoDatum.name}
						src={`${nextConfig.basePath}${logoDatum.path}`}
					></img>
				</a>
			))}
		</div>
	);
}
