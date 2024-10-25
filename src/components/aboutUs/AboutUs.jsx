"use client";

import React from "react";
import Person from "./Person";

const AboutUs = () => {
  // create the buttons for filter, add state to the clicking of each one, and make it animateable first
  // then i should create the team array but with team departments first 
  // and then the people in each department
  return (
    <div className="mt-10 ">
      <p className="text-center text-7xl text-white">About Us</p>

      <p className="text-center text-2xl text-white p-6 ">
        SF Hacks is more than just an event, we are a team of passionate
        individuals dedicated to hosting this hackathon. Our diverse team spans
        across logistics, design, tech operations, social engagement, marketing,
        and outreach.
      </p>
      <p className="text-center text-white text-5xl">Meet Our Team</p>
      <div className="grid grid-rows-2 grid-flow-col md:grid-cols-3 md:grid-flow-row-dense place-items-center gap-6 p-10 overflow-x-scroll no-scrollbar">
        {/* {people.map((person, index) => (
          <Person
            name={person.name}
            position={person.position}
            img={person.img}
            key={index}
          />
        ))} */}
      </div>
    </div>
  );
};

export default AboutUs;