import React, { useState, useEffect } from "react";
import styles from './FetchList.module.css';
import DeleteDataBtn from "./DeleteData.component";
import UpdateData from "./UpdateData.component";

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
  const [renderUpdate, setRenderUpdate] = useState(null);

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

  const handleUpdateClick = (Id) => {
    setRenderUpdate(renderUpdate === Id ? null : Id);
  };

  return (
    <>
      {educations.map((education) => (
        <div key={education._id}>
          <div className={styles.dashboard_list}>
            <p>{education.education_title}</p>
            <div>
              <button onClick={() => handleUpdateClick(education._id)}>Update</button>
              <DeleteDataBtn id={education._id} type="education" name={education.education_title} />
            </div>
          </div>
          {renderUpdate === education._id && (
          <div className={styles.dashboard_update}>
            <UpdateData type="education" id={education._id} field1={education.education_title} field2={education.education_infos} field3={education.education_descr} field4={education.education_date} />
          </div>
          )}
        </div>
      ))}
    </>
  );
}
