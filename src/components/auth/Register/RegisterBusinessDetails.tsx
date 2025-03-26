"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const businessDetailsSchema = z.object({
	businessName: z.string().min(1, "Business name is required"),
	category: z.string().min(1, "Category is required"),
	panNumber: z.string().optional(),
	gstNumber: z.string().optional(),
	verified: z.boolean().optional(),
});

export default function RegisterBusinessDetails() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(businessDetailsSchema),
	});
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");

	const onSubmit = async (data: z.infer<typeof businessDetailsSchema>) => {
		setLoading(true);
		setMessage("");
		try {
			await axios.post("/api/register/business-details", data);
			setMessage("Business details submitted successfully!");
			router.push("/login");
		} catch (error) {
			console.error("Error submitting business details:", error);
			setMessage("Error submitting business details.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="max-w-md mx-auto p-4 border rounded-lg shadow-md">
			<h2 className="text-xl font-bold mb-4">Register Business Details</h2>
			{message && <p className="text-green-600">{message}</p>}
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				<div>
					<label className="block text-sm font-medium">Business Name</label>
					<input
						type="text"
						{...register("businessName")}
						className="w-full p-2 border rounded"
					/>
					{errors.businessName && (
						<p className="text-red-500">{errors.businessName.message}</p>
					)}
				</div>

				<div>
					<label className="block text-sm font-medium">Category</label>
					<input
						type="text"
						{...register("category")}
						className="w-full p-2 border rounded"
					/>
					{errors.category && (
						<p className="text-red-500">{errors.category.message}</p>
					)}
				</div>

				<div>
					<label className="block text-sm font-medium">
						PAN Number <sub>{`( Optional )`}</sub>
					</label>
					<input
						type="text"
						{...register("panNumber")}
						className="w-full p-2 border rounded"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium">
						GST Number <sub>{`( Optional )`}</sub>
					</label>
					<input
						type="text"
						{...register("gstNumber")}
						className="w-full p-2 border rounded"
					/>
				</div>

				{/* <div className="flex items-center">
					<input type="checkbox" {...register("verified")} className="mr-2" />
					<label className="text-sm">Verified</label>
				</div> */}

				<button
					type="submit"
					className="w-full p-2 bg-blue-500 text-white rounded"
					disabled={loading}>
					{loading ? "Submitting..." : "Submit"}
				</button>
			</form>
		</div>
	);
}
