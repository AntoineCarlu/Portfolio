import styles from './profil.module.css';

export default function ProfilSkills() {

  return (
    <div className={styles.skills}>
      <div className={styles.skillsP}>
        <h3>Hard Skills</h3>
        <ul>
          <li>
            <div className={styles.infos}>
              <p>HTML5 / CSS3</p>
              <p>75%</p>
            </div>
            <div className={styles.pourcent}>
              <div className={styles.pourcentC}></div>
            </div>
          </li>
          <li>
            <div className={styles.infos}>
              <p>JavaScript</p>
              <p>100%</p>
            </div>
            <div className={styles.pourcent}>
              <div className={styles.pourcentC}></div>
            </div>
          </li>
          <p>Next.js</p>
          <p>React</p>
          <p>MongoDB</p>
          <p>MySQL</p>
          <p>Git & GitHub</p>
        </ul>
      </div>
      <div className={styles.skillsP}>
        <h3>Soft Skills</h3>
        <ul>
          <p>4</p>
          <p>5</p>
          <p>6</p>
        </ul>
      </div>
    </div>
  )
}
