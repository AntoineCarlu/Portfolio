import connectMongoDB from "@/libs/dbConnect";
import Skill from "@/models/skill";
import { NextResponse } from "next/server";

// Function to UPDATE "Skills" elements in the MongoDB database
export async function PUT(request, { params }) {
  const { id } = params;
  const { NewSkill_name: skill_name, NewSkill_pourcent: skill_pourcent, NewSkill_category: skill_category } = await request.json();
  await connectMongoDB();
  await Skill.findByIdAndUpdate(id, { skill_name, skill_pourcent, skill_category });
  return NextResponse.json({ message: "Skill updated" }, { status: 200 });
}

// Function to find specific "Skill" element with id in the MongoDB database
export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const skill = await Skill.findOne({ _id: id });
  return NextResponse.json({ skill }, { status: 200 });
}
