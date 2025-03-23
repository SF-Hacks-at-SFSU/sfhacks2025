"use-client";
import React from "react";
import { useState } from "react";
import EventObject from "./Event";
import { day1, day2, day3 } from "../data";
const Schedule = () => {
  //general, workshop 1, 2

  //
  const [day, setDay] = useState(0);
  const [types, setTypes] = useState(0);

  function handleDateChange(date: number) {
    setDay(date);
    setTypes(0);
  };

  let date;
  if (day === 0) {
    date = day1;
  } else if (day === 1) {
    date = day2;
  } else {
    date = day3;
  }

  return (
    <div className="flex min-h-96 h-auto flex-col gap-3 p-5 rounded-xl ">
      <div className="flex justify-center gap-2 p-5">
        <div
          onClick={() => handleDateChange(0)}
          className={`flex flex-col w-20 h-20  rounded-xl items-center justify-center cursor-pointer hover:scale-105 duration-100 border border-sfBloo ${
            day != 0 ? "bg-sfDarkBlue" : "bg-sfBloo"
          }`}
        >
          <div className="text-center text-sfPink text-2xl font-bold ">Day</div>
          <div className="text-3xl font-bold text-sfPink">1</div>
        </div>
        <div
          onClick={() => handleDateChange(1)}
          className={`flex flex-col w-20 h-20  rounded-xl items-center justify-center cursor-pointer hover:scale-105 duration-100 border border-sfBloo ${
            day != 1 ? "bg-sfDarkBlue" : "bg-sfBloo"
          }`}
        >
          <div className="text-center text-sfPink text-2xl font-bold ">Day</div>
          <div className="text-3xl font-bold text-sfPink">2</div>
        </div>
        <div
          onClick={() => handleDateChange(2)}
          className={`flex flex-col w-20 h-20  rounded-xl items-center justify-center cursor-pointer hover:scale-105 duration-100 border border-sfBloo ${
            day != 2 ? "bg-sfDarkBlue" : "bg-sfBloo"
          }`}
        >
          <div className="text-center text-sfPink text-2xl font-bold ">Day</div>
          <div className="text-3xl font-bold text-sfPink">3</div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 justify-center  ">
        <button
          onClick={() => setTypes(0)}
          className={`border rounded-2xl p-2 border-sfBloo  ${
            types != 0 ? "bg-sfDarkBlue" : "bg-sfBloo"
          } ${date[0].length === 0 ? "hidden" : ""} `}
        >
          General
        </button>
        <button
          onClick={() => setTypes(1)}
          className={`border rounded-2xl p-2 border-sfBloo  ${
            types != 1 ? "bg-sfDarkBlue" : "bg-sfBloo"
          } ${date[1].length === 0 ? "hidden" : ""}`}
        >
          Workshop 1
        </button>
        <button
          onClick={() => setTypes(2)}
          className={`border rounded-2xl p-2 border-sfBloo  ${
            types != 2 ? "bg-sfDarkBlue" : "bg-sfBloo"
          } ${date[2].length === 0 ? "hidden" : ""}`}
        >
          Workshop 2
        </button>
        <button
          onClick={() => setTypes(3)}
          className={`border rounded-2xl p-2 border-sfBloo  ${
            types != 3 ? "bg-sfDarkBlue" : "bg-sfBloo"
          } ${date[3].length === 0 ? "hidden" : ""}`}
        >
          Sponsors
        </button>
        <button
          onClick={() => setTypes(4)}
          className={`border rounded-2xl p-2 border-sfBloo  ${
            types != 4 ? "bg-sfDarkBlue" : "bg-sfBloo"
          } ${date[4].length === 0 ? "hidden" : ""}`}
        >
          Events
        </button>
      </div>

      <div className="flex flex-col gap-3 justify-center">
        {date[types].map((item2, index2) => (
          <EventObject
            event={item2}
            key={index2}
          />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
