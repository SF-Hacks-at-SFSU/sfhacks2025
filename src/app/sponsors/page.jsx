"use client";

import { useState } from "react";
import "./styles.css";
import {
	SponsorsContainer,
	SponsorsElement,
	EventImages,
	SponsorUsButton,
	WhySponsorParagraph,
} from "@/components/sponsors/server";

export default function Sponsors() {
	const [isOpen, setIsOpen] = useState(false);
	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="sponsorsBackground">
			<main className="sponsorsMain">
				<h2>Our Amazing Sponsors!</h2>
				<hgroup className="overlay">
					{/* <a href="#contacts">Sponsor Us!</a> */}
				</hgroup>
				<SponsorsContainer></SponsorsContainer>
				<SponsorsContainer></SponsorsContainer>
				{/* deprecated */}
				{/* <hgroup>
					<h2 id="sponsorUsTarget">Why Sponsor</h2>
					<a href="#contacts">Get In Touch!</a>
				</hgroup> */}
				{/* <WhySponsorParagraph
					img={sponsorsData.eventImages[2]}
					float="inline-end"
				>
					SF Hacks 2025 will bring ~400 talented hackers to SF State for a 48-hour hackathon filled with innovation
					and collaboration.
				</WhySponsorParagraph>
				<WhySponsorParagraph
					img={sponsorsData.eventImages[3]}
					float="inline-start"
				>
					Our partners and sponsors are key to the event's success, providing mentorship, resources, and prizes that
					help our hackers push the boundaries of technology.
				</WhySponsorParagraph>
				<WhySponsorParagraph
					img={sponsorsData.eventImages[3]}
					float="inline-end"
				>
					Our hackers come from all corners of the globe to compete, create, and develop their technical,
					professional, and interpersonal skills.
				</WhySponsorParagraph>
				<WhySponsorParagraph
					img={sponsorsData.eventImages[3]}
					float="inline-end"
				>
					Our partners and sponsors are key to the event's success, providing mentorship, resources, and prizes that
					help our hackers push the boundaries of technology.
				</WhySponsorParagraph>
				<WhySponsorParagraph
					img={sponsorsData.eventImages[3]}
					float="inline-end"
				>
					Partners can take an active role by hosting workshops, sponsoring challenge tracks, or providing access to
					proprietary technologies and APIs that enhance the development process.
				</WhySponsorParagraph>
				<WhySponsorParagraph
					img={sponsorsData.eventImages[3]}
					float="inline-end"
				>
					Their support also enables the SF Hacks team to logistically establish and execute the event.
				</WhySponsorParagraph>
				<WhySponsorParagraph
					img={sponsorsData.eventImages[3]}
					float="inline-end"
				>
					Get in touch with us at sfhacksteam@gmail.com to learn how you or your organization can help inspire the
					next generation of technology leaders! We’ll include this at the top of our “Sponsors” section of the
					website.
				</WhySponsorParagraph>
				The navbar link will be the same for this “Why Sponsor Us?” and the Sponsors wall */}
			</main>
		</div>
	);
}
