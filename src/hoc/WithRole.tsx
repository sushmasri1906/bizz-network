"use client";
// src/hoc/withRole.tsx
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { Role } from "@prisma/client"; // Ensure this matches your NextAuth role enum

interface WithRoleProps {
	allowedRoles: Role[]; // Define allowed roles for the component
	children: ReactNode;
}

const WithRole = ({ allowedRoles, children }: WithRoleProps) => {
	const { data: session, status } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (status === "loading") return; // Wait for session to load
		if (!session || !allowedRoles.includes(session.user.role)) {
			router.replace("/unauthorized"); // Redirect unauthorized users
		}
	}, [session, status, router, allowedRoles]);

	if (status === "loading" || !session) {
		return <p>Loading...</p>; // Prevent flash of unauthorized content
	}

	return <>{children}</>;
};

export default WithRole;
