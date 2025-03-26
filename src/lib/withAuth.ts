import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth"; // Ensure this is correctly set up
import { Role } from "@prisma/client";

export const withAuth = (
	handler: (
		req: NextRequest,
		{ id, role }: { id: string; role: Role }
	) => Promise<NextResponse>,
	allowedRoles?: Role[]
) => {
	return async (req: NextRequest) => {
		try {
			const session = await getServerSession(authOptions);
			console.log(session);
			if (!session || !session.user) {
				return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
			}

			const { id, role } = session.user as { id: string; role: Role };

			// Check if the user's role is allowed
			if (allowedRoles && !allowedRoles.includes(role)) {
				return NextResponse.json(
					{ error: "Forbidden: Insufficient Permissions" },
					{ status: 403 }
				);
			}

			// Pass the id and role to the handler function
			return handler(req, { id, role });
		} catch (error) {
			console.error("Auth error:", error);
			return NextResponse.json(
				{ error: "Internal Server Error" },
				{ status: 500 }
			);
		}
	};
};
