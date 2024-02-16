import styles from './profil.module.css';

export default function ProfilSkills() {
  const text = "active";

  return (
    <div className={styles.skills}>
      <div className={styles.skillsP}>
        <h3>Hard Skills</h3>
        <ul>
          <li>
            <p>HTML5 / CSS3</p>
            <div><span className={text.includes("active") ? styles.c1a : styles.c1}></span><span className={styles.c2}></span><span className={styles.c3}></span></div>
          </li>
          <li>
            <p>JavaScript</p>
            <div><span className={styles.c1}></span><span className={styles.c2}></span><span className={styles.c3}></span></div>
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
