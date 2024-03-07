import { useEffect, useState, useRef } from 'react';
import styles from './profil.module.css';

export default function ProfilEducation() {
  const [educations, setEducations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const carouselRef = useRef(null);

  // Function to GET "Experiences" from database and fetch each of them in the page
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
        if (!data || !data.educations || data.educations.length === 0) {
          setEducations([]);
          setIsError(true);
        } else {
          setEducations(data.educations.reverse());
        }
        setIsLoading(false);
      } catch (error) {
        console.log("Error loading educations: ", error);
        setIsError(true);
        setIsLoading(false);
        setEducations([]);
      }
    };

    getEducations();
  }, []);

  // Functions to scroll the carousel
  const scrollCarouselLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
    }
  };
  const scrollCarouselRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
    }
  };

  // Page content
  if (isLoading) return <div className={styles.ee}>Récupération des données...</div>;
  if (isError) return <div className={styles.ee}>Erreur lors de la récupération des données.</div>;
  return (
    <div className={styles.eeCenter}>

      <div className={styles.eeRowCenter}>
        <div className={styles.arrowLeft} onClick={scrollCarouselLeft}></div>
        <div className={styles.eeRow} ref={carouselRef}>
          {educations.map((education) => (
            <div key={education.id} className={styles.eeBloc}>
              <div className={styles.eeInfos}>
                <h2>{education.education_title}</h2>
                <span>{education.education_infos}</span>
                <p>{education.education_descr}</p>
              </div>
              <p className={styles.eeDate}>{education.education_date}</p>
            </div>
          ))}
        </div>
        <div className={styles.arrowRight} onClick={scrollCarouselRight}></div>
      </div>

      <div className={styles.eeLine}></div>

    </div>
  );
}
