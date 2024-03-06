import { useEffect, useState } from 'react';
import styles from './profil.module.css';

export default function ProfilEducation() {
  const [educations, setEducations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // Function to GET "Educations" from database and fetch each of them in the page
  useEffect(() => {
    const getEducations = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/educations", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch educations.");
        }

        const data = await res.json();
        //Check if the fetched data is empty
        if (!data || !data.educations || data.educations.length === 0) {
          setEducations([]);
          setIsError(true);
        } else {
          setEducations(data.educations);
        }
        setIsLoading(false);
      } catch (error) {
        console.log("Error loading educations: ", error);
        setIsError(true);
        setIsLoading(false);
        setEducations([]);
      }
    }

    getEducations();
  }, []);
  
  // Page content
  if (isLoading) return <div className={styles.ee}>Récupération des données...</div>;
  if (isError) return <div className={styles.ee}>Erreur lors de la récupération des données.</div>;
  return (
    <div className={styles.eeCenter}>

      <div className={styles.eeRow}>
        <div className={styles.eeBloc}>
          <div className={styles.eeInfos}>
            <h2>Title</h2>
            <span>infos</span>
            <p>descr</p>
          </div>
          <p className={styles.eeDate}>date</p>
        </div>
        <div className={styles.eeBloc}>
          <div className={styles.eeInfos}>
            <h2>Title</h2>
            <span>infos</span>
            <p>descr</p>
          </div>
          <p className={styles.eeDate}>date</p>
        </div>
        <div className={styles.eeBloc}>
          <div className={styles.eeInfos}>
            <h2>Title</h2>
            <span>infos</span>
            <p>descr</p>
          </div>
          <p className={styles.eeDate}>date</p>
        </div>
        <div className={styles.eeBloc}>
          <div className={styles.eeInfos}>
            <h2>Title</h2>
            <span>infos</span>
            <p>descr</p>
          </div>
          <p className={styles.eeDate}>date</p>
        </div>
      </div>

      <div className={styles.arrowL}></div>
      <div className={styles.arrowR}></div>

      <div className={styles.eeLine}></div>

    </div>
  )
}
