import PersonalHeader from "./Section1/ProfileHeader";
import PersonalProfile from "./Section2/PersonalProfile";
import ProfessionalProfile from "./Section3/ProfessionalProfile";

export default function ProfilePage() {
	return (
		<div className="flex gap-x-4 justify-center px-4">
			<PersonalHeader />
			<PersonalProfile />
			<ProfessionalProfile />
		</div>
	);
}
