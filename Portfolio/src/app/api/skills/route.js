import connectMongoDB from "@/libs/dbConnect";
import Skill from "@/models/skill";
import { NextResponse } from "next/server";

// Function to POST datas from "Skills" schemas, into the MongoDB database
export async function POST(request) {
  const { skill_name, skill_pourcent, skill_category } = await request.json();
  await connectMongoDB();
  await Skill.create({ skill_name, skill_pourcent, skill_category });
  return NextResponse.json({ message: "Skill Created" }, { status: 201 });
}

// Function to GET "Skills" datas elements from the MongoDB database
export async function GET() {
  try {
    await connectMongoDB();
    const skills = await Skill.find();
    return NextResponse.json({ skills });
  } catch (error) {
    return NextResponse.json({ skills: [] });
  }
}

// Function to DELETE "Skills" elements from the MongoDB database
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB;
  await Skill.findByIdAndDelete(id);
  return NextResponse.json({ message: "Skill deleted."}, { status: 200 });
}
