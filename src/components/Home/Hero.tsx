"use client";

import Link from "next/link";

export default function Hero() {
	return (
		<section className="relative w-full h-screen flex items-center justify-center text-center text-white pt-20">
			{/* Background Image with Overlay */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-fixed"
				style={{ backgroundImage: "url('/herobc.webp')" }}>
				<div className="absolute inset-0 bg-black/10"></div>
			</div>

			{/* Content */}
			<div className="relative z-10 max-w-3xl px-6">
				{/* Glassmorphic Overlay */}
				<div className="bg-white/2 backdrop-blur-xl  p-8 shadow-2xl border border-white/20">
					{/* Headline */}
					<h1 className="text-2xl md:text-5xl font-bold leading-tight">
						<span className="text-white">Connect | Collaborate | Grow</span>
					</h1>

					{/* Subheading */}
					<p className="mt-4 text-lg md:text-xl opacity-90">
						Join a thriving global network of business professionals. Build
						valuable connections, exchange referrals, and grow your business.
					</p>

					{/* Buttons */}
					<div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/invite">
							<button className="px-12 py-3 bg-red-600 text-white font-medium rounded-2xl transition-all duration-300 hover:bg-red-700 shadow-md">
								Get Access
							</button>
						</Link>
						<Link href="/meeting">
							<button className="px-6 py-3 border-2 border-white text-white font-medium rounded-2xl transition-all duration-300 hover:bg-white hover:text-red-600 shadow-md">
								Attend a Meeting
							</button>
						</Link>
					</div>

					{/* Quick Stats */}
					<div className="mt-8 flex flex-wrap justify-center gap-6 text-sm opacity-90">
						<div>
							🌍 <span className="font-semibold">2000+</span> Business
							Professionals
						</div>
						<div>
							🤝 <span className="font-semibold">Millions</span> in Referral
							Business
						</div>
						<div>
							📅 <span className="font-semibold">Global</span> Networking Events
							– India & USA
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
