import React from "react";
import ProfessionalDetails from "./ProfessionalDetails";
import TrainingHistory from "./TrainingHistory";
import Groups from "./Groups";
import Photos from "./Photos";

const ProfessionalProfile = () => {
	return (
		<div className="bg-gray-200 shadow-md p-6 rounded-lg w-1/2 h-[550px] mx-auto text-center flex flex-col justify-between ">
			<ProfessionalDetails />
			<TrainingHistory />
			<Groups />
			<Photos />
		</div>
	);
};

export default ProfessionalProfile;
