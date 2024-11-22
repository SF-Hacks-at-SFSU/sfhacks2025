"use client"

import Image from "next/image";
import React from "react";
import { useEffect, useRef, useState } from "react";

export function SponsorsElement({ sponsorObject }) {
	return (
		<div className="sponsorItem">
			<img
				src={sponsorObject.logoPath}
				alt={sponsorObject.name}
			></img>
		</div>
	);
}

export function EventImages({ imageData, width, height }) {
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

	function handleChildElementOnClick(clickedIndex) {
		setFocusIndex(clickedIndex);

		domRef.current.children[clickedIndex].scrollIntoView({
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

function EventImage({ imageIndex, imageData, onClick, width, height }) {
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

export function SponsorUsButton({ targetID }) { //deprecated
	return (
		<div className="sponsorUsButton">
			<a href={`#${targetID}`}>Sponsor Us!</a>
		</div>
	);
}

export function WhySponsorParagraph({ children, img = undefined, width = 256, float = "none" }) {
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
