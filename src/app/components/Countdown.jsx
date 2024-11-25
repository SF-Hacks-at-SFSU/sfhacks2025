"use client";

import { useState, useEffect } from "react";

const CountDown = ({ targetDate = "Apr 5, 2025 00:00:00" }) => {
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
			const target = new Date(targetDate).getTime();
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
	}, [targetDate]);

	const TimeUnit = ({ value, label }) => (
		<div className="text-center">
			<div className="text-4xl font-bold text-white mb-2">
				{value > 9 ? value : `0${value}`}
			</div>
			<div className="text-sm text-gray-300">{label}</div>
		</div>
	);

	if (!isHydrated) return null;

	return (
		<div className="flex justify-center gap-8 p-6 bg-[#14153F] rounded-xl max-w-xl mx-auto">
			<TimeUnit value={timeRemaining.days} label="Days" />
			<TimeUnit value={timeRemaining.hours} label="Hours" />
			<TimeUnit value={timeRemaining.minutes} label="Minutes" />
			<TimeUnit value={timeRemaining.seconds} label="Seconds" />
		</div>
	);
};

export default CountDown;
