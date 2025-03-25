import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import { EventDatum } from "../data";

interface EventObjectProps {
	event: EventDatum;
}

const EventObject = ({
	event: { start, end, name, description },
}: EventObjectProps) => {
	return (
		<div className="md:flex md:flex-row justify-center">
			<div className="flex gap justify-start  bg-sfDarkBlue w-full   min-h-16 h-auto border border-sfBloo rounded-2xl">
				<div className="flex flex-col gap-3 p-3 justify-center">
					<div className="text-md text-sfPink  whitespace-nowrap">{start}</div>
					<FaArrowDownLong className=" text-sfPink self-center" />
					<div className="text-md text-sfPink">{end}</div>
				</div>
				<div className="flex flex-col justify-center snap-center items-center p-3 w-full">
					<div className="text-center font-bold text-white pb-2">{name}</div>
					<div className="text-center text-gray-200">{description}</div>
				</div>
			</div>
		</div>
	);
};

export default EventObject;
