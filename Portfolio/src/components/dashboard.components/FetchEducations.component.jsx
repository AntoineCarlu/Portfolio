import Link from 'next/link';
import React, { useState, useEffect } from "react";
import styles from './FetchList.module.css';
import DeleteDataBtn from "./DeleteData.component";

// Function to GET "Educations" from database
const getEducations = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/educations", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch educations.");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading educations: ", error);
  }
}

export default function EducationsList() {
  const [educations, setEducations] = useState([]);

  //this useEffect use the "getEducations" async function to fetch the data into a "use-client" component
  useEffect(() => {
    const fetchEducations = async () => {
      try {
        const { educations } = await getEducations();
        setEducations(educations);
      } catch (error) {
        console.error("Error fetching educations: ", error);
      }
    };

    fetchEducations();
  }, []);

  return (
    <>
      {educations.map((education) => (
        <div key={education._id}>
          <div className={styles.dashboard_list}>
            <p>{education.education_title}</p>
            <div>
              <Link href={`/dashboard/${education._id}`}>Update</Link>
              <DeleteDataBtn id={education._id} type="education" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
