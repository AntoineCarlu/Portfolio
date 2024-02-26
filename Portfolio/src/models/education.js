import mongoose, { Schema } from "mongoose";

// Structure the schema of the datas from "Educations" elements, for the database
const educationSchema = new Schema (
  {
    education_title: String,
    education_infos: String,
    education_descr: String,
    education_date: String,
  }, 
  {
    timestamps: true,
  }
);

const Education = mongoose.models.Education || mongoose.model("Education", educationSchema);

export default Education;
