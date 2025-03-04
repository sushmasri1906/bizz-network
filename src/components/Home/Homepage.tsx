import React from "react";
import Hero from "./Hero";
import WhyJoinUs from "./WhyJoinUs";
import ProfilePage from "../Profile/ProfilePage";
import Signin from "../auth/SignIn";

function Homepage() {
	return (
		<>
			<Hero />
			<WhyJoinUs />
			<ProfilePage />
			<Signin />
		</>
	);
}

export default Homepage;
