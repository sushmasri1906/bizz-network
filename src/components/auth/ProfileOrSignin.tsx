"use client";
import React from "react";
import { useSession } from "next-auth/react";
import SignInButton from "./SignInButton";
import Link from "next/link";
import { Role } from "@prisma/client";

const ProfileOrSignin = () => {
	const rolePaths: Record<Role, string> = {
		ADMIN: "/admin/dashboard",
		CHAPTER_LEADER: "/chapter-leader/dashboard",
		CLUB_LEADER: "/club-leader/dashboard",
		MEMBER: "/dashboard",
	};
	const session = useSession();
	return (
		<div>
			{session.data?.user.id ? (
				<Link href={rolePaths[session.data.user.role] || "/dashboard"}>
					<button className="px-4 py-1 text-white bg-red-600 rounded-2xl transition-all duration-300 hover:bg-white hover:text-red-600 border-2 border-red-600">
						Dashboard
					</button>
				</Link>
			) : (
				<SignInButton>
					<button className="px-4 py-1 text-white bg-red-600 rounded-2xl transition-all duration-300 hover:bg-white hover:text-red-600 border-2 border-red-600">
						Login
					</button>
				</SignInButton>
			)}
		</div>
	);
};

export default ProfileOrSignin;
