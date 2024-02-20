"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './projects.module.css'

// Function to GET "Projects" from database and fetch each of them in the page
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

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data.projects || []);
    };

    fetchProjects();
  }, []);

  // Function to have a fade animation when projects divs appears in user viewport
  useEffect(() => {
    const projectsAnimation = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((element) => {
        //calculation of when the divs appears in user viewport
        const elementTop = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        const quarterViewport = viewportHeight / 4;
        const isVisible = elementTop <= viewportHeight - quarterViewport;

        //change the opacity when in user viewport for animation
        if (isVisible) {
          element.style.opacity = 1;
        } else {
          element.style.opacity = 0;
        }
      });
    };

    window.addEventListener('scroll', projectsAnimation);
    return () => {
      window.removeEventListener('scroll', projectsAnimation);
    };
  }, []);

  // Page content
  return (
    <section className={styles.projects} id="Projects">
      <h1><u>Mes Projets</u></h1>
      {/*Imported divs for each projects*/}
      <div className={styles.projectsFlex}>
      {projects.map((project) => (
        <div key={project.id} className={`${styles.projectBox} fade-in`}>
          <Link href={project.project_link} target='_blank'>
            <div className={styles.box_link}>
              <img src={project.project_img} alt="" />
            </div>
          </Link>
          <div className={styles.box_text}>
            <p>{project.project_descr}</p>
            <p>{project.project_langu}</p>
          </div>
        </div>
      ))}
      </div>
    </section>
  )
}
