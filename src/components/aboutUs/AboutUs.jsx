"use client";

import React from "react";
import Person from "./Person";
import { Button } from "../ui/button";
import { useState } from "react";

// change the pictures of the team members make sure its centered correctly
const AboutUs = () => {
 
  const [filter, setFilter] = useState("Design");
  const teams = [
    {
      team: "Design",
      members: [
        { name: "Gabby", img: "/team/gabby.jpg" },
        { name: "Justine", img: "/team/justine.jpg" },
        { name: "Louella", img: "/team/louella.jpg" },
        { name: "Hillary", img: "/team/hillary.jpg" },
        { name: "Michelle", img: "/team/michelle.png" },
        { name: "Declan", img: "/team/declan.jpg" },
      ]
    },
    {
      team: "Engagement",
      members: [
        { name: "Caedyn", img: "/team/caedyn.jpg" },
      ]
    },
    {
      team: "Executive", 
      members: [
        { name: "Marco", img: "/team/marco.jpg" },
        { name: "Ashley", img: "/team/ashley.jpg" },
        { name: "Ria", img: "/team/ria.jpg" },
        { name: "Kurt", img: "/team/kurt.jpg" },
      ]
    },
    {
      team: "Finance",
      members: [
        { name: "Vireak", img: "/team/v.JPG" },
        { name: "Brandon", img: "/team/brandon.jpg" },
        { name: "Matthew", img: "/team/matthew.jpg" },
      ]
    },
    {
      team: "Logistics",
      members: [
        { name: "Gavin", img: "/team/gavin.jpg" },
        { name: "Adan", img: "/team/adan.jpg" },
        { name: "Grishma", img: "/team/grishma.jpg" },
        { name: "Christian", img: "/team/christian.jpg" },
        { name: "Stella", img: "/team/stella.jpg" },
      ]
    },
    {
      team: "Marketing",
      members: [
        { name: "John", img: "/team/john.jpg" },
        { name: "Trish", img: "/team/trish.png" },
        { name: "William", img: "/team/william.jpg" },
      ]
    },
    {
      team: "Outreach",
      members: [
      ]
    },
    {
      team: "Publicity",
      members: [
        { name: "Maxwell", img: "/team/maxwell.jpg" },
        { name: "Jim", img: "/team/jim.jpg" },
        { name: "James", img: "/team/james.jpg" },
      ]
    },
    {
      team: "Tech",
      members: [
        { name: "Akim", img: "/team/akim.jpg" },
        { name: "Avinh", img: "/team/avinh.png" },
      ]
    }
  ]

  return (
    <div className=" bg-sfPink grid gap-8 pb-20">
      <p className="text-center text-6xl mt-12 md:text-7xl text-black">About Us</p>
      <p className="text-center text-2xl text-black p-6 ">
        SF Hacks is more than just an event, we are a team of passionate
        individuals dedicated to hosting this hackathon. Our diverse team spans
        across logistics, design, tech operations, social engagement, marketing,
        and outreach.
      </p>
      <p className="text-center text-black text-5xl">Meet Our Team</p>
      <div className="grid justify-items-center gap-10 mx-4">
        <div className="flex max-w-full snap-x snap-mandatory space-x-3 overflow-x-scroll no-scrollbar
          rounded-full bg-sfDarkPurp gap-4 py-2 px-4 pr-20 ">
            {teams.map((department, i) => (
              <Button
              onClick={() => setFilter(department.team)}
              key={i}
              variant="outline"
              className={`inline-block hover:scale-105 shrink-0 hover:bg-sfPink hover:border-sfPink
              snap-start scroll-ml-4 w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/7 
              ${filter === department.team ? "bg-sfPink border-sfPink" : "bg-white border-white"}`}
            >
              {department.team}
            </Button>
            ))}
        </div>
        <div className="flex gap-20 flex-wrap">
          { teams.map((team, i) => {
            if (team.team === filter) {
              return team.members.map((person, i) => (
                <Person name={person.name} img={person.img} key={i} />
              ));
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;