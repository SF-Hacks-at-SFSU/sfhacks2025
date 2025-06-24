import Link from "next/link";
import "./styles.css";

import sponsorsData, {
  sponsorTier,
  SponsorTier,
} from "@/custom-img-loader/sponsor-logos/data";
import { SponsorsDatum } from "@/custom-img-loader/sponsor-logos/data";
import TieredSponsors from "./components/TieredSponsorsGrid";
import TitleSponsorCard from "./TitleSponsorCard"

const sponsorsByTier = Object.values(sponsorTier).reduce(
  (accumulator, currentTier) => {
    accumulator[currentTier] = sponsorsData.filter(
      // Currently we don't filter out past sponsors because we don't have current sponsors
      ({ isCurrent, tier }) => /*isCurrent &&*/ tier && tier === currentTier
    );
    return accumulator;
  },
  {} as Record<SponsorTier, SponsorsDatum[]>
);

export default function PastSponsorsPage() {
  return (
    <main>
      <h1>Our Past Sponsors</h1>
      <Link
        href="/past-sponsors/why-sponsor"
        className="button"
      >
        Sponsor Us!
      </Link>

      <div className="py-7 w-full h-auto bg-transparent"
     >
        <TitleSponsorCard/>
      </div>
      


      {
        // The following code just generates sponsor icons, grouped by tiers, for all possible tiers.
        Object.keys(sponsorsByTier).map((currentTier) => {
          const sponsorsData = sponsorsByTier[currentTier as SponsorTier];
          // If a tier doesn't haev any sponsor, just don't generate it
          if (sponsorsData.length == 0) return null;
          else
            return (
              <TieredSponsors
                key={currentTier}
                logoData={sponsorsData}
                tier={currentTier as SponsorTier}
              ></TieredSponsors>
            );
        })
      }
    </main>
  );
}
