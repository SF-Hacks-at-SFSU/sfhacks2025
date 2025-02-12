"use client";

import { useState, useEffect } from "react";

const eventStartDate = new Date("Apr 4, 2025 00:00:00");
const eventEndDate = new Date("Apr 6, 2025 00:00:00");

const dateFormat = new Intl.DateTimeFormat(undefined, { dateStyle: "long" });

function CountDown() {
	const [timeRemaining, setTimeRemaining] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	const [isHydrated, setIsHydrated] = useState(false);

	useEffect(() => {
		setIsHydrated(true);

		const calculateTime = () => {
			const now = new Date().getTime();
			const target = new Date(eventStartDate).getTime();
			const total = target - now;

			if (total <= 0) {
				setTimeRemaining({
					days: 0,
					hours: 0,
					minutes: 0,
					seconds: 0,
				});
				return;
			}

			setTimeRemaining({
				days: Math.floor(total / (1000 * 60 * 60 * 24)),
				hours: Math.floor((total / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((total / 1000 / 60) % 60),
				seconds: Math.floor((total / 1000) % 60),
			});
		};

		calculateTime();
		const intervalId = setInterval(calculateTime, 1000);
		return () => clearInterval(intervalId);
	}, []);

	interface TimeUnitProps {
		value: number;
		label: string;
	}

	function TimeUnit({ value, label }: TimeUnitProps) {
		return (
			<div className="text-center">
				<div className="text-3xl font-bold text-white mb-2">
					{value > 9 ? value : `0${value}`}
				</div>
				<div className="text-sm text-gray-300">{label}</div>
			</div>
		);
	}

	if (!isHydrated) return null;

	return (
		<div className="flex justify-center gap-y-6 flex-col p-6 bg-[#14153F] rounded-xl max-w-xl mx-auto">
			<p>
				<time
					className="text-4xl font-bold text-white"
					dateTime={eventStartDate.toISOString()}
				>
					{dateFormat.formatRange(eventStartDate, eventEndDate)}
				</time>
			</p>
			<div className="flex justify-center gap-8">
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
			</div>
		</div>
	);
}

export default CountDown;
