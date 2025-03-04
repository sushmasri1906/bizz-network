import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

import Link from "next/link";

export default function PersonalDetails() {
	return (
		<div className="bg-white shadow-lg rounded-lg p-4 w-[400px]  flex flex-col justify-between">
			<div className="flex justify-between items-center  p-4 mb-1">
				<h2 className="text-lg font-semibold text-red-600">Personal Details</h2>
				<FiEdit className="text-gray-500 cursor-pointer " />
			</div>
			<div className="space-y-2 text-sm">
				<div className="flex items-center space-x-2">
					<FaPhone className="text-gray-600" />
					<span className="text-gray-700">+918057213931</span>
				</div>
				<div className="flex items-center space-x-2">
					<FaEnvelope className="text-gray-600" />
					<Link
						href="mailto:mehta.sales395@gmail.com"
						className="text-blue-500 hover:underline">
						mehta.sales395@gmail.com
					</Link>
				</div>
				<div className="flex items-center space-x-2">
					<FaGlobe className="text-gray-600" />
					<Link
						href="http://www.godrejinterio.com"
						className="text-blue-500 hover:underline">
						www.godrejinterio.com
					</Link>
				</div>
				<div className="flex items-center space-x-2">
					<FaMapMarkerAlt className="text-gray-600" />
					<span className="text-gray-700">Haridwar, India</span>
				</div>
			</div>
		</div>
	);
}
