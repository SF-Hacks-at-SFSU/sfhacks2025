import Image from "next/image";
import React from "react";

const Person = ({ name, position, img }) => {
  return (
    <div className="w-36 h-auto rounded-2xl ">
      <Image
        src={img}
        width={200}
        height={200}
        alt="Picture of the author"
        className="aspect-square object-cover object-center rounded-full border-4 border-sfPink object-crop"
      />

      <p className="text-black text-center text-xl p-2">{name}</p>
      {/* <p className="text-white text-center">{position}</p> */}
    </div>
  );
};

export default Person;