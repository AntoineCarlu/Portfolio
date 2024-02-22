import { useEffect, useState } from 'react';
import styles from './profil.module.css';

// Function to GET "Skills" from database and fetch each of them in the page with a filter system
const getSkills = async (category) => {
  try {
    const res = await fetch("http://localhost:3000/api/skills", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch skills.");
    }

    const data = await res.json();
    return data.skills.filter(skill => skill.skill_category === category);
  } catch (error) {
    console.log("Error loading skills: ", error);
    return [];
  }
}

export default function ProfilSkills() {
  const [hardSkills, setHardSkills] = useState([]);
  const [softSkills, setSoftSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      //filter and split the data for two fetchs
      const hardSkillsData = await getSkills("hard");
      const softSkillsData = await getSkills("soft");

      setHardSkills(hardSkillsData || []);
      setSoftSkills(softSkillsData || []);
    };

    fetchSkills();
  }, []);

  return (
    <div className={styles.skills}>
      <div className={styles.skillsP}>
        <h3>Hard Skills</h3>
        <ul>
          {hardSkills.map((skill) => (
            <li key={skill.id}>
              <div className={styles.infos}>
                <p>{skill.skill_name}</p>
                <p>{skill.skill_pourcent}</p>
              </div>
              <div className={styles.pourcent}>
                <div className={styles.pourcentC} style={{ width: skill.skill_pourcent }}></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.skillsP}>
        <h3>Soft Skills</h3>
        <ul>
          {softSkills.map((skill) => (
            <li key={skill.id}>
              <div className={styles.infos}>
                <p>{skill.skill_name}</p>
                <p>{skill.skill_pourcent}</p>
              </div>
              <div className={styles.pourcent}>
                <div className={styles.pourcentC} style={{ width: skill.skill_pourcent }}></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
