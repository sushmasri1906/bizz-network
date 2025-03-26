"use client";
import { signOut } from "next-auth/react";
import { ReactNode } from "react";

const SignOutButton = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex-1" onClick={() => signOut()}>
			{children}
		</div>
	);
};

export default SignOutButton;
