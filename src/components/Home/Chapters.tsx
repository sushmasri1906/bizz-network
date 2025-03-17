"use client";

import Link from "next/link";

export default function Chapters() {
	return (
		<section className="py-12 bg-white text-center mt-30">
			<h2 className="text-3xl font-bold text-black mb-6">Chapters</h2>
			<div className="flex flex-wrap justify-center gap-4">
				{["Kukatpally", "Secunderabad", "Ameerpet", "Kompally"].map(
					(chapter, index) => (
						<Link key={index} href="/login">
							<button className="px-6 py-3 bg-red-600 text-white rounded-lg transition-all duration-300 hover:bg-red-700">
								{chapter}
							</button>
						</Link>
					)
				)}
			</div>
		</section>
	);
}
