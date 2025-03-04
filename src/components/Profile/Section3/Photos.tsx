import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

export default function Photos() {
	return (
		<div className="w-[500px] mx-auto bg-white shadow-lg rounded-xl p-3 m-2">
			<h2 className="text-lg font-semibold text-red-600  p-1 m-1">Photos</h2>
			<div className="flex items-center justify-center space-x-2">
				<FiChevronLeft className="text-gray-500 cursor-pointer text-lg" />
				<Image
					src="/path-to-your-image.jpg"
					alt="Gallery"
					className="w-16 h-16 object-cover rounded-lg"
					height={64}
					width={64}
				/>
				<FiChevronRight className="text-gray-500 cursor-pointer text-lg" />
			</div>
		</div>
	);
}
