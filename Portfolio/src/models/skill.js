import mongoose, { Schema } from "mongoose";

// Structure the schema of the datas from "Skills" elements, for the database
const skillSchema = new Schema (
  {
    skill_name: String,
    skill_pourcent: String,
  }, 
  {
    timestamps: true,
  }
);

const Skill = mongoose.models.Skill || mongoose.model("Skill", skillSchema);

export default Skill;
