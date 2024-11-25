import type * as aboutUsTypes from "../types";
import Avatar from "./Avatar";

// This component is not used anywhere, it is just an alternative design for the aboutus page
export function teamSections({
	teams,
	members,
}: {
	teams: aboutUsTypes.team[];
	members: aboutUsTypes.member[];
}) {
	return (
		<div>
			{teams.map((team) => (
				<section key={team.name} className="teamsContainer">
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
