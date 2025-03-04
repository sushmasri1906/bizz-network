import React from "react";
import PersonalDetails from "./PersonalDetails";
import MyBio from "./MyBio";

const PersonalProfile = () => {
	return (
		<div className="bg-gray-200 shadow-md p-6 rounded-lg w-3/4 h-[550px] mx-auto text-center items-center flex flex-col justify-between ">
			<PersonalDetails />
			<MyBio />
		</div>
	);
};

export default PersonalProfile;
