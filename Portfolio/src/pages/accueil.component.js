import styles from '../styles/accueil.module.css';


export default function Accueil() {

  const presentJ = "Développeur Web";

  return (
    <section className={styles.accueil} id="Accueil">
    <div className={styles.accueilDiv}>
      <div className={styles.resumeTitle}>
        <h1>Enchanté, je m'appelle <span className={styles.red}>Antoine Carlu</span> !<br></br>Je suis un <span className={styles.red}>{presentJ}</span>,</h1>
      </div>
      <div className={styles.resumeText}>
        <p>
          Passioné par la programmation et le développement Web, <br></br>
          mon interêt et ma curiosité m’ont fait découvrir ce domaine en 2022. <br></br>
          Depuis, j’ai découvert de nombreux languages et méthodes de développement et programmation Web lors de formations professionnelles ou découvertes personnelles.
        </p>
      </div>
      <div className={styles.resumeImage}>
        <img src="img/photo-cv.jpg" alt="Photo n&b"></img>
      </div>
      <div className={styles.resumeLinks}>
        <p className={styles.LinksP}>Voici quelques liens utiles :</p>
        <div className={styles.accueilLinks}>
          <a href="https://www.linkedin.com/in/antoine-carlu-703904269/" target="_blank"><div><img src="img/LinkedIn-icon.png" alt="LinkedIn-icon" className={styles.linImg}></img></div></a>
          <a href="https://github.com/AntoineCarlu" target="_blank"><div><img src="img/Github-icon.png" alt="GitHub-icon" className={styles.gitImg}></img></div></a>
          <a href="https://antoinecarlu.github.io/CV-Web/" target="_blank"><div><img src="img/CV-icon.png" alt="CV-icon" className={styles.cvImg}></img></div></a>
        </div>
      </div>
    </div>
    </section>
  );
  
}
