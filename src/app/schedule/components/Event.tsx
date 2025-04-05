import React from "react";

interface EventComponentProps {
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

export default function EventComponent({
	event: { eventName, startTime, endTime, locations, type, id },
}: EventComponentProps) {
	return (
		<div
			className="card event"
			id={id}
		>
			<hgroup>
				<h3>{eventName}</h3>
				<time
					dateTime={startTime.toISOString()}
					// I just have to use it. That's what NextJs seems to be suggesting
					// https://nextjs.org/docs/messages/react-hydration-error#solution-3-using-suppresshydrationwarning
					suppressHydrationWarning={true}
				>
					{dateTimeFormat.formatRange(startTime, endTime)}
				</time>
			</hgroup>
			<p>Event Type: {type}</p>
			<p>Location: {locations.join(", ")}</p>
		</div>
	);
}
