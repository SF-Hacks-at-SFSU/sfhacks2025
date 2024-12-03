import type * as aboutUsTypes from "../types";
import Avatar from "./Avatar";

interface TeamSectionsProps {
	teams: aboutUsTypes.team[];
	members: aboutUsTypes.member[];
}

// This component is not used anywhere, it is just an alternative design for the aboutus page
export function TeamSections({ teams, members }: TeamSectionsProps) {
	return (
		<div>
			{teams.map((team) => (
				<section
					key={team.name}
					className="teamsContainer"
				>
					<h3>{team.name}</h3>
					<div className="teamMembersContainer">
						{team.memberIndices.map((index) => (
							<Avatar
								key={members[index].name}
								member={members[index]}
							></Avatar>
						))}
					</div>
				</section>
			))}
		</div>
	);
}
