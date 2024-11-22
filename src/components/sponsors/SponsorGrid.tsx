import React from "react";
import Image from "next/image";
import * as sponsorData from "@/components/sponsors/sponsorsPageData";

const sponsors = sponsorData.sponsors;

const SponsorGrid = () => {
  // Group sponsors by tier
  const firstTier = sponsors.filter((sponsor) => sponsor.tier === "first");
  const secondTier = sponsors.filter((sponsor) => sponsor.tier === "second");
  const thirdTier = sponsors.filter((sponsor) => sponsor.tier === "third");

  const getGridConfig = (tier) => {
    return {
      first: { maxCols: 2, size: 400 },
      second: { maxCols: 3, size: 300 },
      third: { maxCols: 4, size: 240 },
    }[tier];
  };

  const TierGrid = ({ sponsors, tier }) => {
    if (!sponsors.length) return null;

    const config = getGridConfig(tier);
    const { maxCols, size } = config;

    // Split sponsors into rows
    const rows = [];
    for (let i = 0; i < sponsors.length; i += maxCols) {
      const row = sponsors.slice(i, i + maxCols);
      rows.push(row);
    }

    const getRowGridClass = (itemCount) => {
      const colsMap = {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
      };
      return colsMap[itemCount];
    };

    return (
      <div className="space-y-8 lg:space-y-12">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid ${getRowGridClass(
              row.length
            )} gap-8 lg:gap-12 items-center justify-center`}
          >
            {row.map((sponsor) => (
              <div
                key={sponsor.name}
                className="relative w-full aspect-[3/2] transition-transform duration-300 hover:scale-105"
                style={{ maxWidth: `${size}px` }}
              >
                {sponsor.logoPath.endsWith(".svg") ? (
                  <img
                    src={sponsor.logoPath}
                    alt={`${sponsor.name} logo`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <Image
                    src={sponsor.logoPath}
                    alt={`${sponsor.name} logo`}
                    fill
                    className="object-contain"
                    sizes={`(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw`}
                    priority
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      <div className="relative rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-[#15123d]/80 backdrop-blur-sm" />

        <div className="relative p-8 space-y-16">
          <TierGrid sponsors={firstTier} tier="first" />
          <TierGrid sponsors={secondTier} tier="second" />
          <TierGrid sponsors={thirdTier} tier="third" />
        </div>
      </div>
    </div>
  );
};

export default SponsorGrid;
