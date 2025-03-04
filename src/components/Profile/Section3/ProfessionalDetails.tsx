import { FiEdit } from "react-icons/fi";
import { FaBriefcase, FaClipboardList } from "react-icons/fa";

export default function ProfessionalDetails() {
	return (
		<div className="bg-white shadow-lg rounded-lg p-3 w-[500px] flex flex-col">
			<div className="flex justify-between items-center pb-1 mb-1">
				<h2 className="text-lg font-semibold text-red-600">
					Professional Details
				</h2>
				<FiEdit className="text-gray-500 cursor-pointer text-sm" />
			</div>
			<div className="space-y-2 text-gray-700 text-sm">
				<div className="flex items-center space-x-2">
					<FaBriefcase className="text-gray-600 text-base" />
					<span>Retail, Furniture Retailer</span>
				</div>
				<div className="flex items-start space-x-2">
					<FaClipboardList className="text-gray-600 mt-0.5 text-base" />
					<p>
						We are wholesale dealers of Godrej Interio Range of Furniture
						products viz. Home Furniture, Office Furniture, Customised Wardrobe,
						Modular Kitchens, Healthcare Furniture and Educational Furniture,
						Lab Furniture.
					</p>
				</div>
			</div>
		</div>
	);
}
