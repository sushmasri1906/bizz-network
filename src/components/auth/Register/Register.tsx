"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {
	const [token, setToken] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [otp, setOtp] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [error, setError] = useState("");
	const [otpSent, setOtpSent] = useState(false);
	const [successMessage, setSuccessMessage] = useState("");
	const router = useRouter();

	const validateEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const validatePassword = (pwd: string) => {
		const strongPasswordRegex =
			/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
		return strongPasswordRegex.test(pwd);
	};

	const handleGetOtp = async () => {
		if (!validateEmail(email.trim())) {
			setError("Please enter a valid email address.");
			return;
		}
		setError("");
		setOtpSent(true);
		setSuccessMessage("OTP sent successfully. Check your email.");
		const res = await fetch("/api/auth/send-otp", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email }),
		});

		const data = await res.json();
		if (data.success) {
			setToken(data.token);
			alert("OTP sent to your email!");
		} else {
			alert(data.message || "Error sending OTP!");
		}
	};

	const verifyOtp = async () => {
		const res = await fetch("/api/auth/verify-otp", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, otp, token, password }),
		});

		const data = await res.json();
		if (data.success) {
			alert("Email verified successfully! You can now continue registration.");
			// Redirect or show next registration step
			router.push("/login");
		} else {
			alert("Invalid OTP!");
		}
	};

	return (
		<div className="flex justify-center items-center h-screen bg-white">
			<div className="w-full max-w-sm p-6 bg-gray-100 rounded-lg shadow-md">
				<h2 className="text-xl font-semibold text-center text-red-600 mb-4">
					Email Verification
				</h2>
				<input
					type="email"
					placeholder="Mail"
					className="w-full p-2 border rounded mb-3"
					value={email}
					onChange={(e) => setEmail(e.target.value.trim())}
				/>
				<div className="relative mb-3">
					<input
						type={showPassword ? "text" : "password"}
						placeholder="Password"
						className="w-full p-2 border rounded"
						value={password}
						onChange={(e) => setPassword(e.target.value.trim())}
					/>
					<button
						type="button"
						className="absolute right-3 top-3 text-red-600"
						onClick={() => setShowPassword(!showPassword)}>
						{showPassword ? <FaEyeSlash /> : <FaEye />}
					</button>
				</div>
				<div className="relative mb-3">
					<input
						type={showConfirmPassword ? "text" : "password"}
						placeholder="Confirm Password"
						className="w-full p-2 border rounded"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value.trim())}
					/>
					<button
						type="button"
						className="absolute right-3 top-3 text-red-600"
						onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
						{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
					</button>
				</div>
				<div className="flex items-center gap-2 mb-3">
					<input
						type="text"
						placeholder="Verify Mail"
						className="flex-grow p-2 border rounded"
						value={otp}
						onChange={(e) => setOtp(e.target.value.trim())}
					/>
					<button
						onClick={handleGetOtp}
						className="text-red-600 text-sm border p-2 rounded"
						disabled={otpSent}>
						{otpSent ? "OTP Sent" : "Get OTP"}
					</button>
				</div>
				<button
					onClick={verifyOtp}
					className="w-full bg-red-600 text-white p-2 rounded mt-2"
					disabled={!otpSent || !validatePassword(password.trim())}>
					Next Step
				</button>
				{successMessage && (
					<p className="text-green-600 text-sm mt-3 text-center">
						{successMessage}
					</p>
				)}
				{error && (
					<p className="text-red-600 text-sm mt-3 text-center">{error}</p>
				)}
			</div>
		</div>
	);
}

export default Register;
