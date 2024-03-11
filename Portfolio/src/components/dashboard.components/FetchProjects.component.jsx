import React, { useState, useEffect } from "react";
import styles from './FetchList.module.css';
import DeleteDataBtn from "./DeleteData.component";
import UpdateData from "./UpdateData.component";

// Function to GET "Projects" from database
const getProjects = async () => {
  try {
    const res = await fetch("/api/projects", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch projects.");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading projects: ", error);
  }
}

export default function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [renderUpdate, setRenderUpdate] = useState(null);

  //this useEffect use the "getProjects" async function to fetch the data into a "use-client" component
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { projects } = await getProjects();
        setProjects(projects);
      } catch (error) {
        console.error("Error fetching projects: ", error);
      }
    };

    fetchProjects();
  }, []);

  const handleUpdateClick = (Id) => {
    setRenderUpdate(renderUpdate === Id ? null : Id);
  };

  return (
    <>
      {projects.map((project) => (
        <div key={project._id}>
          <div className={styles.dashboard_list}>
            <p>{project.project_descr}</p>
            <div>
              <button onClick={() => handleUpdateClick(project._id)}>Update</button>
              <DeleteDataBtn id={project._id} type="project" name={project.project_descr} />
            </div>
          </div>
          {renderUpdate === project._id && (
          <div className={styles.dashboard_update}>
            <UpdateData type="project" id={project._id} field1={project.project_link} field2={project.project_img} field3={project.project_descr} field4={project.project_langu} />
          </div>
          )}
        </div>
      ))}
    </>
  );
}
