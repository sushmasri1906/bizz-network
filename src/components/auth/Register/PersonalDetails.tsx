"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

export default function Register() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormData>();

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const togglePassword = () => setShowPassword(!showPassword);
	const toggleConfirmPassword = () =>
		setShowConfirmPassword(!showConfirmPassword);

	const password = watch("password");
	const memorableQuestion = watch("memorableQuestion");

	interface FormData {
		username: string;
		password: string;
		confirmPassword: string;
		memorableQuestion: string;
		customQuestion?: string;
		answer: string;
		firstName: string;
		lastName: string;
		email: string;
		address1: string;
		address2: string;
		city: string;
		state: string;
		country: string;
		zip: string;
		phone: string;
	}

	// const onSubmit = async (data: FormData) => {
	// 	const trimmedData = Object.fromEntries(
	// 		Object.entries(data).map(([key, value]) => [
	// 			key,
	// 			typeof value === "string" ? value.trim() : value,
	// 		])
	// 	);
	// 	console.log("Submitted Data:", trimmedData);
	// 	const response = await axios.post("/api/members/register", trimmedData);
	// 	console.log(response.data);
	// };

	const handleFormSubmit: SubmitHandler<FormData> = async (data) => {
		console.log("Submitted Data:", data);
		const response = await axios.post("/api/members/register", data);
		console.log(response.data);
	};

	return (
		<div className="flex justify-center items-center min-h-screen bg-white p-6">
			<div className="w-full max-w-4xl bg-gray-100 shadow-md rounded-lg p-4">
				<h2 className="text-3xl font-bold mb-6 text-red-600 text-center">
					Personal Details
				</h2>
				<form
					onSubmit={handleSubmit(handleFormSubmit)}
					className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Username */}
					<div>
						<input
							{...register("username", {
								required: "Username is required",
								minLength: {
									value: 3,
									message: "Must be at least 3 characters",
								},
								pattern: {
									value: /^[a-zA-Z0-9]+$/,
									message: "No special characters allowed",
								},
							})}
							placeholder="Username *"
							className="w-full p-3 border rounded"
						/>
						{errors.username && (
							<p className="text-red-500 text-sm mt-1">
								{errors.username.message}
							</p>
						)}
					</div>
					{/* Password */}
					<div className="relative">
						<input
							type={showPassword ? "text" : "password"}
							{...register("password", {
								required: "Password is required",
								minLength: {
									value: 6,
									message: "Must be at least 6 characters",
								},
								pattern: {
									value:
										/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
									message:
										"Must include uppercase, number, and special character",
								},
							})}
							placeholder="Password *"
							className="w-full p-3 border rounded"
						/>
						<button
							type="button"
							className="absolute inset-y-0 right-3 flex text-red-600 items-center"
							onClick={togglePassword}>
							{showPassword ? <FaEyeSlash /> : <FaEye />}
						</button>
						{errors.password && (
							<p className="text-red-500 text-sm mt-1">
								{errors.password.message}
							</p>
						)}
					</div>
					{/* Other fields */} {/* Confirm Password */}
					<div className="relative">
						<input
							type={showConfirmPassword ? "text" : "password"}
							{...register("confirmPassword", {
								required: "Confirm Password is required",
								validate: (value) =>
									value === password || "Passwords do not match",
							})}
							placeholder="Confirm Password *"
							className="w-full p-2 border rounded"
						/>
						<button
							type="button"
							className="absolute inset-y-0 right-2 flex text-red-600 items-center"
							onClick={toggleConfirmPassword}>
							{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
						</button>
					</div>
					{errors.confirmPassword && (
						<p className="text-red-500 text-sm">
							{errors.confirmPassword.message?.toString()}
						</p>
					)}
					{/* Security Question */}
					<select
						{...register("memorableQuestion", {
							required: "Security Question is required",
						})}
						className="w-full p-2 border rounded">
						<option value="">Select a Security Question *</option>
						<option value="first_pet">What was your first pet’s name?</option>
						<option value="birth_city">What city were you born in?</option>
						<option value="custom">Custom Question</option>
					</select>
					{errors.memorableQuestion && (
						<p className="text-red-500 text-sm">
							{errors.memorableQuestion.message?.toString()}
						</p>
					)}
					{/* Custom Security Question */}
					{memorableQuestion === "custom" && (
						<input
							{...register("customQuestion", {
								required: "Custom question is required",
							})}
							placeholder="Enter your custom question *"
							className="w-full p-2 border rounded"
						/>
					)}
					{errors.customQuestion && (
						<p className="text-red-500 text-sm">
							{errors.customQuestion.message?.toString()}
						</p>
					)}
					{/* Answer */}
					<input
						{...register("answer", { required: "Answer is required" })}
						placeholder="Answer *"
						className="w-full p-2 border rounded"
					/>
					{errors.answer && (
						<p className="text-red-500 text-sm">
							{errors.answer?.message?.toString()}
						</p>
					)}
					{/* Name Fields */}
					<input
						{...register("firstName", { required: "First Name is required" })}
						placeholder="First Name *"
						className="w-full p-2 border rounded"
					/>
					<input
						{...register("lastName", { required: "Last Name is required" })}
						placeholder="Last Name *"
						className="w-full p-2 border rounded"
					/>
					{/* Email */}
					<input
						{...register("email", {
							required: "Email is required",
							pattern: {
								value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
								message: "Invalid email format",
							},
						})}
						placeholder="Email *"
						className="w-full p-2 border rounded"
					/>
					{errors.email && (
						<p className="text-red-500 text-sm">
							{errors.email.message?.toString()}
						</p>
					)}
					{/* Address */}
					<input
						{...register("address1", {
							required: "Address Line 1 is required",
						})}
						placeholder="Address Line 1 *"
						className="w-full p-2 border rounded"
					/>
					<input
						{...register("address2", {
							required: "Address Line 2 is required",
						})}
						placeholder="Address Line 2 *"
						className="w-full p-2 border rounded"
					/>
					<input
						{...register("city", { required: "City is required" })}
						placeholder="City *"
						className="w-full p-2 border rounded"
					/>
					<input
						{...register("state", { required: "State is required" })}
						placeholder="State/Province *"
						className="w-full p-2 border rounded"
					/>
					{/* Country */}
					<select
						{...register("country", { required: "Country is required" })}
						className="w-full p-2 border rounded">
						<option value="">Select Country *</option>
						<option value="India">India</option>
						<option value="USA">USA</option>
					</select>
					{errors.country && (
						<p className="text-red-500 text-sm">
							{errors.country.message?.toString()}
						</p>
					)}
					{/* Zip Code */}
					<input
						{...register("zip", {
							required: "Zip Code is required",
							minLength: { value: 4, message: "Must be at least 4 digits" },
						})}
						placeholder="Zip Code *"
						className="w-full p-2 border rounded"
					/>
					{/* Phone */}
					<input
						{...register("phone", { required: "Phone number is required" })}
						placeholder="Phone *"
						className="w-full p-2 border rounded"
					/>
					{/* Additional inputs follow similar structure */}
					{/* Submit Button */}
					<div className="col-span-1 md:col-span-2 flex justify-center">
						<button
							type="submit"
							className="w-full md:w-1/2 p-3 bg-red-500 text-white rounded hover:bg-red-600 transition">
							Register
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
