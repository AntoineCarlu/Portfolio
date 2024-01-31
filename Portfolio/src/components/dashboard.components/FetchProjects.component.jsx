import Link from 'next/link';
import React, { useState, useEffect } from "react";
import styles from './FetchProjects.module.css';
import DeleteBtn from "./DeleteProject.component";

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

  return (
    <>
      {projects.map((project) => (
        <div key={project._id}>
          <div className={styles.dashboard_list}>
            <p>{project.project_descr}</p>
            <div>
              <Link href={`/dashboard/${project._id}`}>Update</Link>
              <DeleteBtn id={project._id}/>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
