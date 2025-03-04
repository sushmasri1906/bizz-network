"use client";

import Link from "next/link";

export default function Hero() {
	return (
		<section className="relative w-full h-screen flex items-center justify-center text-center text-white pt-20">
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{ backgroundImage: "url('/herobc.webp')" }}>
				<div className="absolute inset-0 bg-black/70"></div>
			</div>

			{/* Content */}
			<div className="relative z-10 max-w-3xl px-6">
				{/* Headline */}
				<h1 className="text-4xl md:text-6xl font-bold leading-tight">
					Stronger Together.{" "}
					<span className="text-red-600">Smarter Business.</span>
				</h1>

				{/* Subheading */}
				<p className="mt-4 text-lg md:text-xl opacity-80">
					Join a thriving global network of business professionals. Build
					valuable connections, exchange referrals, and grow your business.
				</p>

				<div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
					<Link href="/invite">
						<button className="px-12 py-3 bg-red-600 text-white font-medium rounded-2xl transition-all duration-300 hover:bg-red-700">
							Get Invited
						</button>
					</Link>
					<Link href="/meeting">
						<button className="px-6 py-3 border-2 border-white text-white font-medium rounded-2xl transition-all duration-300 hover:bg-white hover:text-red-600">
							Attend a Meeting
						</button>
					</Link>
				</div>

				{/* Quick Stats */}
				<div className="mt-8 flex flex-wrap justify-center gap-6 text-sm opacity-80">
					<div>
						🌍 <span className="font-semibold">100,000+</span> Business
						Professionals
					</div>
					<div>
						🤝 <span className="font-semibold">Millions</span> in Referral
						Business
					</div>
					<div>
						📅 <span className="font-semibold">Global</span> Networking Events
					</div>
				</div>
			</div>
		</section>
	);
}
