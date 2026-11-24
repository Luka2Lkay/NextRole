import { NextResponse } from "next/server";
import { db } from "@/prisma/db";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
  } catch (error) {
    console.error("Error occurred while saving the application:", error);

    return NextResponse.json(
      { error: "Failed to save the application." },
      { status: 500 },
    );
  }
}
