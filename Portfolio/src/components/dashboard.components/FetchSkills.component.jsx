import Link from 'next/link';
import React, { useState, useEffect } from "react";
import styles from './FetchList.module.css';
import DeleteSkillBtn from "./DeleteSkill.component";

// Function to GET "Skills" from database
const getSkills = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/skills", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch skills.");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading skills: ", error);
  }
}

export default function SkillsList() {
  const [skills, setSkills] = useState([]);

  //this useEffect use the "getSkills" async function to fetch the data into a "use-client" component
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const { skills } = await getSkills();
        setSkills(skills);
      } catch (error) {
        console.error("Error fetching skills: ", error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <>
      {skills.map((skill) => (
        <div key={skill._id}>
          <div className={styles.dashboard_list}>
            <p>{skill.skill_name}</p>
            <div>
              <Link href={`/dashboard/${skill._id}`}>Update</Link>
              <DeleteSkillBtn id={skill._id}/>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
