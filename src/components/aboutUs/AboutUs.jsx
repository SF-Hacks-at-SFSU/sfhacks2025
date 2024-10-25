"use client";

import React from "react";
import Person from "./Person";
import { Button } from "../ui/button";
import { useState } from "react";

const AboutUs = () => {
  // create the buttons for filter, add state to the clicking of each one, and make it animateable first
  // then i should create the team array but with team departments first 
  // and then the people in each department
  // the departments are (in order): design, engagement, executive, finance, logistics, marketing, outreach, publicity, and tech

  // and then everytime they click a button, the filter state changes
  // and then set some state to that department and 
  // then just loop through that state to get the img and name
  const [filter, setFilter] = useState("Design");
  const people = [
    {
      team: "Design",
      members: [
        {
          "name": "Gabby",
          "img": "public/team/gabby.jpg",
        }
      ]
    },
    {
      team: "Engagement",
      members: [
      ]
    },
    {
      team: "Executive", 
      members: []
    },
    {
      team: "Finance",
      members: []
    },
    {
      team: "Logistics",
      members: []
    },
    {
      team: "Marketing",
      members: []
    },
    {
      team: "Outreach",
      members: []
    },
    {
      team: "Publicity",
      members: []
    },
    {
      team: "Tech",
      members: []
    }
  ]
  return (
    <div className="mt-10 bg-gray-400 grid gap-8 pb-20">
      <p className="text-center text-7xl text-white">About Us</p>
      
      <p className="text-center text-2xl text-white p-6 ">
        SF Hacks is more than just an event, we are a team of passionate
        individuals dedicated to hosting this hackathon. Our diverse team spans
        across logistics, design, tech operations, social engagement, marketing,
        and outreach.
      </p>
      <p className="text-center text-white text-5xl">Meet Our Team</p>
      <div className="flex justify-center">
      <div class="flex max-w-full snap-x snap-mandatory space-x-3 overflow-x-scroll no-scrollbar
      rounded-full border-2 bg-gray-200 p-2 px-4 ">
          {people.map((department, i) => (
            <Button
            onClick={() => setFilter(department.team)}
            key={i}
            variant="outline"
            className="bg-white inline-block p-2 hover:scale-105 shrink-0 snap-start scroll-ml-4 w-1/6"
          >
            {department.team}
          </Button>
          ))}
        </div>
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