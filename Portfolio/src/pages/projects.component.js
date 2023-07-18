import styles from '../styles/projects.module.css';


export default function Projects() {
  return (
    <section className={styles.projects} id="Projects">
      <h1><u>Mes Projets</u></h1>
      <div className={styles.projectsFlex}>
        <div className={styles.projectBox}>
          <div><p>CV Web | Projet professionnel<br></br>HTML5 / CSS3 / JS</p></div>
        </div>
        <div className={styles.projectBox}>
          <div><p>CV Web | Projet professionnel<br></br>HTML5 / CSS3 / JS</p></div>
        </div>
        <div className={styles.projectBox}>
          <div><p>CV Web | Projet professionnel<br></br>HTML5 / CSS3 / JS</p></div>
        </div>
        <div className={styles.projectBox}>
          <div><p>CV Web | Projet professionnel<br></br>HTML5 / CSS3 / JS</p></div>
        </div>
        <div className={styles.projectBox}>
          <div><p>CV Web | Projet professionnel<br></br>HTML5 / CSS3 / JS</p></div>
        </div>
      </div>
    </section>
  );
}