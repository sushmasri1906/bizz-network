"use client";

import { FaUsers, FaHandshake, FaGlobe, FaChartLine } from "react-icons/fa";
import Link from "next/link";

export default function WhyJoinUs() {
	return (
		<section className="bg-gray-50 py-12 px-6 text-center">
			<h2 className="text-4xl font-bold mb-4 text-center">
				Why Choose <span className="text-red-600">Hello</span>-
				<span className="text-black inline-flex items-center">
					Bizz
					<span className="text-lg border border-gray-900 rounded-full w-6 h-6 flex items-center justify-center ml-1 mb-3">
						™
					</span>
				</span>
			</h2>

			<p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
				Join a thriving network of professionals and take your business to the
				next level with high-value connections and referrals.
			</p>

			<div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
				{[
					{
						icon: <FaUsers size={40} />,
						title: "Expand Your Business",
						desc: "Connect with industry leaders and grow your brand.",
					},
					{
						icon: <FaHandshake size={40} />,
						title: "Trusted Referrals",
						desc: "Receive quality referrals from verified professionals.",
					},
					{
						icon: <FaGlobe size={40} />,
						title: "Exclusive Networking Events",
						desc: "Access local and global networking sessions.",
					},
					{
						icon: <FaChartLine size={40} />,
						title: "Business Growth Tools",
						desc: "Get expert guidance, resources, and mentorship.",
					},
				].map((item, index) => (
					<div
						key={index}
						className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition duration-300">
						<div className="text-red-600">{item.icon}</div>
						<h3 className="text-xl font-semibold mt-3">{item.title}</h3>
						<p className="text-gray-600 mt-2">{item.desc}</p>
					</div>
				))}
			</div>

			<div className="mt-10">
				<p className="text-lg font-semibold text-gray-800 mb-4">
					Ready to Build Meaningful Connections?
				</p>
				<Link href="/join">
					<button className="bg-red-600 text-white px-6 py-2 rounded-xl text-lg font-bold hover:bg-white hover:text-red-600 border-2 border-red-600 transition-all duration-300">
						Join Today
					</button>
				</Link>
			</div>
		</section>
	);
}
