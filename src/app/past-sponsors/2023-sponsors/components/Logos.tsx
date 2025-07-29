"use client";

import { Atlas } from "@/lib/atlasLoader";
import type { Property } from "csstype";

interface LogoRowProps {
	atlasData: Atlas;
	animationDirection: Property.AnimationDirection;
}

export function LogoRow({
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	atlasData: { atlasFilePath, height, width, sprites },
	animationDirection = "unset",
}: LogoRowProps) {
	return (
		<div
			className="logoRow"
			style={{
				// overflow: "scroll hidden",
				backgroundImage: `url(${atlasFilePath})`,
				backgroundSize: "auto 70px",
				animationDuration: `${(width / height) * 15}s`,
				animationDirection: animationDirection,
				backgroundPositionX: `${width}px`,
			}}
		></div>
	);
}
