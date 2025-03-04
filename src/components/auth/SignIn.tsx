"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Logging in with", email, password);
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-100">
			<div className="flex bg-white shadow-lg max-w-4xl w-full">
				<div className="w-1/2 bg-gray-100 p-8 flex flex-col justify-center">
					<h1 className="text-4xl font-bold text-red-600">Hello-Bizz</h1>
					<p className="mt-4 text-gray-600">
						Hello-Bizz is an online networking platform for professionals. Join
						a local chapter to get started.
					</p>

                    <p>Copyright2025 Hello-Bizz</p>
                    <div>
                        <span>Terms of Use</span>
                        <span>Privacy Policy</span>
                        <span>Browser Policy</span>
                    </div>
				</div>

				<div className="w-1/2 p-8 flex flex-col justify-center">
					<h2 className="text-2xl font-semibold text-gray-800">
						Sign-in to Hello-Bizz
					</h2>
					<form onSubmit={handleSubmit} className="space-y-4 mt-4">
						<div>
							<label className="block text-gray-700">Username</label>
							<input
								type="email"
								className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div>
							<label className="block text-gray-700">Password</label>
							<input
								type="password"
								className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition">
							SIGN IN
						</button>
					</form>
					<p className="text-sm text-red-600 mt-3">
						<Link href="/forgot-password" className="hover:underline">
							Forgotten Username or Password?
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
