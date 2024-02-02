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

export default async function ProjectsList() {
  const { projects } = await getProjects();

  // Page content
  return (
    <section className={styles.projects} id="Projects">
      <h1><u>Mes Projets</u></h1>
      {/*Imported divs for each projects*/}
      <div className={styles.projectsFlex}>
      {projects.map((project) => (
        <div key={project.id} className={styles.projectBox}>
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
