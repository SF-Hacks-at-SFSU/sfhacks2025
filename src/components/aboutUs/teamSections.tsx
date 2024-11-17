import type * as aboutUsTypes from "./types";
import { Avatar } from "./avatar";


// This component is not used anywhere, it is just an alternative design for the aboutus page
export function teamSections({ teams }: { teams: aboutUsTypes.team[] }) {
	return (
		<div>
			{teams.map((team) => (
				<section key={team.name} className="teamsContainer">
					<h3>{team.name}</h3>
					<div className="teamMembersContainer">
						{team.members.map((member) => (
							<Avatar key={member.name} member={member}></Avatar>
						))}
					</div>
				</section>
			))}
		</div>
	);
}
