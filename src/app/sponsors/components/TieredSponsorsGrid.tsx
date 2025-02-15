import {
	SponsorsDatum,
	SponsorTier,
} from "@/custom-img-loader/sponsor-logos/data";
import Image from "next/image";

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
		<div className={`tieredSponsorsGrid`}>
			{logoData.map((logoDatum, index) => (
					<a
          className={`sponsorTier-${tier} ${name}`}
          key={index}>
						<img
							alt={logoDatum.name}
							src={`${logoDatum.path}`}
							// height={50}
							// width={100}
						></img>
					</a>
			))}
		</div>
	);
}
