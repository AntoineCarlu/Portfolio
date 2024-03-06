import { useEffect, useState } from 'react';
import styles from './profil.module.css';

export default function ProfilExperience() {
  const [experiences, setExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // Function to GET "Experiences" from database and fetch each of them in the page
  useEffect(() => {
    const getExperiences = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/experiences", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch experiences.");
        }

        const data = await res.json();
        //Check if the fetched data is empty
        if (!data || !data.experiences || data.experiences.length === 0) {
          setExperiences([]);
          setIsError(true);
        } else {
          setExperiences(data.experiences);
        }
        setIsLoading(false);
      } catch (error) {
        console.log("Error loading experiences: ", error);
        setIsError(true);
        setIsLoading(false);
        setExperiences([]);
      }
    }

    getExperiences();
  }, []);
  
  // Page content
  if (isLoading) return <div className={styles.ee}>Récupération des données...</div>;
  if (isError) return <div className={styles.ee}>Erreur lors de la récupération des données.</div>;
  return (
    <div className={styles.eeCenter}>

      <div className={styles.eeRow}>
        {experiences.map((experience) => (
          <div key={experience.id} className={styles.eeBloc}>
            <div className={styles.eeInfos}>
              <h2>{experience.experience_title}</h2>
              <span>{experience.experience_infos}</span>
              <p>{experience.experience_descr}</p>
            </div>
            <p className={styles.eeDate}>{experience.experience_date}</p>
          </div>
        ))}
      </div>

      {/* <div className={styles.arrowL}></div>
      <div className={styles.arrowR}></div> */}

      <div className={styles.eeLine}></div>

    </div>
  )
}
