import "next-auth";
import { Role } from "@prisma/client";
declare module "next-auth" {
	interface User {
		id: string;
		email: string; // Explicitly define email as always available
		emailVerified: boolean;
		role: Role;
	}

	interface Session {
		user: User; // Link the extended User type here
	}
}
