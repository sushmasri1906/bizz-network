"use client";

import { memo } from "react";
import { FaUsers, FaHandshake, FaGlobe, FaChartLine } from "react-icons/fa";
import Link from "next/link";

const WhyJoinUs = () => {
	return (
		<section className="bg-gradient-to-b from-gray-50 to-gray-100 py-10 px-4 text-center">
			<h2 className="text-3xl font-bold mb-4 text-gray-800">
				Why Choose <span className="text-red-600">Biz</span>
				<span className="text-black inline-flex items-center">
					-Network<span className="text-sm align-top">®</span>
				</span>
			</h2>

			<p className="text-md text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
				Expand your network, build strong business relationships, and unlock new
				opportunities with Biz-Network&apos;s powerful referral system.
			</p>

			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
				{[
					{
						icon: <FaUsers size={35} />,
						title: "Expand Your Business",
						desc: "Connect with industry leaders and grow your brand.",
					},
					{
						icon: <FaHandshake size={35} />,
						title: "Trusted Referrals",
						desc: "Receive quality referrals from verified professionals.",
					},
					{
						icon: <FaGlobe size={35} />,
						title: "Exclusive Networking Events",
						desc: "Access local and global networking sessions.",
					},
					{
						icon: <FaChartLine size={35} />,
						title: "Business Growth Tools",
						desc: "Get expert guidance, resources, and mentorship.",
					},
				].map((item, index) => (
					<div
						key={index}
						className="bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-md hover:shadow-lg transition-all duration-300">
						<div className="text-red-600">{item.icon}</div>
						<h3 className="text-lg font-semibold mt-3 text-gray-900">
							{item.title}
						</h3>
						<p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
					</div>
				))}
			</div>

			<div className="mt-10">
				<p className="text-md font-semibold text-gray-900">
					Ready to Build Meaningful Connections?
				</p>
				<Link href="/join">
					<button
						aria-label="Join Biz-Network today"
						className="mt-4 bg-red-600 text-white px-5 py-2 rounded-lg text-md font-bold shadow-md hover:bg-white hover:text-red-600 border-2 border-red-600 transition-all duration-300 hover:shadow-lg">
						Join Today
					</button>
				</Link>
			</div>
		</section>
	);
};

export default memo(WhyJoinUs);
