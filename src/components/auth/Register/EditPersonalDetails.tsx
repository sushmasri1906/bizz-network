"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const personalDetailsSchema = z.object({
	firstName: z.string().min(1, "First name is required"),
	lastName: z.string().min(1, "Last name is required"),
	phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
	phoneVerified: z.boolean().optional(),
	address: z.object({
		street: z.string().min(1, "Street is required"),
		city: z.string().min(1, "City is required"),
		state: z.string().min(1, "State is required"),
		zip: z.string().min(4, "Must be at least 4 digits"),
	}),
});

export default function EditPersonalDetails() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: zodResolver(personalDetailsSchema) });
	const router = useRouter();
	const { data: session, update } = useSession();

	const handleFormSubmit = async (
		data: z.infer<typeof personalDetailsSchema>
	) => {
		try {
			const personalDetails = await axios.post(
				"/api/register/personal-details",
				data
			);
			console.log("Personal Details:", personalDetails);
			await update({
				user: {
					...session?.user,
					personalDetailsId: personalDetails.data.id, // Assuming API returns `id`
				},
			});
			router.push("/register/business-details");
		} catch (error) {
			console.error("Error submitting form:", error);
		}
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
					<input
						{...register("firstName")}
						placeholder="First Name *"
						className="w-full p-2 border rounded"
					/>
					{errors.firstName && (
						<p className="text-red-500 text-sm">{errors.firstName.message}</p>
					)}
					<input
						{...register("lastName")}
						placeholder="Last Name *"
						className="w-full p-2 border rounded"
					/>
					{errors.lastName && (
						<p className="text-red-500 text-sm">{errors.lastName.message}</p>
					)}
					<input
						{...register("phone")}
						placeholder="Phone *"
						className="w-full p-2 border rounded"
					/>
					{errors.phone && (
						<p className="text-red-500 text-sm">{errors.phone.message}</p>
					)}

					{/* Address Fields */}
					<div className="col-span-1 md:col-span-2">
						<h3 className="text-xl font-semibold mb-3 text-gray-700">
							Address
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<input
								{...register("address.street")}
								placeholder="Street *"
								className="w-full p-2 border rounded"
							/>
							{errors.address?.street && (
								<p className="text-red-500 text-sm">
									{errors.address.street.message}
								</p>
							)}
							<input
								{...register("address.city")}
								placeholder="City *"
								className="w-full p-2 border rounded"
							/>
							{errors.address?.city && (
								<p className="text-red-500 text-sm">
									{errors.address.city.message}
								</p>
							)}
							<input
								{...register("address.state")}
								placeholder="State *"
								className="w-full p-2 border rounded"
							/>
							{errors.address?.state && (
								<p className="text-red-500 text-sm">
									{errors.address.state.message}
								</p>
							)}
							<input
								{...register("address.zip")}
								placeholder="Zip Code *"
								className="w-full p-2 border rounded"
							/>
							{errors.address?.zip && (
								<p className="text-red-500 text-sm">
									{errors.address.zip.message}
								</p>
							)}
						</div>
					</div>

					<div className="col-span-1 md:col-span-2 flex justify-center">
						<button
							type="submit"
							className="w-full md:w-1/2 p-3 bg-red-500 text-white rounded hover:bg-red-600 transition">
							Upload personal details
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
