import Image from "next/image";
import React from "react";

const Person = ({ name, position, img }) => {
  return (
    <div className="flex flex-col justify-center items-center w-28 md:w-36 h-auto rounded-2xl gap-3 ">
      <Image
        src={img}
        width={200}
        height={200}
        alt="Picture of the author"
        className="aspect-square object-cover object-top rounded-full border-4 border-sfPink object-crop"
      />
      
      <div className = "flex w-20 justify-center bg-sfDarkBlue rounded-lg">
        <p className="text-white text-center text-md p-2">{name}</p>
      </div>
      
      {/* <p className="text-white text-center">{position}</p> */}
    </div>
  );
};

export default Person;