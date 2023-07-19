import styles from '../styles/projects.module.css';


export default function Projects() {

  return (
    <section className={styles.projects} id="Projects">
      <h1><u>Mes Projets</u></h1>
      {/*List of imported divs for each projects*/}
      <div className={styles.projectsFlex}>
        <div className={styles.projectBox}>
          <a href=""><div className={styles.boxLink}></div></a>
          <div className={styles.boxText}><p>CV Web | Projet professionnel<br></br>HTML5 / CSS3 / JS</p></div>
        </div>
        <div className={styles.projectBox}>
          <a href=""><div className={styles.boxLink}></div></a>
          <div className={styles.boxText}><p>CV Web | Projet professionnel<br></br>HTML5 / CSS3 / JS</p></div>
        </div>
        <div className={styles.projectBox}>
          <a href=""><div className={styles.boxLink}></div></a>
          <div className={styles.boxText}><p>CV Web | Projet professionnel<br></br>HTML5 / CSS3 / JS</p></div>
        </div>
      </div>
    </section>
  );
  
}