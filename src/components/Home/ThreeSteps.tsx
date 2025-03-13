"use client";

import { memo, useMemo } from "react";
import { motion } from "framer-motion";

const ThreeSteps = () => {
	const steps = useMemo(
		() => [
			{
				id: "01",
				title: "Join a Biz-Network Chapter",
				description:
					"Experience the power of business networking and collaboration.",
			},
			{
				id: "02",
				title: "Connect with Members",
				description: "Build relationships and discover growth opportunities.",
			},
			{
				id: "03",
				title: "Expand Your Business",
				description:
					"Leverage the network to increase your business potential.",
			},
		],
		[]
	);

	return (
		<section
			className="text-center py-12 text-white mb-24 bg-cover bg-center"
			style={{
				backgroundImage:
					"url('https://res.cloudinary.com/dsq4uyqbb/image/upload/v1741688398/redmap_zicwtt.jpg')",
			}}>
			<motion.h2
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="text-3xl font-bold">
				Your <span>Biz-Network Journey</span>
			</motion.h2>

			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 0.3 }}
				className="mt-2 max-w-2xl mx-auto">
				Start your business growth journey with Biz-Network by following these
				steps.
			</motion.p>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-5xl mx-auto">
				{steps.map((step, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: index * 0.2 }}
						whileHover={{
							scale: 1.08,
							boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)",
						}}
						viewport={{ once: true }}
						className="p-6">
						<div className="flex flex-col items-center">
							<div className="w-14 h-14 flex items-center justify-center text-xl font-bold bg-white text-red-600 rounded-full">
								{step.id}
							</div>

							<h3 className="mt-4 text-lg font-semibold">{step.title}</h3>

							<p className="text-center mt-2 text-gray-200">
								{step.description}
							</p>
						</div>
					</motion.div>
				))}
			</div>

			<div>
				<button
					aria-label="Get Access to Biz-Network"
					className="text-white font-bold bg-red-600 rounded-2xl py-2 px-5 mt-6 transition-all duration-300 hover:bg-white hover:text-red-600 border-2 border-red-600 shadow-md">
					Get Access
				</button>
			</div>
		</section>
	);
};

export default memo(ThreeSteps);
