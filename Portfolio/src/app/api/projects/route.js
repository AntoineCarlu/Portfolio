import connectMongoDB from "@/libs/dbConnect";
import Project from "@/models/project";
import { NextResponse } from "next/server";

// Function to POST datas from "Projects" schemas, into the MongoDB database
export async function POST(request) {
  const { project_link, project_img, project_descr } = await request.json();
  await connectMongoDB();
  await Project.create({ project_link, project_img, project_descr });
  return NextResponse.json({ message: "Project Created" }, { status: 201 });
}

// Function to GET "Projects" datas elements from the MongoDB database
export async function GET() {
  try {
    await connectMongoDB();
    const projects = await Project.find();
    return NextResponse.json({ projects });
  } catch (error) {
    return NextResponse.json({ projects: [] });
  }
}

// Function to DELETE "Projects" elements from the MongoDB database
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB;
  await Project.findByIdAndDelete(id);
  return NextResponse.json({ message: "Project deleted."}, { status: 200 });
}
