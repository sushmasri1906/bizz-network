"use client";

import axios from "axios";
import { useState } from "react";

const RegisterForm = () => {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		confirmPassword: "",
		memorableQuestion: "",
		answer: "",
		prefix: "",
		firstName: "",
		lastName: "",
		email: "",
		phone: "+91",
		address1: "",
		address2: "",
		city: "",
		state: "",
		country: "Antarctica",
		zip: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Submitted Data:", formData);
		const data = await axios.post("/api/members/register", formData);
		console.log(data);
	};

	return (
		<div className="mx-auto">
			<h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
			<div className="mx-auto w-[420px]">
				<form onSubmit={handleSubmit} className="flex flex-col gap-4">
					<div className="flex">
						<label className="text-sm w-1/2 text-right mr-2">Username *</label>
						<input
							type="text"
							name="username"
							placeholder="Username *"
							className="input border border-gray-300 grow"
							onChange={handleChange}
							required
						/>
					</div>
					<div className="flex">
						<label className="text-sm w-1/2 text-right mr-2">Password *</label>
						<input
							type="password"
							name="password"
							placeholder="Password *"
							className="input border border-gray-300 grow"
							onChange={handleChange}
							required
						/>
					</div>
					<div className="flex">
						<label className="text-sm w-1/2 text-right mr-2">
							Confirm Password *
						</label>
						<input
							type="password"
							name="confirmPassword"
							placeholder="Confirm Password *"
							className="input border border-gray-300 grow"
							onChange={handleChange}
							required
						/>
					</div>
					<div className="flex">
						<label className="text-sm w-1/2 text-right mr-2">
							Memorable Question *
						</label>
						<input
							type="text"
							name="memorableQuestion"
							placeholder="Memorable Question *"
							className="input border border-gray-300 grow"
							onChange={handleChange}
							required
						/>
					</div>
					<div className="flex">
						<label className="text-sm w-1/2 text-right mr-2">Answer *</label>
						<input
							type="text"
							name="answer"
							placeholder="Answer *"
							className="input border border-gray-300 grow"
							onChange={handleChange}
							required
						/>
					</div>

					<div className="flex">
						<label className="text-sm w-1/2 text-right mr-2">Prefix</label>
						<select
							name="prefix"
							className="input border border-gray-300 grow"
							onChange={handleChange}>
							<option value="">Select Prefix</option>
							<option value="Mr.">Mr.</option>
							<option value="Ms.">Ms.</option>
							<option value="Dr.">Dr.</option>
						</select>
					</div>

					<div className="flex">
						<label className="text-sm w-1/2 text-right mr-2">
							First Name *
						</label>
						<input
							type="text"
							name="firstName"
							placeholder="First Name *"
							value={formData.firstName}
							className="input border border-gray-300 grow"
							onChange={handleChange}
							required
						/>
					</div>
					<div className="flex">
						<label className="text-sm w-1/2 text-right mr-2">Last Name *</label>
						<input
							type="text"
							name="lastName"
							placeholder="Last Name *"
							value={formData.lastName}
							className="input border border-gray-300 grow"
							onChange={handleChange}
							required
						/>
					</div>
					<div className="flex">
						<label className="text-sm w-1/2 text-right mr-2">Email *</label>
						<input
							type="email"
							name="email"
							placeholder="Email *"
							value={formData.email}
							className="input border border-gray-300 grow"
							onChange={handleChange}
							required
						/>
					</div>

					<div className="flex">
						<label className="text-sm w-1/2 text-right mr-2">Phone *</label>
						<input
							type="tel"
							name="phone"
							placeholder="Phone *"
							value={formData.phone}
							className="input border border-gray-300 grow"
							onChange={handleChange}
							required
						/>
					</div>
					<div className="flex">
						<label className="text-sm w-1/2 text-right mr-2">Address *</label>
						<input
							type="text"
							name="address1"
							placeholder="Address Line 1 *"
							value={formData.address1}
							className="input border border-gray-300 grow"
							onChange={handleChange}
							required
						/>
					</div>
					<div className="flex">
						<label className="text-sm w-1/2 text-right mr-2">
							Address Line 2
						</label>
						<input
							type="text"
							name="address2"
							placeholder="Address Line 2"
							className="input border border-gray-300 grow"
							onChange={handleChange}
						/>
					</div>
					<div className="flex">
						<label className="text-sm w-1/2 text-right mr-2">City *</label>
						<input
							type="text"
							name="city"
							placeholder="City *"
							className="input border border-gray-300 grow"
							onChange={handleChange}
							required
						/>
					</div>
					<div className="flex">
						<label className="text-sm w-1/2 text-right mr-2">
							State/Province
						</label>
						<input
							type="text"
							name="state"
							placeholder="State/Province"
							className="input border border-gray-300 grow"
							onChange={handleChange}
						/>
					</div>

					<div className="flex">
						<label className="text-sm w-1/2 text-right mr-2">Country *</label>
						<select
							name="country"
							className="input  border-gray-300"
							onChange={handleChange}>
							<option value="India">India</option>
							<option value="USA">USA</option>
						</select>
					</div>

					<div className="flex">
						<label className="text-sm w-1/2 text-right mr-2">
							Zip/Postal Code *
						</label>
						<input
							type="text"
							name="zip"
							placeholder="Zip/Postal Code *"
							className="input  border-gray-300"
							onChange={handleChange}
							required
						/>
					</div>

					<div className="mx-auto">
						<button type="submit" className="bg-green-400 rounded p-2 mt-4">
							Register
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RegisterForm;
