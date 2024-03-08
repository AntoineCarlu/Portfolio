import connectMongoDB from "@/libs/dbConnect";
import Experience from "@/models/experience";
import { NextResponse } from "next/server";

// Function to UPDATE "Experiences" elements in the MongoDB database
export async function PUT(request, { params }) {
  const { id } = params;
  const { value1: experience_title, value2: experience_infos, value3: experience_descr, value4: experience_date } = await request.json();
  await connectMongoDB();
  await Experience.findByIdAndUpdate(id, { experience_title, experience_infos, experience_descr, experience_date });
  return NextResponse.json({ message: "Experience updated" }, { status: 200 });
}

// Function to find specific "Experience" element with id in the MongoDB database
export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const experience = await Experience.findOne({ _id: id });
  return NextResponse.json({ experience }, { status: 200 });
}
