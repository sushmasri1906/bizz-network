import React from "react";
import Link from "next/link";

const ContactHero = () => {
	return (
		<section
			className="relative  text-white py-20 px-6 text-center bg-cover bg-center z-50  mt-14"
			style={{
				backgroundImage:
					"url('https://res.cloudinary.com/dsq4uyqbb/image/upload/v1741775932/contact_pweyt3.jpg')",
			}}>
			<div className="absolute inset-0 bg-black opacity-60"></div>
			<div className="relative max-w-4xl mx-auto p-8 rounded-lg">
				<h1 className="text-4xl font-bold mb-4">
					Get in Touch with Our Business Network
				</h1>

				<h3 className="text-lg mb-6">
					We provide top-notch solutions to help your business grow. Contact us
					today!
				</h3>
				<Link
					href="/contact"
					className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition mt-6">
					Contact Us
				</Link>
			</div>
		</section>
	);
};

export default ContactHero;
