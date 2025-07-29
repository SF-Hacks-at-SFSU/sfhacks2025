/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import "server-only";

import "./styles.css";
import { EventType } from "./components/Event";
import Schedule from "./components/Schedule";
import { parse } from "csv-parse/sync";
import { readFileSync } from "node:fs";

const eventCsv = readFileSync(`${process.cwd()}/public/eventData.csv`);
const scheduleCsv = readFileSync(`${process.cwd()}/public/scheduleData.csv`);
const events = new Map<string, EventType>();

export default function SchedulePage() {
	return (
		<main id="schedulePage">
			<h1>Schedule</h1>
			{/* <p>
					<strong>
						Disclaimer: Some workshops have overlapping times
					</strong>
				</p> */}

			<Schedule eventsMap={events}></Schedule>
		</main>
	);
}

// Parses the events CSV to register all of the events
parse(eventCsv, {
	columns: () => {
		return ["eventName", "locations", "type", "detail", "id"];
	},
	trim: true,
	onRecord: (record: EventType) => {
		// record.location is initially just a string, so this line turns it into a proper string array
		record.locations = (record as any)["locations"].split(",");
		events.set(record.id, record);
	},
});

// This assumes that the schedule data is already sorted by time in ascending order
parse(scheduleCsv, {
	trim: true,
	columns: () => {
		return ["startTime", "parsedDate", "eventIds"] as const;
	},
	onRecord: (record: {
		startTime: string;
		parsedDate: string;
		eventIds: string;
	}) => {
		if (record.eventIds) {
			let eventDatum: EventType | undefined;

			// record.location is initially just a string, so this line turns it into a proper string array
			for (const eventId of record.eventIds.split(",")) {
				eventDatum = events.get(eventId);
				if (eventDatum) {
					// I am aware that the CSV Parser is able to parse date via cast date and cast, but for simplicity, I'm doing the casting on the record level
					if (eventDatum.startTime == null)
						eventDatum.startTime = new Date(record.parsedDate);
					eventDatum.endTime = new Date(
						new Date(record.parsedDate).getTime() + 30 * 60 * 1000
					);
				}
			}
		}
		return record;
	},
});
