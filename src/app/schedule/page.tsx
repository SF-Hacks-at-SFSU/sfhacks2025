import Image from "next/image";
import "./styles.css";
import EventObject from "./components/Event";
import Schedule from "./components/Schedule";

export default function SchedulePage() {
	return (
		<main>
			<hgroup>
				<h1>Schedule</h1>
				<p>
					<strong>
						Disclaimer: Some workshops on day 1 have overlapping times
					</strong>
				</p>
			</hgroup>

			<Schedule></Schedule>
		</main>
	);
}
