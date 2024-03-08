import connectMongoDB from "@/libs/dbConnect";
import Project from "@/models/project";
import { NextResponse } from "next/server";

// Function to UPDATE "Projects" elements in the MongoDB database
export async function PUT(request, { params }) {
  const { id } = params;
  const { value1: project_link, value2: project_img, value3: project_descr, value4: project_langu } = await request.json();
  await connectMongoDB();
  await Project.findByIdAndUpdate(id, { project_link, project_img, project_descr, project_langu });
  return NextResponse.json({ message: "Project updated" }, { status: 200 });
}

// Function to find specific "Project" element with id in the MongoDB database
export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const project = await Project.findOne({ _id: id });
  return NextResponse.json({ project }, { status: 200 });
}
