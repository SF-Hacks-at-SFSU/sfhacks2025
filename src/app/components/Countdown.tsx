"use client";

import { useState, useEffect } from "react";

const eventCheckInDateTime = new Date("Feb 01, 2026 14:00:00-07:00");
const eventStartDateTime = new Date("Apr 4, 2025 16:00:00-07:00"); // NOTE: This is not the precise date, The day is the 1st just to avoid parsing error
const eventEndDateTime = new Date("Feb 01, 2026 16:00:00-07:00");

const dateFormat = new Intl.DateTimeFormat(
	undefined,
	// { dateStyle: "long" } Use this once we have the precise date
	{ month: "long", year: "numeric" } // Using this date format for now since we don't have the precise date yet
);

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface CountDownProps {
	// targetTime: Date
}

export default function CountDown({}: CountDownProps) {
	const eventStarted = Date.now() >= eventStartDateTime.getTime();

	// I know, this is confusing to be mixing Date objects with time values. I want to clean this up in the future
	const targetTime = (
		eventStarted ? eventEndDateTime : eventCheckInDateTime
	).getTime();

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [timeRemaining, setTimeRemaining] = useState({
		days: -1,
		hours: -1,
		minutes: -1,
		seconds: -1,
	});

	const [isHydrated, setIsHydrated] = useState(false);

	useEffect(() => {
		setIsHydrated(true);

		const calculateTime = () => {
			const remainingTime = targetTime - Date.now();

			setTimeRemaining({
				days: Math.floor(remainingTime / (1000 * 60 * 60 * 24)),
				hours: Math.floor((remainingTime / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((remainingTime / 1000 / 60) % 60),
				seconds: Math.floor((remainingTime / 1000) % 60),
			});
		};

		calculateTime();
		const intervalId = setInterval(calculateTime, 1000);
		return () => clearInterval(intervalId);
	}, [targetTime]);

	interface TimeUnitProps {
		value: number;
		label: string;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	function TimeUnit({ value, label }: TimeUnitProps) {
		return isHydrated && value >= 0 ? (
			<div className="timeUnit text-center">
				<strong className="mb-2">{value > 9 ? value : `0${value}`}</strong>
				<div>{label}</div>
			</div>
		) : (
			<div className="timeUnit text-center">
				<strong className="mb-2">--</strong>
				<div>{label}</div>
			</div>
		);
	}

	if (!isHydrated) return null;

	return (
		<div className="countdown flex justify-center gap-y-6 flex-col p-6 rounded-xl max-w-xl mx-auto">
			<strong className="criticalInfo">
				<time dateTime={eventCheckInDateTime.toISOString()}>
					{dateFormat.formatRange(eventCheckInDateTime, eventEndDateTime)}
				</time>
			</strong>
			{/* <div className="flex justify-center gap-8">
				<TimeUnit
					value={timeRemaining.days}
					label="Days"
				/>
				<TimeUnit
					value={timeRemaining.hours}
					label="Hours"
				/>
				<TimeUnit
					value={timeRemaining.minutes}
					label="Minutes"
				/>
				<TimeUnit
					value={timeRemaining.seconds}
					label="Seconds"
				/>
			</div> Hiding the countdown timer for now */}
		</div>
	);
}
