import styles from '../styles/projects.module.css';
import React, { useEffect, useState } from 'react';


export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/api/projects.api')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          console.error('Error: Data is not an array', data);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <section className={styles.projects} id="Projects">
      <h1><u>Mes Projets</u></h1>
      {/*List of imported divs for each projects*/}
      <div className={styles.projectsFlex}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectBox}>
            <a href={project.Project_link}><div className={styles.boxLink}><img src={project.Project_img} alt="" /></div></a>
            <div className={styles.boxText}><p>{project.Project_descr}</p></div>
          </div>
        ))}

        {/* <div className={styles.projectBox}>
          <a href=""><div className={styles.boxLink}></div></a>
          <div className={styles.boxText}><p>CV Web | Projet professionnel<br></br>HTML5 / CSS3 / JS</p></div>
        </div>
        <div className={styles.projectBox}>
          <a href=""><div className={styles.boxLink}></div></a>
          <div className={styles.boxText}><p>CV Web | Projet professionnel<br></br>HTML5 / CSS3 / JS</p></div>
        </div> */}
      </div>
    </section>
  );
  
}