import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const personalDetailsSchema = z.object({
	firstName: z.string().min(1, "First name is required"),
	lastName: z.string().min(1, "Last name is required"),
	phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
	phoneVerified: z.boolean().optional(),
	address: z
		.object({
			street: z.string().optional(),
			city: z.string().optional(),
			state: z.string().optional(),
			zip: z.string().optional(),
		})
		.optional(),
	userId: z.string(),
});

export const POST = async (req: NextRequest) => {
	try {
		const session = await getServerSession(authOptions);
		if (!session || !session.user) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		const { id } = session.user as { id: string };
		const body = await req.json();
		console.log(body);
		const validatedData = personalDetailsSchema.parse({ ...body, userId: id });
		console.log(validatedData);

		// Add userId to the validated data before saving
		const personalDetails = await prisma.personalDetails.create({
			data: { ...validatedData, userId: id }, // Assuming `userId` is a field in your schema
		});

		return NextResponse.json(
			{ success: true, data: personalDetails },
			{ status: 201 }
		);
	} catch (error) {
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
};

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

		const validatedData = personalDetailsSchema.partial().parse(updateData);

		const updatedDetails = await prisma.personalDetails.update({
			where: { id },
			data: validatedData,
		});

		return NextResponse.json(
			{ success: true, data: updatedDetails },
			{ status: 200 }
		);
	} catch (error) {
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

		const personalDetails = await prisma.personalDetails.findUnique({
			where: { id },
		});

		if (!personalDetails) {
			return NextResponse.json(
				{ success: false, error: "Business details not found" },
				{ status: 404 }
			);
		}

		return NextResponse.json(
			{ success: true, data: personalDetails },
			{ status: 200 }
		);
	} catch (error) {
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
