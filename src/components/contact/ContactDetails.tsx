"use client";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import {
	FaFacebookF,
	FaTwitter,
	FaLinkedinIn,
	FaInstagram,
	FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

const ContactDetails = () => {
	return (
		<section className="bg-gray-100 py-16 mb-12">
			<div className="max-w-6xl mx-auto px-5 text-center">
				<h2 className="text-3xl font-semibold text-gray-900">Contact Us</h2>
				<p className="text-gray-700 mt-4 max-w-4xl mx-auto">
					Have a question or need more information? Whether you&apos;re looking
					to become a member, connect with business leaders, or explore
					collaboration opportunities, we&apos;re here to support you. Reach
					out, and our team will connect you with the right resources to help
					you thrive.
				</p>

				{/* Contact Details */}
				<div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					<div className="bg-white shadow-2xl p-6 rounded-xl text-center">
						<FiMail className="w-12 h-12 mx-auto text-red-600" />
						<h3 className="text-lg font-semibold text-gray-800 mt-4">Email</h3>
						<p className="text-gray-600 mt-2">hellobiznetworking@gmail.com</p>
					</div>
					<div className="bg-white  p-6 shadow-2xl rounded-xl text-center">
						<FiPhone className="w-12 h-12 mx-auto text-red-600" />
						<h3 className="text-lg font-semibold text-gray-800 mt-4">Phone</h3>
						<p className="text-gray-600 mt-2">+91 9160666649</p>
					</div>
					<div className="bg-white shadow-2xl p-6 rounded-xl text-center">
						<FiMapPin className="w-12 h-12 mx-auto text-red-600" />
						<h3 className="text-lg font-semibold text-gray-800 mt-4">
							Location
						</h3>
						<p className="text-gray-600 mt-2">Hyderabad</p>
					</div>
				</div>

				{/* Contact Form */}
				<div className="bg-white shadow-2xl p-8 rounded-xl mt-10 max-w-2xl mx-auto">
					<h3 className="text-xl font-semibold text-gray-900">
						Send Us a Message
					</h3>
					<form className="mt-6 space-y-4">
						<input
							type="text"
							placeholder="Your Name"
							className="w-full p-3 border border-gray-300 rounded-lg"
						/>
						<input
							type="email"
							placeholder="Your Email"
							className="w-full p-3 border border-gray-300 rounded-lg"
						/>
						<textarea
							rows={4}
							placeholder="Your Message"
							className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
						<button className="bg-red-600 text-white py-2 px-3 rounded-2xl font-semibold hover:bg-red-700 transition">
							Send Message
						</button>
					</form>
				</div>

				{/* Social Media Icons */}
				<div className="mt-10 flex justify-center space-x-6">
					<Link href="#" className="text-[#1877F2] hover:text-red-600 text-2xl">
						<FaFacebookF />
					</Link>

					<Link href="#" className="text-[#E4405F] hover:text-red-600 text-2xl">
						<FaInstagram />
					</Link>
					<Link href="#" className="text-[#0A66C2] hover:text-red-600 text-2xl">
						<FaLinkedinIn />
					</Link>
					<Link
						href="https://www.youtube.com/@Biz-Network"
						className="text-[#FF0000] hover:text-red-700 text-2xl">
						<FaYoutube />
					</Link>
					<Link href="#" className="text-[#1DA1F2] hover:text-red-600 text-2xl">
						<FaTwitter />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ContactDetails;
