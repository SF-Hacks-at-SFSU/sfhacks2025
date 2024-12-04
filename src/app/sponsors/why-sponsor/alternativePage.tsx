"use client"

import Image from "next/image";
import React, { Component, useEffect, useRef, useState } from "react";
import type * as sponsorsPageDataTypes from "@/app/sponsors/sponsorsPageData";
import type { SponsorsDatum } from "../types";
import type { Property } from "csstype";
interface SponsorsContainerProps {
	children: React.ReactNode;
}

export function SponsorsContainer({ children }: SponsorsContainerProps) {
	// CSS must use className instead of the styles tag
	return <div className="sponsorsContainer">{children}</div>;
}

interface SponsorsElementProps {
	sponsorObject: SponsorsDatum;
}

export function SponsorsElement({ sponsorObject }: SponsorsElementProps) {
	return (
		<div className="sponsorItem">
			<img
				src={sponsorObject.path}
				alt={sponsorObject.name}
			></img>
		</div>
	);
}

interface EventImagesProps {
	imageData: sponsorsPageDataTypes.eventImageType[];
	width: number;
	height: number;
}

export function EventImages({ imageData, width, height }: EventImagesProps) {
	const [focusIndex, setFocusIndex] = useState(imageData.length - 2);
	const images = useRef(
		imageData.map((imageDatum, i) => (
			<EventImage
				imageIndex={i}
				onClick={handleChildElementOnClick}
				imageData={imageDatum}
				key={imageDatum.alt}
				width={width}
				height={height}
			/>
		))
	);
	// useEffect(() => {
	// 	// domRef.current.children[0].scrollIntoView({
	// 	// 	behavior: "instant",
	// 	// 	block: "center",
	// 	// 	inline: "center",
	// 	// });
	// }, []); // empty dependencies array is required to prevent the effect from re-rendering

	const domRef = useRef(null);

	function handleChildElementOnClick(clickedIndex: number) {
		setFocusIndex(clickedIndex);

    const domElement = domRef.current as unknown as HTMLElement;
    domElement.children[clickedIndex].scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
	}
  
	return (
		<div
			ref={domRef}
			className="eventImages"
		>
			{images.current}
		</div>
	);
}

interface EventImageProps {
	imageIndex: number;
	imageData: sponsorsPageDataTypes.eventImageType;
	onClick: (index: number) => void;
	width: number;
	height: number;
}

function EventImage({
	imageIndex,
	imageData,
	onClick,
	width,
	height,
}: EventImageProps) {
	const index = imageIndex;

	return (
		<Image
			onClick={() => {
				onClick(index);
			}}
			draggable={false}
			tabIndex={0}
			width={width}
			height={height}
			alt={imageData.alt}
			src={imageData.filePath}
		></Image>
	);
}

interface SponsorUsButtonProps {
	targetID: string;
}

export function SponsorUsButton({ targetID }: SponsorUsButtonProps) {
	//deprecated
	return (
		<div className="sponsorUsButton">
			<a href={`#${targetID}`}>Sponsor Us!</a>
		</div>
	);
}

interface WhySponsorParagraphProps {
	img?: sponsorsPageDataTypes.eventImageType;
	width?: number;
	float?: Property.Float; //Don't bother asking me how long it took me to figure this out
	children?: React.ReactNode;
}

export function WhySponsorParagraph({
	children,
	img = undefined,
	width = 256,
	float = "none",
}: WhySponsorParagraphProps) {
	if (img)
		return (
			<p
				className="WhySponsorParagraph"
				style={{
					display: "inline-block",
					overflow: "scroll",
				}}
			>
				<Image
					style={{
						float: float,
						clear: "both",
					}}
					width={width}
					height={0} // very dubious code
					src={img.filePath}
					alt={img.alt}
				></Image>
				{children}
			</p>
		);
	else return <p>{children}</p>; // incase you don't want to specify an image, but I wouldn't recommend it
}
