"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import "./sponsors.css"

export default function Sponsors() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
        <div className="md:px-24 md:py-4 md:w-[98vw] w-screen">
            <Navbar isOpen={isOpen} handleToggle={handleToggle} />
        </div>
        <div 
        style={{
            padding: "0 96px"
        }}>
            <SponsorsContainer></SponsorsContainer>
            <p>
SF Hacks 2025 will bring ~400 talented hackers to SF State for a 48-hour hackathon filled with innovation and collaboration. Our hackers come from all corners of the globe to compete, create, and develop their technical, professional, and interpersonal skills.

Our partners and sponsors are key to the event's success, providing mentorship, resources, and prizes that help our hackers push the boundaries of technology. Partners can take an active role by hosting workshops, sponsoring challenge tracks, or providing access to proprietary technologies and APIs that enhance the development process. Their support also enables the SF Hacks team to logistically establish and execute the event.

Get in touch with us at sfhacksteam@gmail.com to learn how you or your organization can help inspire the next generation of technology leaders!
We’ll include this at the top of our “Sponsors” section of the website. The navbar link will be the same for this “Why Sponsor Us?” and the Sponsors wall
            </p>
        </div>
    </div>
  );
}

function SponsorsContainer() {
    // CSS modules must use className
    return(<div
        className={"sponsorsContainer"}
    >
        <div className="sponsorItem"></div>
        <div className="sponsorItem"></div>
        <div className="sponsorItem"></div>
        <div className="sponsorItem"></div>
        <div className="sponsorItem"></div>
        <div className="sponsorItem"></div>
        <div className="sponsorItem"></div>
    </div>)
}

// color pallettes: 16133d   9882ba  edc6fa  ffc2e2  fff5d9