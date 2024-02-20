import { useEffect, useState } from 'react';
import styles from './profil.module.css';

// Function to GET "Skills" from database and fetch each of them in the page
const getSkills = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/skills", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch skills.");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading skills: ", error);
  }
}

export default function ProfilSkills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const data = await getSkills();
      setSkills(data.skills || []);
    };

    fetchSkills();
  }, []);

  return (
    <div className={styles.skills}>
      <div className={styles.skillsP}>
        <h3>Hard Skills</h3>
        <ul>
          {skills.map((skill) => (
            <li key={skill.id}>
              <div className={styles.infos}>
                <p>{skill.skill_name}</p>
                <p>{skill.skill_pourcent}</p>
              </div>
              <div className={styles.pourcent}>
                <div className={styles.pourcentC}></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.skillsP}>
        <h3>Soft Skills</h3>
        <ul>
          {skills.map((skill) => (
            <li key={skill.id}>
              <div className={styles.infos}>
                <p>{skill.skill_name}</p>
                <p>{skill.skill_pourcent}</p>
              </div>
              <div className={styles.pourcent}>
                <div className={styles.pourcentC}></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
