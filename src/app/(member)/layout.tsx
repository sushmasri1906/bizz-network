import WithRole from "@/hoc/WithRole";
import { Role } from "@prisma/client";
import React, { ReactNode } from "react";
import NavBarCommon from "@/components/common/NavBarCommon";

const layout = ({ children }: { children: ReactNode }) => {
	const links = [
		{ name: "Dashboard", href: "/dashboard" },
		{ name: "Chapters", href: "/chapters" },
		{ name: "Business Clubs", href: "/business-clubs" },
		{ name: "profile", href: "/profile" },
	];
	return (
		<WithRole
			allowedRoles={[Role.MEMBER, Role.CLUB_LEADER, Role.CHAPTER_LEADER]}>
			<div className=" w-screen">
				<NavBarCommon links={links} />
				<div className="pt-16">{children}</div>
			</div>
		</WithRole>
	);
};

export default layout;
