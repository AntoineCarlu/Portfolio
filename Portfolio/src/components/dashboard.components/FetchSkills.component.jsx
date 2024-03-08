import React, { useState, useEffect } from "react";
import styles from './FetchList.module.css';
import DeleteDataBtn from "./DeleteData.component";
import UpdateData from "./UpdateData.component";

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
  const [renderUpdate, setRenderUpdate] = useState(null);

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

  const handleUpdateClick = (Id) => {
    setRenderUpdate(renderUpdate === Id ? null : Id);
  };

  return (
    <>
      {skills.map((skill) => (
        <div key={skill._id}>
          <div className={styles.dashboard_list}>
            <p>{skill.skill_name}</p>
            <div>
              <button onClick={() => handleUpdateClick(skill._id)}>Update</button>
              <DeleteDataBtn id={skill._id} type="skill" name={skill.skill_name} />
            </div>
          </div>
          {renderUpdate === skill._id && (
          <div className={styles.dashboard_update}>
            <UpdateData type="skill" id={skill._id} field1={skill.skill_name} field2={skill.skill_pourcent} field3={skill.skill_category} />
          </div>
          )}
        </div>
      ))}
    </>
  );
}
