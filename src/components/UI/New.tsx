"use client";

import {
	FaCheckCircle,
	FaShieldAlt,
	FaCrown,
	FaStar,
	FaHandshake,
	FaBullhorn,
	FaGlobe,
	FaBriefcase,
	FaUsers,
	FaFemale,
	FaPlane,
	FaLaptop,
} from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export default function Services() {
	const [showMore, setShowMore] = useState(false);

	const services = [
		{
			title: "Unique Category ",
			description: "Stand out with exclusive classification.",
			icon: <FaBriefcase size={40} className="text-red-600" />,
		},
		{
			title: "Local Networking Access",
			description:
				"Grow your business through pitch clubs and networking events.",
			icon: <FaHandshake size={40} className="text-red-600" />,
		},
		{
			title: "Unlimited OPEN Network",
			description: "Expand your opportunities beyond boundaries.",
			icon: <FaGlobe size={40} className="text-red-600" />,
		},
		{
			title: "Power Teams Network",
			description: "Connect with high-value professionals in your industry.",
			icon: <FaUsers size={40} className="text-red-600" />,
		},
		{
			title: "Women's Network",
			description: "Exclusive networking space for women entrepreneurs.",
			icon: <FaFemale size={40} className="text-red-600" />,
		},
		{
			title: "Community Network",
			description: "Stay connected with your local business community.",
			icon: <FaUsers size={40} className="text-red-600" />,
		},
		{
			title: "B2C Lead Generation",
			description: "Engage potential customers through carnivals and events.",
			icon: <FaBullhorn size={40} className="text-red-600" />,
		},
		{
			title: "International Biz Access",
			description: "Expand your business reach to the USA and beyond.",
			icon: <FaPlane size={40} className="text-red-600" />,
		},
		{
			title: "Hello-Bizz Web Access",
			description: "Connect globally with businesses through our platform.",
			icon: <FaLaptop size={40} className="text-red-600" />,
		},
	];

	const pricingPlans = [
		{
			name: "Base",
			price: "Free",
			description: "Get started with limited access and basic support.",
			features: ["Limited Access", "Basic Support"],
			icon: <FaShieldAlt size={50} className="text-gray-600 mx-auto" />,
		},
		{
			name: "Gold",
			price: "₹5,000",
			description: "Access an expanded network with priority support.",
			features: ["Expanded Network Access", "Priority Support"],
			icon: <FaCrown size={50} className="text-yellow-500 mx-auto" />,
		},
		{
			name: "VIP",
			price: "₹12,099",
			description:
				"Enjoy premium features, exclusive events, and dedicated support.",
			features: [
				"Exclusive Events",
				"Dedicated Support",
				"All Features Included",
			],
			icon: <FaStar size={50} className="text-blue-600 mx-auto" />,
		},
	];

	return (
		<div className="max-w-6xl mx-auto py-12 px-6 bg-white m-20">
			<h1 className="text-4xl font-bold text-center text-black mb-10">
				Join Biz-Network & Expand Your Business!
			</h1>
			<p className="text-center text-black mb-12 text-lg">
				Connect, Network, and Grow with Exclusive Benefits!
			</p>
			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{(showMore ? services : services.slice(0, 6)).map((service, index) => (
					<div
						key={index}
						className="flex flex-col items-center text-center border border-red-600 p-6 rounded-lg shadow-lg bg-white transition transform hover:scale-105">
						{service.icon}
						<h3 className="text-xl font-semibold text-black mt-4">
							{service.title}
						</h3>
						<p className="text-gray-700 mt-2">{service.description}</p>
					</div>
				))}
			</div>
			<div className="text-center mt-6">
				<button
					className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
					onClick={() => setShowMore(!showMore)}>
					{showMore ? "View Less" : "View More"}
				</button>
			</div>

			<div className="text-center mt-16">
				<h2 className="text-3xl font-bold text-black">Pricing Plans</h2>
				<div className="grid gap-8 md:grid-cols-3 mt-8">
					{pricingPlans.map((plan, index) => (
						<div
							key={index}
							className="border border-red-600 p-8 rounded-lg shadow-lg bg-white text-center transition transform hover:scale-105 relative">
							{plan.name === "VIP" && (
								<span className="absolute top-0 right-0 bg-yellow-500 text-white px-3 py-1 text-sm font-semibold">
									Best Value
								</span>
							)}
							{plan.icon}
							<h3 className="text-2xl font-bold text-black mt-4">
								{plan.name}
							</h3>
							<p className="text-red-600 text-3xl font-semibold mt-2">
								{plan.price}
							</p>
							<p className="text-gray-700 mt-4">{plan.description}</p>
							<ul className="mt-6 text-black text-lg">
								{plan.features.map((feature, i) => (
									<li
										key={i}
										className="flex items-center gap-2 justify-center">
										<FaCheckCircle className="text-green-600" /> {feature}
									</li>
								))}
							</ul>
							<Link href="/signup">
								<button className="mt-6 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition">
									Get Started
								</button>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
