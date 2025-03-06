import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-300 py-6">
			<div className="max-w-6xl mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
					<div>
						<h2 className="text-xl font-bold text-white mb-2">HexVibe</h2>
						<p className="text-sm">
							Bringing you the best social media experience, inspired by
							Instagram.
						</p>
					</div>

					<div>
						<h3 className="text-lg font-semibold text-white mb-2">
							Quick Link
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/legal/about"
									className="hover:text-red-500 transition">
									About
								</Link>
							</li>
							<li>
								<Link
									href="/legal/contact"
									className="hover:text-red-500 transition">
									Contact
								</Link>
							</li>
							<li>
								<Link
									href="/legal/privacy-policy"
									className="hover:text-red-500 transition">
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href="/legal/refund-policy"
									className="hover:text-red-500 transition">
									Refund Policy
								</Link>
							</li>
							<li>
								<Link
									href="/legal/terms-and-conditions"
									className="hover:text-red-500 transition">
									Terms & Conditions
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
						<div className="flex justify-center md:justify-start space-x-4">
							<Link
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-xl hover:text-blue-500 transition">
								<FaFacebook />
							</Link>
							<Link
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-xl hover:text-blue-400 transition">
								<FaTwitter />
							</Link>
							<Link
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-xl hover:text-pink-500 transition">
								<FaInstagram />
							</Link>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
					<p>© {new Date().getFullYear()} Hello-Bizz. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
