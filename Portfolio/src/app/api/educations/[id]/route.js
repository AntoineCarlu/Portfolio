import connectMongoDB from "@/libs/dbConnect";
import Education from "@/models/education";
import { NextResponse } from "next/server";

// Function to UPDATE "Educations" elements in the MongoDB database
export async function PUT(request, { params }) {
  const { id } = params;
  const { value1: education_title, value2: education_infos, value3: education_descr, value4: education_date } = await request.json();
  await connectMongoDB();
  await Education.findByIdAndUpdate(id, { education_title, education_infos, education_descr, education_date });
  return NextResponse.json({ message: "Education updated" }, { status: 200 });
}

// Function to find specific "Education" element with id in the MongoDB database
export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const education = await Education.findOne({ _id: id });
  return NextResponse.json({ education }, { status: 200 });
}
