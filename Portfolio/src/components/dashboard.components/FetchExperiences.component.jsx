import React, { useState, useEffect } from "react";
import styles from './FetchList.module.css';
import DeleteDataBtn from "./DeleteData.component";
import UpdateData from "./UpdateData.component";

// Function to GET "Experiences" from database
const getExperiences = async () => {
  try {
    const res = await fetch("/api/experiences", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch experiences.");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading experiences: ", error);
  }
}

export default function ExperiencesList() {
  const [experiences, setExperiences] = useState([]);
  const [renderUpdate, setRenderUpdate] = useState(null);

  //this useEffect use the "getExperiences" async function to fetch the data into a "use-client" component
  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const { experiences } = await getExperiences();
        setExperiences(experiences);
      } catch (error) {
        console.error("Error fetching experiences: ", error);
      }
    };

    fetchExperiences();
  }, []);

  const handleUpdateClick = (Id) => {
    setRenderUpdate(renderUpdate === Id ? null : Id);
  };

  return (
    <>
      {experiences.map((experience) => (
        <div key={experience._id}>
          <div className={styles.dashboard_list}>
            <p>{experience.experience_title}</p>
            <div>
              <button onClick={() => handleUpdateClick(experience._id)}>Update</button>
              <DeleteDataBtn id={experience._id} type="experience" name={experience.experience_title} />
            </div>
          </div>
          {renderUpdate === experience._id && (
          <div className={styles.dashboard_update}>
            <UpdateData type="experience" id={experience._id} field1={experience.experience_title} field2={experience.experience_infos} field3={experience.experience_descr} field4={experience.experience_date} />
          </div>
          )}
        </div>
      ))}
    </>
  );
}
