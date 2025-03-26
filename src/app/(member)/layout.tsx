"use client";
import WithRole from "@/hoc/WithRole";
import { Role } from "@prisma/client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
	return (
		<WithRole
			allowedRoles={[Role.MEMBER, Role.CLUB_LEADER, Role.CHAPTER_LEADER]}>
			<div className="flex justify-between">
				<Link href="/dashboard">Member Dashboard</Link>
				<Link href="/edit-profile">edit profile</Link>
				<Link href="/profile">profile</Link>
				<Link href="/events">events</Link>
				<div>
					<button
						onClick={async () => {
							await signOut({ redirect: false }); // Prevent full page reload
							window.location.href = "/"; // Force session update
						}}>
						Logout
					</button>
				</div>
			</div>
			<div>{children}</div>
		</WithRole>
	);
};

export default layout;
