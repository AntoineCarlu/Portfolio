import { useEffect, useState } from 'react';
import styles from './profil.module.css';

export default function ProfilSkills() {
  const [hardSkills, setHardSkills] = useState([]);
  const [softSkills, setSoftSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // Function to GET "Skills" from database and fetch each of them in the page with a filter system
  useEffect(() => {
    const getSkills = async (category) => {
      try {
        const res = await fetch("http://localhost:3000/api/skills", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch skills.");
        }

        //filter and split the data for two fetchs
        const data = await res.json();
        //Check if the fetched data is empty
        if (!data || !data.skills || data.skills.length === 0) {
          setHardSkills([]);
          setSoftSkills([]);
          setIsError(true);
        } else {
          const hardSkillsData = data.skills.filter(skill => skill.skill_category === "hard");
          const softSkillsData = data.skills.filter(skill => skill.skill_category === "soft");
          setHardSkills(hardSkillsData);
          setSoftSkills(softSkillsData);
        }
        setIsLoading(false);
      } catch (error) {
        console.log("Error loading skills: ", error);
        setIsError(true);
        setIsLoading(false);
        setHardSkills([]);
        setSoftSkills([]);
      }
    }

    getSkills();
  }, []);
  
  // Page content
  if (isLoading) return <div className={styles.skills}>Récupération des données...</div>;
  if (isError) return <div className={styles.skills}>Erreur lors de la récupération des données.</div>;
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
