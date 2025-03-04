"use client";

import React, { useState } from "react";
import { FiEdit, FiUser } from "react-icons/fi";
import Image from "next/image";

const ProfileHeader = () => {
	const [editMode, setEditMode] = useState(false);
	const [profile, setProfile] = useState({
		name: "Mr. Amit Mehta",
		location: "India > Uttarakhand > BNI Dev Ganga-Member",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setProfile({ ...profile, [e.target.name]: e.target.value });
	};

	return (
		<div className="bg-gray-200 h-[550px] shadow-lg p-6 rounded-lg w-full max-w-md mx-auto text-center flex flex-col  items-center justify-between">
			<div className="bg-white h-[530px] shadow-md rounded-xl p-6 w-full">
				<div className="relative mx-auto w-24 h-24 rounded-full border-4 border-gray-300 overflow-hidden">
					<Image
						src="/profile.jpg"
						alt="Profile"
						layout="fill"
						objectFit="cover"
					/>
				</div>

				{/* <span className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 bg-yellow-500 text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg border border-white">
					Gold
				</span> */}

				{!editMode ? (
					<>
						<h2 className="text-xl font-semibold mt-3">{profile.name}</h2>
						<p className="text-gray-600 text-sm">{profile.location}</p>
					</>
				) : (
					<div className="mt-3 space-y-2">
						<input
							type="text"
							name="name"
							value={profile.name}
							onChange={handleChange}
							className="w-full border p-2 rounded-lg"
						/>
						<input
							type="text"
							name="location"
							value={profile.location}
							onChange={handleChange}
							className="w-full border p-2 rounded-lg"
						/>
					</div>
				)}

				<div className="relative mt-4 w-full">
					<div className="bg-gray-200 h-2 rounded-full w-full">
						<div className="bg-green-500 h-2 rounded-full w-[92%]"></div>
					</div>
					<p className="text-green-600 text-sm mt-1">92% Complete</p>
				</div>

				<button
					onClick={() => setEditMode(!editMode)}
					className="mt-2 bg-red-600 text-white py-1 px-4 rounded-lg flex items-center justify-center mx-auto hover:bg-blue-600 transition">
					{editMode ? "Save" : "Update Profile"}
					<FiEdit className="ml-2" />
				</button>

				<div className="flex justify-center space-x-3 mt-4">
					{[1, 2, 3, 4].map((id) => (
						<div
							key={id}
							className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
							<FiUser className="text-gray-500 w-6 h-6" />
						</div>
					))}
				</div>
				<p className="text-red-600 font-bold mt-2">62 Connections</p>
				<p className="text-red-500 font-semibold">Testimonials</p>
				<p className="text-gray-500 text-sm">
					Build connections and share testimonials to enhance your credibility.
				</p>
			</div>
		</div>
	);
};

export default ProfileHeader;
