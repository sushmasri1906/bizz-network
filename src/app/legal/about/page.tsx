import React from "react";

export default function AboutHelloBizz() {
	return (
		<div className="max-w-3xl mx-auto p-6 text-gray-800 mb-28">
			<h1 className="text-4xl font-bold text-center mb-6">About HelloBizz</h1>

			<p className="text-lg mb-6">
				<strong>HelloBizz</strong> is your go-to platform for connecting
				businesses, fostering collaborations, and enhancing digital visibility.
				We empower businesses with smart networking &amp; growth opportunities.
			</p>

			<section className="mb-6">
				<h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
				<p>
					We aim to bridge the gap between businesses &amp; customers by
					providing a seamless platform for professional networking, marketing,
					&amp; growth.
				</p>
			</section>

			<section className="mb-6">
				<h2 className="text-2xl font-semibold mb-2">Why Choose HelloBizz?</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>&#x1F680; Connect with professionals worldwide.</li>
					<li>&#x1F4C8; Boost your online presence effortlessly.</li>
					<li>&#x1F91D; Build meaningful business relationships.</li>
					<li>&#x1F50D; Discover new growth opportunities.</li>
				</ul>
			</section>

			<section>
				<h2 className="text-2xl font-semibold mb-2">Join Us Today</h2>
				<p>
					Ready to elevate your business? Be a part of{" "}
					<strong>HelloBizz</strong>
					&amp; unlock limitless opportunities.
				</p>
			</section>
		</div>
	);
}
