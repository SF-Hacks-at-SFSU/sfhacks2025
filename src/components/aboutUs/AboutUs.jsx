"use server";

import React from "react";
import Person from "./Person";

const AboutUs = () => {
  const people = [
    {
      name: "Odera",
      position: "Co-President",
      img: "/team/od.jpg",
    },
    {
      name: "Arianna",
      position: "Co-President",
      img: "/team/ari.jpg",
    },
    {
      name: "Marco",
      position: "Vice President",
      img: "/team/marco.jpg",
    },
    {
      name: "Huy",
      position: "Administrator",
      img: "/team/huy.jpg",
    },
    {
      name: "Mark",
      position: "Treasurer",
      img: "/team/mark.jpg",
    },
    {
      name: "Omar",
      position: "Tech Operations",
      img: "/team/omar.jpg",
    },
    {
      name: "Akim",
      position: "Tech Operations",
      img: "/team/akim.jpg",
    },
    {
      name: "Avinh",
      position: "Tech Operations",
      img: "/team/avinh.png",
    },
    {
      name: "Lakshyaa",
      position: "Tech Operations",
      img: "/team/lakshyaa.png",
    },
    {
      name: "Angelo",
      position: "Tech Operations",
      img: "/team/angelo.jpg",
    },
    {
      name: "Gabby",
      position: "Design",
      img: "/team/gabby.jpg",
    },
    {
      name: "Michelle",
      position: "Design",
      img: "/team/michelle.jpg",
    },
    {
      name: "Japneet",
      position: "Social Engagement",
      img: "/team/japneet.jpg",
    },
    {
      name: "Ria",
      position: "Marketing Director",
      img: "/team/ria.jpg",
    },
    {
      name: "John",
      position: "Marketing",
      img: "/team/john.jpg",
    },
    {
      name: "Anh",
      position: "Marketing",
      img: "/team/anh.jpg",
    },
    {
      name: "Laeli",
      position: "Marketing",
      img: "/team/laeli.jpg",
    },
    {
      name: "Shriya",
      position: "Outreach",
      img: "/team/shriya.jpg",
    },
    {
      name: "Ashley",
      position: "Logistics",
      img: "/team/ashley.jpg",
    },
    {
      name: "Keith",
      position: "Outreach",
      img: "/team/keith.jpg",
    },
    {
      name: "Sukrit",
      position: "Logistics",
      img: "/team/sukrit.jpg",
    },
    {
      name: "Alex",
      position: "Logistics",
      img: "/team/alex.jpg",
    },
  ];
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
        {people.map((person, index) => (
          <Person
            name={person.name}
            position={person.position}
            img={person.img}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;