import NavBarCommon from "@/components/common/NavBarCommon";
import WithRole from "@/hoc/WithRole";
import { Role } from "@prisma/client";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
	const links = [
		{ name: "Dashboard", href: "/admin/dashboard" },
		{ name: "Chapters", href: "/admin/chapters" },
		{ name: "Business Clubs", href: "/admin/business-clubs" },
		{ name: "profile", href: "/admin/profile" },
	];
	return (
		<WithRole allowedRoles={[Role.ADMIN]}>
			<div className=" w-screen">
				<NavBarCommon links={links} />
				<div className="pt-16">{children}</div>
			</div>
		</WithRole>
	);
};

export default layout;
