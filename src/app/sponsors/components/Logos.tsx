import generateAtlases, { Atlas, OutputOptions } from "@/lib/atlasLoader";
import type { SponsorsDatum } from "../types";
import "./styles.css";
import type { Property } from "csstype";

// let sharpObj = new Sharp("@/")

interface LogoAtlasProps {
	className?: string;
	logoData: SponsorsDatum[];
	outputOptions: OutputOptions;
}
export default async function Logos({
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
			{atlases.map((atlas, index) => (
				<LogoRow
					key={index}
					atlasData={atlas}
					animationDirection={index % 2 ? "reverse" : "normal"}
				></LogoRow>
			))}
		</div>
	);
}

interface LogoRowProps {
	atlasData: Atlas;
	animationDirection: Property.AnimationDirection;
}

function LogoRow({
	atlasData: { atlasFilePath, height, width },
	animationDirection = "unset",
}: LogoRowProps) {
	return (
		<div
			className="logoRow"
			style={{
				// overflow: "scroll hidden",
				backgroundImage: `url(${atlasFilePath})`,
				backgroundSize: "auto 100px",
				animationDuration: `${(width / height) * 15}s`,
				animationDirection: animationDirection,
				backgroundPositionX: `${width}px`,
			}}
		>
		</div>
	);
}

interface LogoComponentProps {}

function LogoComponent() {
	// return (
	// );
}
