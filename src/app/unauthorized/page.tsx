import Link from "next/link";
import React from "react";

const page = () => {
	return (
		<div>
			you are unauthorized to for this page.
			<Link href={"/"}>Back to home</Link>
		</div>
	);
};

export default page;
