import WithRole from "@/hoc/WithRole";
import { Role } from "@prisma/client";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
	return (
		<WithRole allowedRoles={[Role.ADMIN]}>
			<div>{children}</div>
		</WithRole>
	);
};

export default layout;
