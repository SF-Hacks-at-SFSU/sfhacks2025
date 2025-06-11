"use client";
import { useCallback, useEffect, useRef } from "react";
import { useState } from "react";
import type { EventType } from "./Event";
import EventComponent from "./Event";
import useInterval from "@/lib/useInterval";

interface scheduleComponentProps {
	eventsMap: Map<string, EventType>;
}

export default function Schedule({
	eventsMap: events,
}: scheduleComponentProps) {
	const eventsArray = Array.from(events.values());
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const [activeEventId, setActiveEventId] = useState<EventType["id"]>(
		eventsArray[0].id
	);

	eventsArray.sort((a, b) => a.startTime.getTime() - b.startTime.getTime());

	const getActiveEvent = useCallback(() => {
		return eventsArray.find((event) => Date.now() <= event.endTime.getTime());
	}, [eventsArray]);

	useEffect(() => {
		const activeElement = document.getElementById(getActiveEvent()?.id ?? "");

		scrollContainerRef.current?.scrollTo({
			top: activeElement?.offsetTop,
			behavior: "smooth",
		});
	}, [getActiveEvent]);

	useInterval(() => {
		const firstActiveEvent = getActiveEvent();
		if (firstActiveEvent && firstActiveEvent.id === activeEventId)
			setActiveEventId(firstActiveEvent.id);
	}, 60 /* seconds */ * 1000 /* ms */);

	return (
		<div className="schedule">
			<div
				className="scrollContainer"
				ref={scrollContainerRef}
			>
				{eventsArray.map((event) => (
					<EventComponent
						event={event}
						key={event.id}
					></EventComponent>
				))}
			</div>
		</div>
	);
}

const timeFormat = new Intl.DateTimeFormat(undefined, {
	hour12: true,
	hour: "2-digit",
	minute: "2-digit",
});
