import styles from './home.module.css';


export default function Accueil() {

  const presentJ = "Développeur Web";
  const apo = `'`;

  return (
    <section className={styles.accueil} id="Accueil">
    <div className={styles.accueil_div}>
      <div className={styles.resumeTitle}>
        <h1>Enchanté, je m{apo}appelle <span className={styles.red}>Antoine Carlu</span> !<br></br>Je suis un <span className={styles.red}>{presentJ}</span>,</h1>
      </div>
      <div className={styles.resumeText}>
        <p>
          Passionné par la programmation et le développement Web, <br></br>
          mon intérêt et ma curiosité m{apo}ont fait découvrir ce domaine en 2022. <br></br>
          Depuis, j{apo}ai découvert de nombreux langages et méthodes de développement et programmation Web lors de formations professionnelles ou découvertes personnelles.
        </p>
      </div>
      <div className={styles.resumeImage}>
        <img src="https://res.cloudinary.com/dpp39fz7x/image/upload/v1689772587/Portfolio/photo-cv_w7v2nr.jpg" alt="Photo"></img>
      </div>
      <div className={styles.resumeLinks}>
        <p className={styles.LinksP}>Voici quelques liens intéressants :</p>
        <div className={styles.accueil_links}>
          <a href="https://www.linkedin.com/in/antoine-carlu-703904269/" target="_blank"><div><img src="https://res.cloudinary.com/dpp39fz7x/image/upload/v1689772586/Portfolio/LinkedIn-icon_fugeva.png" alt="LinkedIn-icon" className={styles.linImg}></img></div></a>
          <a href="https://github.com/AntoineCarlu" target="_blank"><div><img src="https://res.cloudinary.com/dpp39fz7x/image/upload/v1689772586/Portfolio/Github-icon_lh5a4v.png" alt="GitHub-icon" className={styles.gitImg}></img></div></a>
          <a href="https://antoinecarlu.github.io/CV-Web/" target="_blank"><div><img src="https://res.cloudinary.com/dpp39fz7x/image/upload/v1689772586/Portfolio/CV-icon_gxem53.png" alt="CV-icon" className={styles.cvImg}></img></div></a>
        </div>
      </div>
    </div>
    </section>
  );
  
}
