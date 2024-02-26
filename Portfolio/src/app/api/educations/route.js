import connectMongoDB from "@/libs/dbConnect";
import Education from "@/models/education";
import { NextResponse } from "next/server";

// Function to POST datas from "Educations" schemas, into the MongoDB database
export async function POST(request) {
  const { education_title, education_infos, education_descr, education_date } = await request.json();
  await connectMongoDB();
  await Education.create({ education_title, education_infos, education_descr, education_date });
  return NextResponse.json({ message: "Education Created" }, { status: 201 });
}

// Function to GET "Educations" datas elements from the MongoDB database
export async function GET() {
  try {
    await connectMongoDB();
    const educations = await Education.find();
    return NextResponse.json({ educations });
  } catch (error) {
    return NextResponse.json({ educations: [] });
  }
}

// Function to DELETE "Educations" elements from the MongoDB database
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB;
  await Education.findByIdAndDelete(id);
  return NextResponse.json({ message: "Education deleted."}, { status: 200 });
}
