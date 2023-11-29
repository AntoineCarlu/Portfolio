import mongoose, { Schema } from "mongoose";

// Structure the schema of the datas from "Projects" elements, for the database
const projectSchema = new Schema (
  {
    project_link: String,
    project_img: String,
    project_descr: String,
  }, 
  {
    timestamps: true,
  }
);

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
