import Image from "next/image";
import React, { Suspense } from "react";
import type * as aboutUsTypes from "../types";

interface AvatarProps {
	member: aboutUsTypes.member;
}

export default function Avatar({ member }: AvatarProps) {
	return (
		<div className="avatar">
			<div>
				<Image
					src={member.img}
					fill={true}
					alt={member.name}
					sizes="5em 10em 20em"
				/>
			</div>
			<div>{member.name}</div>
		</div>
	);
}
