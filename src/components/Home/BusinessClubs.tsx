"use client";

import Link from "next/link";

export default function BusinessClubs() {
	return (
		<section className="py-12 bg-white text-center mt-30">
			<h2 className="text-3xl font-bold text-black mb-6">Business Clubs</h2>
			<div className="flex flex-wrap justify-center gap-4">
				{[
					"Business Clubs",
					"Women Network",
					"Communal Wings",
					"Open Network",
					"B2C Events",
				].map((club, index) => (
					<Link key={index} href="/login">
						<button className="px-6 py-3 bg-red-600 text-white rounded-lg transition-all duration-300 hover:bg-red-700">
							{club}
						</button>
					</Link>
				))}
			</div>
		</section>
	);
}
