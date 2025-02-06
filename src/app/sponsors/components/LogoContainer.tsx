import generateAtlases, { Atlas, OutputOptions } from "@/lib/atlasLoader";
import type { SponsorsDatum } from "../types";
import { LogoRow } from "./Logos";

interface LogoAtlasProps {
  className?: string;
  logoData: SponsorsDatum[];
  outputOptions: OutputOptions;
}
export default async function LogoContainer({
  className = "",
  logoData,
  outputOptions,
}: LogoAtlasProps) {
  const atlases = await generateAtlases(logoData, 4, 400, outputOptions);

  return (
    <div
      className={`sponsorLogo ${className}`}
      style={{ contain: "content", width: "100%" }}
    >
      {
        atlases.map((atlas, index) => (
          <LogoRow
            key={index}
            atlasData={atlas}
            animationDirection={index % 2 ? "reverse" : "normal"}
          ></LogoRow>
        ))
      }
    </div>
  );
}