import React from "react";
import Teams from "./components/Teams";
import "./styles.css";
import type * as aboutUsTypes from "./types";

const members: aboutUsTypes.member[] = [
	{ name: "Gabby", img: "/team/gabby.jpg" },
	{ name: "Justine", img: "/team/justine.jpg" },
	{ name: "Louella", img: "/team/louella.jpg" },
	{ name: "Hillary", img: "/team/hillary.jpg" },
	{ name: "Michelle", img: "/team/michelle.jpg" },
	{ name: "Declan", img: "/team/declan.jpg" },
	{ name: "Caedyn", img: "/team/caedyn.jpg" },
	{ name: "Marco", img: "/team/marco.jpg" },
	{ name: "Ashley", img: "/team/ashley.jpg" },
	{ name: "Ria", img: "/team/ria.jpg" },
	{ name: "Kurt", img: "/team/kurt.jpg" },
	{ name: "Vireak", img: "/team/v.jpg" },
	{ name: "Brandon", img: "/team/brandon.jpg" },
	{ name: "Matthew", img: "/team/matthew.jpg" },
	{ name: "Gavin", img: "/team/gavin.jpg" },
	{ name: "Adan", img: "/team/adan.jpg" },
	{ name: "Grishma", img: "/team/grishma.jpg" },
	{ name: "Christian", img: "/team/christian.jpg" },
	{ name: "Stella", img: "/team/stella.jpg" },
	{ name: "John", img: "/team/john.jpg" },
	{ name: "Trish", img: "/team/trish.jpg" },
	{ name: "William", img: "/team/william.jpg" },
	{ name: "Keith", img: "/team/keith.jpg" },
	{ name: "Malhar", img: "/team/malhar.jpg" },
	{ name: "Nalia", img: "/team/nalia.jpg" },
	{ name: "Rishita", img: "/team/rishita.jpg" },
	{ name: "Said", img: "/team/said.jpg" },
	{ name: "Sukrit", img: "/team/sukrit.jpg" },
	{ name: "Trenton", img: "/team/trenton.jpg" },
	{ name: "Maxwell", img: "/team/maxwell.jpg" },
	{ name: "Jim", img: "/team/jim.jpg" },
	{ name: "James", img: "/team/james.jpg" },
	{ name: "Akim", img: "/team/akim.jpg" },
	{ name: "Avinh", img: "/team/avinh.jpg" },
	{ name: "Kushvi", img: "/team/kushvi" }, //needs image
	{ name: "Om", img: "/team/om" }, //needs image
	{ name: "Krrish", img: "/team/krrish" }, //needs image
	{ name: "Kunj", img: "/team/kunj" }, //needs image
];

enum membersEnum {
	Gabby,
	Justine,
	Louella,
	Hillary,
	Michelle,
	Declan,
	Caedyn,
	Marco,
	Ashley,
	Ria,
	Kurt,
	Vireak,
	Brandon,
	Matthew,
	Gavin,
	Adan,
	Grishma,
	Christian,
	Stella,
	John,
	Trish,
	William,
	Keith,
	Malhar,
	Nalia,
	Rishita,
	Said,
	Sukrit,
	Trenton,
	Maxwell,
	Jim,
	James,
	Akim,
	Avinh,
	Kushvi,
	Om,
	Krrish,
	Kunj,
}

const teams: aboutUsTypes.team[] = [
	{
		name: "Design",
		memberIndices: [
			membersEnum.Gabby,
			membersEnum.Declan,
			membersEnum.Louella,
			membersEnum.Michelle,
			membersEnum.Hillary,
			membersEnum.Justine,
		], //
	},
	{
		name: "Engagement",
		memberIndices: [
			membersEnum.Ria,
			membersEnum.Caedyn,
			// membersEnum.Om
		],
	}, //
	{
		name: "Executive",
		memberIndices: [
			membersEnum.Keith,
			membersEnum.Ria,
			membersEnum.Marco,
			membersEnum.Ashley,
			membersEnum.Kurt,
		],
	},
	{
		name: "Finance",
		memberIndices: [
			membersEnum.Kurt,
			membersEnum.Matthew,
			// membersEnum.Krrish,
			membersEnum.Grishma,
			membersEnum.Brandon,
			membersEnum.Vireak,
		], //
	},
	{
		name: "Logistics",
		memberIndices: [
			membersEnum.Gavin,
			membersEnum.Adan,
			membersEnum.Christian,
			// membersEnum.Kunj,
			membersEnum.Stella,
			// membersEnum.Krrish,
			membersEnum.Grishma,
		],
	}, //
	{
		name: "Marketing",
		memberIndices: [
			//
			membersEnum.John,
			membersEnum.Trish,
			membersEnum.William,
		],
	},
	{
		name: "Outreach",
		memberIndices: [
			membersEnum.Keith,
			membersEnum.Malhar,
			membersEnum.Nalia,
			membersEnum.Rishita,
			// membersEnum.Said,
			membersEnum.Sukrit,
			membersEnum.Trenton,
		], //
	},
	{
		name: "Publicity",
		memberIndices: [
			membersEnum.Maxwell,
			membersEnum.Jim,
			membersEnum.James,
			// membersEnum.Kushvi,
		],
	}, //
	{
		name: "Tech",
		memberIndices: [
			membersEnum.Akim,
			membersEnum.John,
			membersEnum.Avinh,
			membersEnum.Vireak,
			membersEnum.Brandon,
		], //
	},
];

export default function Page() {
	return (
		<main className="aboutUs">
			<h1>About Us</h1>
			<p>
				SF Hacks is more than just an event, we are a team of passionate
				individuals dedicated to hosting this hackathon. Our diverse team spans
				across logistics, design, tech operations, social engagement, marketing,
				and outreach.
			</p>
			<h2>Meet Our Team</h2>
			<Teams
				teams={teams}
				members={members}
			/>
		</main>
	);
}
