import Link from 'next/link';
import React, { useState, useEffect } from "react";
import styles from './FetchList.module.css';
import DeleteDataBtn from "./DeleteData.component";

// Function to GET "Experiences" from database
const getExperiences = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/experiences", {
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

  return (
    <>
      {experiences.map((experience) => (
        <div key={experience._id}>
          <div className={styles.dashboard_list}>
            <p>{experience.experience_title}</p>
            <div>
              <Link href={`/dashboard/${experience._id}`}>Update</Link>
              <DeleteDataBtn id={experience._id} type="experience" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
