"use client"

import { useState, useRef, useEffect } from 'react';

export default function CountDown() {

	const Ref = useRef(null);

    var countDownDate = new Date("Apr 5, 2024 00:00:00");

	const total = Date.parse(countDownDate) - Date.parse(new Date());
	const seconds = Math.floor((total / 1000) % 60);
	const minutes = Math.floor((total / 1000 / 60) % 60);
	const hours = Math.floor((total / 1000 / 60 / 60) % 24);
	const days = Math.floor(total / (1000 * 60 * 60 * 24));

	const [timer, setTimer] = useState({days, hours, minutes, seconds});

	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
		return {
			total, days, hours, minutes, seconds
		};
	}

	const startTimer = (e) => {
		let { total, days, hours, minutes, seconds } = getTimeRemaining(e);
		
        if (total >= 0) {
            setTimer({days, hours, minutes, seconds});
		}
	}

	const clearTimer = (e) => {

		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000)
		Ref.current = id;
	}

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
		<div className="flex flex-row w-auto justify-between items-center gap-[5vw] m-5">
            <div className="flex flex-col gap-[auto] items-center text-[#FFF5D9] text-center text-xl not-italic font-[575] leading-[normal]">
                <h1>Days</h1>
			    <p className="text-[40px]">{timer.days > 9 ? timer.days : '0' + timer.days}</p>
            </div>
            <div className="flex flex-col gap-[auto] items-center text-[#FFF5D9] text-center text-xl not-italic font-[575] leading-[normal]">
                <h1>Hours</h1>
                <p className="text-[40px]">{timer.hours > 9 ? timer.hours : '0' + timer.hours}</p>
            </div>
            <div className="flex flex-col gap-[auto] items-center text-[#FFF5D9] text-center text-xl not-italic font-[575] leading-[normal]">
                <h1>Minutes</h1>
                <p className="text-[40px]">{timer.minutes > 9 ? timer.minutes : '0' + timer.minutes}</p>
            </div>
            <div className="flex flex-col gap-[auto] items-center text-[#FFF5D9] text-center text-xl not-italic font-[575] leading-[normal]">
                <h1>Seconds</h1>    
                <p className="text-[40px]">{timer.seconds > 9 ? timer.seconds : '0' + timer.seconds}</p>
            </div>
		</div>
	)
}