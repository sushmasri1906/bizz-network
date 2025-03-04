import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About HelloBizz - Empowering Businesses",
	description:
		"Learn about HelloBizz, a platform designed to connect businesses and enhance their digital presence.",
};

export default function AboutHelloBizz() {
	return (
		<div className="container mx-auto p-6">
			<h1 className="text-3xl font-bold mb-4 text-center">About HelloBizz</h1>
			<p className="text-lg text-gray-700 mb-4">
				Welcome to <strong>HelloBizz</strong>, your one-stop solution for
				connecting businesses, fostering collaboration, and enhancing digital
				visibility. Our platform is designed to help businesses grow by
				leveraging cutting-edge technology and smart networking opportunities.
			</p>

			<h2 className="text-2xl font-semibold mt-6">Our Mission</h2>
			<p className="text-gray-700">
				At HelloBizz, we aim to bridge the gap between businesses and customers
				by providing a seamless platform for professional networking, marketing,
				and growth. Whether you&apos;re a startup, freelancer, or an established
				brand, we help you reach new heights.
			</p>

			<h2 className="text-2xl font-semibold mt-6">Why Choose HelloBizz?</h2>
			<ul className="list-disc pl-5 text-gray-700">
				<li>🚀 Connect with businesses and professionals worldwide.</li>
				<li>📈 Boost your online presence with a powerful digital platform.</li>
				<li>🤝 Build meaningful partnerships and collaborations.</li>
				<li>🔍 Discover new opportunities for growth and expansion.</li>
			</ul>

			<h2 className="text-2xl font-semibold mt-6">Join Us Today</h2>
			<p className="text-gray-700">
				Ready to take your business to the next level? Join{" "}
				<strong>HelloBizz</strong> today and be part of a thriving business
				community.
			</p>
		</div>
	);
}
