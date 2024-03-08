import React, { useState, useEffect } from "react";
import styles from './FetchList.module.css';
import DeleteDataBtn from "./DeleteData.component";
import UpdateProject from "./UpdateProject.component";

// Function to GET "Projects" from database
const getProjects = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/projects", {
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

  const handleUpdateClick = (projectId) => {
    setRenderUpdate(renderUpdate === projectId ? null : projectId);
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
            <UpdateProject id={project._id} link={project.project_link} img={project.project_img} descr={project.project_descr} langu={project.project_langu} />
          </div>
          )}
        </div>
      ))}
    </>
  );
}
