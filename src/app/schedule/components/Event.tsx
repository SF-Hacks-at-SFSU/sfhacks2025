import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import { EventDatum } from "../data";

interface NewEventObjectProps {
	event: EventType;
}
export type EventType = {
	startTime: Date;
	endTime: Date;
	id: string;
	eventName: string;
	locations: string[];
	type: string;
};

const dateTimeFormat = new Intl.DateTimeFormat(undefined, {
	timeZoneName: "short",
	weekday: "short",
	hour12: true,
	hour: "numeric",
	minute: "2-digit",
});

export function NewEventComponent({
	event: { eventName, startTime, endTime, locations, type, id },
}: NewEventObjectProps) {
	return (
		<div
			className="card event"
			id={id}
		>
			<hgroup>
				<h3>{eventName}</h3>
				<time dateTime={startTime.toISOString()}>
					{dateTimeFormat.formatRange(startTime, endTime)}
				</time>
			</hgroup>
			<p>Event Type: {type}</p>
			<p>Location: {locations.join(", ")}</p>
		</div>
	);
}

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
