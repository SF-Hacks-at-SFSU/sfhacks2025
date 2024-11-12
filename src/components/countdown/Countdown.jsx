"use client";

import { useState, useRef, useEffect } from "react";

export default function CountDown() {
	const Ref = useRef(null);

	var countDownDate = new Date("Apr 5, 2025 00:00:00");

	const total = Date.parse(countDownDate) - Date.parse(new Date());
	const seconds = Math.floor((total / 1000) % 60);
	const minutes = Math.floor((total / 1000 / 60) % 60);
	const hours = Math.floor((total / 1000 / 60 / 60) % 24);
	const days = Math.floor(total / (1000 * 60 * 60 * 24));

	const [timer, setTimer] = useState({ days, hours, minutes, seconds });

	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / 1000 / 60 / 60) % 24);
		const days = Math.floor(total / (1000 * 60 * 60 * 24));
		return {
			total,
			days,
			hours,
			minutes,
			seconds,
		};
	};

	const startTimer = (e) => {
		let { total, days, hours, minutes, seconds } = getTimeRemaining(e);

		if (total >= 0) {
			setTimer({ days, hours, minutes, seconds });
		}
	};

	const clearTimer = (e) => {
		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000);
		Ref.current = id;
	};

	useEffect(() => {
		clearTimer(countDownDate);
	}, []);

	// Returns null on first render, so the client and server match
	const [hydrated, setHydrated] = useState(false);
	useEffect(() => {
		setHydrated(true);
	}, []);
	if (!hydrated) {
		return null;
	}

	return (
		// old tailwind
		// <div className="flex flex-row w-auto justify-between gap-[5vw] bg-sfyellow p-3 rounded-xl ">
		//   <div className="flex flex-col gap-[auto] items-center text-black  text-center text-xl not-italic font-[200] leading-[normal]">
		//     <h1>Days</h1>
		//     <p className="text-[25px]">
		//       {timer.days > 9 ? timer.days : "0" + timer.days}
		//     </p>
		<table className="countdown">
			{/* <caption>Time until event</caption> */}
			<thead>
				<tr>
					<th>Days</th>
					<th>Hours</th>
					<th>Minutes</th>
					<th>Seconds</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{timer.days > 9 ? timer.days : "0" + timer.days}</td>
					<td>{timer.days > 9 ? timer.hours : "0" + timer.hours}</td>
					<td>{timer.days > 9 ? timer.minutes : "0" + timer.minutes}</td>
					<td>{timer.days > 9 ? timer.seconds : "0" + timer.seconds}</td>
				</tr>
			</tbody>
		</table>
	);
}
