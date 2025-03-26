"use client";
import React from "react";
import { useSession } from "next-auth/react";
import SignInButton from "./SignInButton";
import Link from "next/link";

const ProfileOrSignin = () => {
	const session = useSession();
	console.log(session.data?.user.id);
	return (
		<div>
			{session.data?.user.id ? (
				<Link href="/profile">
					<button className="px-4 py-1 text-white bg-red-600 rounded-2xl transition-all duration-300 hover:bg-white hover:text-red-600 border-2 border-red-600">
						Profile
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
