"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/NavBar/Navbar";
import "./sponsors.css";
import {
    SponsorsContainer,
    SponsorsElement,
    EventImages,
    SponsorUsButton,
    WhySponsorParagraph,
} from "@/components/sponsors/client";
import sponsorsData from "./sponsorsPageData.json";

export default function Sponsors() {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const sponsorsElements = sponsorsData.sponsors.map((obj) => (
        <SponsorsElement sponsorObject={obj} key={obj.name}></SponsorsElement>
    ));

    return (
        <div className="sponsorsBackground">
            <div
                className="md:px-24 md:py-4 md:w-[98vw] w-screen"
                style={{
                    margin: "auto",
                    // position: "sticky",
                    // top: 0,
                }}
            >
                <Navbar isOpen={isOpen} handleToggle={handleToggle} />
            </div>

            <main className="sponsorsMain">
                <hgroup className="overlay">
                    <h2>Thank You to Our Amazing Sponsors!</h2>
                    <a href="#contacts">Sponsor Us!</a>
                </hgroup>
                <div
                    style={{
						display: "inline-block",
                        contain: "content",
                        // padding: "",
                        // containIntrinsicSize: ""
                        // containerType: "size"
                    }}
                >
                    <EventImages
                        imageData={sponsorsData.eventImages}
                        width={600}
                        height={200}
                    ></EventImages>
                </div>

                <SponsorsContainer>{sponsorsElements}</SponsorsContainer>
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
            <footer>
                <address id="contacts">
                    <ul>
                        <li>
                            Email:{" "}
                            <a href="mailto:sfhacksteam@gmail.com">
                                sfhacksteam@gmail.com
                            </a>
                        </li>
                        <li>
                            Linkedin:{" "}
                            <a
                                href="https://www.linkedin.com/company/sf-hacks-sfsu/"
                                target="_blank"
                                rel="author"
                            >
                                SF Hacks at SFSU
                            </a>
                        </li>
                        <li>
                            Discord:{" "}
                            <a
                                href="https://discord.gg/sxQjq7SjjW"
                                target="_blank"
                                rel="author"
                            >
                                SF Hacks at SFSU
                            </a>
                        </li>
                    </ul>
                </address>
                <div>
                    <ul>
                        <li>
                            Instagram:{" "}
                            <a
                                href="https://www.instagram.com/sf.hacks/?hl=en"
                                target="_blank"
                                rel="author"
                            >
                                sf.hacks
                            </a>
                        </li>
                        <li>
                            TikTok:{" "}
                            <a
                                href="https://www.tiktok.com/@sfhacks"
                                target="_blank"
                                rel="author"
                            >
                                sfhacks
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}
