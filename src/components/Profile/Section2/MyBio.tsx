import { FiChevronRight, FiEdit } from "react-icons/fi";

export default function MyBio() {
	const items = [
		"GAINS Profile",
		"My Bio",
		"Tops Profile",
		"Weekly Presentations",
	];

	return (
		<div className="bg-white shadow-lg rounded-lg p-4 w-[400px]  flex flex-col justify-between ">
			<div className="flex justify-between items-center  pb-2 mb-4">
				<h2 className="text-lg font-semibold text-red-600">My Bio</h2>
				<FiEdit className="text-gray-500 cursor-pointer" />
			</div>
			<ul className="space-y-2">
				{items.map((item, index) => (
					<li
						key={index}
						className="flex justify-between items-center py-2 px-2 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200">
						<span className="text-gray-700">{item}</span>
						<FiChevronRight className="text-gray-500" />
					</li>
				))}
			</ul>
		</div>
	);
}
