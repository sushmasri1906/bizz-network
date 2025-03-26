import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const businessDetailsSchema = z.object({
	businessName: z.string().min(1, "Business name is required"),
	category: z.string().min(1, "Category is required"),
	panNumber: z.string().optional(),
	gstNumber: z.string().optional(),
	verified: z.boolean().optional(),
	userId: z.string(),
});

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const validatedData = businessDetailsSchema.parse(body);

		const businessDetails = await prisma.businessDetails.create({
			data: validatedData,
		});

		return NextResponse.json(
			{ success: true, data: businessDetails },
			{ status: 201 }
		);
	} catch (error) {
		//  catch (error) {
		// 	return NextResponse.json(
		// 		{ success: false, error: error.message },
		// 		{ status: 400 }
		// 	);
		// }
		if (error instanceof Error) {
			return NextResponse.json(
				{ success: false, error: error.message },
				{ status: 400 }
			);
		}
		return NextResponse.json(
			{ success: false, error: "Internal server error" },
			{ status: 500 }
		);
	}
}

export async function PUT(req: NextRequest) {
	try {
		const body = await req.json();
		const { id, ...updateData } = body;
		if (!id) {
			return NextResponse.json(
				{ success: false, error: "ID is required" },
				{ status: 400 }
			);
		}

		const validatedData = businessDetailsSchema.partial().parse(updateData);

		const updatedDetails = await prisma.businessDetails.update({
			where: { id },
			data: validatedData,
		});

		return NextResponse.json(
			{ success: true, data: updatedDetails },
			{ status: 200 }
		);
	} catch (error) {
		//  catch (error) {
		// 	return NextResponse.json(
		// 		{ success: false, error: error.message },
		// 		{ status: 400 }
		// 	);
		// }
		if (error instanceof Error) {
			return NextResponse.json(
				{ success: false, error: error.message },
				{ status: 400 }
			);
		}
		return NextResponse.json(
			{ success: false, error: "Internal server error" },
			{ status: 500 }
		);
	}
}

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);
		const id = searchParams.get("id");
		if (!id) {
			return NextResponse.json(
				{ success: false, error: "ID is required" },
				{ status: 400 }
			);
		}

		const businessDetails = await prisma.businessDetails.findUnique({
			where: { id },
		});

		if (!businessDetails) {
			return NextResponse.json(
				{ success: false, error: "Business details not found" },
				{ status: 404 }
			);
		}

		return NextResponse.json(
			{ success: true, data: businessDetails },
			{ status: 200 }
		);
	} catch (error) {
		//  catch (error) {
		// 	return NextResponse.json(
		// 		{ success: false, error: error.message },
		// 		{ status: 400 }
		// 	);
		// }
		if (error instanceof Error) {
			return NextResponse.json(
				{ success: false, error: error.message },
				{ status: 400 }
			);
		}
		return NextResponse.json(
			{ success: false, error: "Internal server error" },
			{ status: 500 }
		);
	}
}

export async function DELETE(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);
		const id = searchParams.get("id");
		if (!id) {
			return NextResponse.json(
				{ success: false, error: "ID is required" },
				{ status: 400 }
			);
		}

		await prisma.businessDetails.delete({
			where: { id },
		});

		return NextResponse.json(
			{ success: true, message: "Business details deleted successfully" },
			{ status: 200 }
		);
	} catch (error) {
		//  catch (error) {
		// 	return NextResponse.json(
		// 		{ success: false, error: error.message },
		// 		{ status: 400 }
		// 	);
		// }
		if (error instanceof Error) {
			return NextResponse.json(
				{ success: false, error: error.message },
				{ status: 400 }
			);
		}
		return NextResponse.json(
			{ success: false, error: "Internal server error" },
			{ status: 500 }
		);
	}
}
