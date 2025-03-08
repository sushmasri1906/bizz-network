import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="relative text-white">
			{/* CTA Box - Positioned on Footer */}
			<div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-3xl bg-red-600 text-white text-center py-8 rounded-2xl shadow-lg px-6 md:px-12">
				<h2 className="text-2xl md:text-3xl font-bold mb-4">
					Would you like to join <span className="text-white">Hello-Bizz?</span>
				</h2>
				<Link href="/join">
					<button className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 hover:bg-gray-200">
						CLICK HERE NOW
					</button>
				</Link>
			</div>

			{/* Footer Content */}
			<div className="bg-gray-900 text-gray-300 py-4 mt-12">
				<div className="max-w-6xl mx-auto px-6 mt-36">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
						{/* Company Info */}
						<div>
							<h2 className="text-xl font-bold text-white mb-3">Hello-Bizz</h2>
							<p className="text-sm leading-relaxed">
								Connecting professionals and businesses for growth, powered by
								Hello-Bizz B2B Network.
							</p>
						</div>

						{/* Quick Links */}
						<div>
							<h3 className="text-lg font-semibold text-white mb-3">
								Quick Links
							</h3>
							<ul className="space-y-2">
								{[
									{ href: "/legal/about", label: "About" },
									{ href: "/legal/contact", label: "Contact" },
									{ href: "/legal/privacy-policy", label: "Privacy Policy" },
									{ href: "/legal/refund-policy", label: "Refund Policy" },
									{
										href: "/legal/terms-and-conditions",
										label: "Terms & Conditions",
									},
								].map(({ href, label }) => (
									<li key={href}>
										<Link href={href} className="hover:text-red-500 transition">
											{label}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Social Links */}
						<div>
							<h3 className="text-lg font-semibold text-white mb-3">
								Follow Us
							</h3>
							<div className="flex justify-center md:justify-start space-x-4">
								{[
									{
										href: "https://facebook.com",
										icon: <FaFacebook />,
										color: "hover:text-blue-500",
									},
									{
										href: "https://twitter.com",
										icon: <FaTwitter />,
										color: "hover:text-blue-400",
									},
									{
										href: "https://instagram.com",
										icon: <FaInstagram />,
										color: "hover:text-pink-500",
									},
								].map(({ href, icon, color }) => (
									<Link
										key={href}
										href={href}
										target="_blank"
										rel="noopener noreferrer"
										className={`text-xl text-gray-400 transition ${color}`}>
										{icon}
									</Link>
								))}
							</div>
						</div>
					</div>

					{/* Copyright */}
					<div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
						<p>
							<span className="text-white">&copy;</span>{" "}
							{new Date().getFullYear()}{" "}
							<span className="text-white">Hello-Bizz</span>. All rights
							reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
