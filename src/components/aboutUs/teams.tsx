"use client";

import React, { Attributes } from "react";
import Avatar from "./avatar";
import { useState } from "react";
import type * as aboutUsTypes from "./types";

export default function Teams({ teams, members }: { teams: aboutUsTypes.team[], members: aboutUsTypes.member[] }) {
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
					<Avatar member={members[memberIndex]} key={i} />
				))}
			</div>
		</div>
	);
}

interface tabAttributes {
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
}: tabAttributes) {
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
