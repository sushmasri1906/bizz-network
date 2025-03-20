"use client";
import React, { useState } from "react";

function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [token, setToken] = useState("");
	const [otp, setOtp] = useState("");

	const sendOtp = async () => {
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
		} else {
			alert("Invalid OTP!");
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<div>
				<h2>Register</h2>
				<input
					type="email"
					placeholder="Enter your email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="border p-2 rounded min-w-96"
				/>
				<input
					type="password"
					placeholder="Enter your password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="border p-2 rounded min-w-96"
				/>
			</div>

			<button
				onClick={sendOtp}
				className="bg-blue-500 text-white px-4 py-2 rounded">
				Verify Email
			</button>
			<div>
				<h2>Enter OTP</h2>
				<input
					type="text"
					placeholder="Enter OTP"
					value={otp}
					onChange={(e) => setOtp(e.target.value)}
					className="border p-2 rounded"
				/>
				<button
					onClick={verifyOtp}
					className="bg-green-500 text-white px-4 py-2 rounded">
					Verify OTP
				</button>
			</div>
		</div>
	);
}

export default Register;
