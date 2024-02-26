import mongoose, { Schema } from "mongoose";

// Structure the schema of the datas for "Experiences" elements, for the database
const experienceSchema = new Schema (
  {
    experience_title: String,
    experience_infos: String,
    experience_descr: String,
    experience_date: String,
  }, 
  {
    timestamps: true,
  }
);

const Experience = mongoose.models.Experience || mongoose.model("Experience", experienceSchema);

export default Experience;
