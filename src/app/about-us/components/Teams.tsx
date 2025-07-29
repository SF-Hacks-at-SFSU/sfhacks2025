"use client";

import React from "react";
import Avatar from "./Avatar";
import { useState } from "react";
import type * as aboutUsTypes from "../types";

interface TeamsProps {
	teams: aboutUsTypes.team[];
	members: aboutUsTypes.member[];
}

export default function Teams({ teams, members }: TeamsProps) {
	const [activeTab, updateActiveTab] = useState(0);

	return (
		<div className="teams">
			<div className="tabs">
				{teams.map((team, i) => (
					<TeamTab
						teamIndex={i}
						activeIndex={activeTab}
						handleClick={updateActiveTab}
						key={i}
					>
						{team.name}
					</TeamTab>
				))}
			</div>
			<div className="members">
				{teams[activeTab].memberIndices.map((memberIndex, i) => (
					<Avatar
						member={members[memberIndex]}
						key={i}
					/>
				))}
			</div>
		</div>
	);
}

interface TeamTabProps {
	children: React.ReactNode;
	teamIndex: number;
	activeIndex: number;
	handleClick: (teamindex: number) => void;
}

function TeamTab({
	teamIndex,
	activeIndex,
	handleClick,
	children,
}: TeamTabProps) {
	const isActive = teamIndex == activeIndex;
	return (
		<button
			className="tab"
			onClick={() => handleClick(teamIndex)}
			key={teamIndex}
			disabled={isActive}
		>
			{/* The first div is for background purposes */}
			<div></div>
			<div>{children}</div>
		</button>
	);
}
