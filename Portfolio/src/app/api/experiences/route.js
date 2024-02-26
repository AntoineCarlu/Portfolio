import connectMongoDB from "@/libs/dbConnect";
import Experience from "@/models/experience";
import { NextResponse } from "next/server";

// Function to POST datas from "Experiences" schemas, into the MongoDB database
export async function POST(request) {
  const { experience_title, experience_infos, experience_descr, experience_date } = await request.json();
  await connectMongoDB();
  await Experience.create({ experience_title, experience_infos, experience_descr, experience_date });
  return NextResponse.json({ message: "Experience Created" }, { status: 201 });
}

// Function to GET "Experiences" datas elements from the MongoDB database
export async function GET() {
  try {
    await connectMongoDB();
    const experiences = await Experience.find();
    return NextResponse.json({ experiences });
  } catch (error) {
    return NextResponse.json({ experiences: [] });
  }
}

// Function to DELETE "Experiences" elements from the MongoDB database
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB;
  await Experience.findByIdAndDelete(id);
  return NextResponse.json({ message: "Experience deleted."}, { status: 200 });
}
