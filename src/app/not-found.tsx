import Link from "next/link";

const NotFound = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6 mb-30">
			<h1 className="text-4xl font-bold text-red-600">Page in Progress</h1>
			<p className="text-gray-700 m-5">
				This page is currently being built. Please check back later.
			</p>
			<Link href="/">
				<span className="mt-6 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition cursor-pointer">
					Go Back Home
				</span>
			</Link>
		</div>
	);
};

export default NotFound;
