"use client";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
	};

	return (
		<div className="max-w-3xl mx-auto p-6 text-gray-800 mb-36">
			<h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
			<p className="text-lg text-center mb-6">
				We&apos;d love to hear from you! Reach out using the details below.
			</p>

			<hr className="my-6" />

			<section className="mb-6">
				<h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
				<p>
					<strong>Merchant Legal Entity:</strong> BIZ LINK NETWORK PRIVATE
					LIMITED
				</p>

				<h3 className="text-xl font-medium mt-4">Registered Address</h3>
				<p>
					Flat No.203, RR Heights, 7-1-414/6, Srinivasanagar, Sanjeev Reddy
					Nagar S.O, Ameerpet, Telangana, India, 500038
				</p>

				<h3 className="text-xl font-medium mt-4">Operational Address</h3>
				<p>
					Flat No.203, RR Heights, 7-1-414/6, Srinivasanagar, Sanjeev Reddy
					Nagar S.O, Ameerpet, Telangana, India, 500038
				</p>

				<h3 className="text-xl font-medium mt-4">Phone</h3>
				<p>
					&#x1F4DE;{" "}
					<Link href="tel:+918096053819" className="text-blue-500 underline">
						+91 8096053819
					</Link>
				</p>

				<h3 className="text-xl font-medium mt-4">Email</h3>
				<p>
					&#x2709;{" "}
					<Link
						href="mailto:infojaaaga@gmail.com"
						className="text-blue-500 underline">
						infojaaaga@gmail.com
					</Link>
				</p>
			</section>

			<p className="text-sm text-gray-500">
				Last updated on 04-03-2025 12:43:56
			</p>

			<hr className="my-6" />

			<section>
				<h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label htmlFor="name" className="block font-medium">
							Your Name:
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
							className="w-full p-2 border border-gray-300 rounded-md"
						/>
					</div>

					<div>
						<label htmlFor="email" className="block font-medium">
							Your Email:
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
							className="w-full p-2 border border-gray-300 rounded-md"
						/>
					</div>

					<div>
						<label htmlFor="message" className="block font-medium">
							Message:
						</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							required
							className="w-full p-2 border border-gray-300 rounded-md h-24"></textarea>
					</div>

					<button
						type="submit"
						className="bg-blue-500 text-white px-4 py-2 rounded-md">
						Send Message
					</button>
				</form>
			</section>
		</div>
	);
}
