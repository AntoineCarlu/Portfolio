"use client"

import ProfilSkills from './ProfilSkills.component';
import ProfilEducation from './ProfilEducation.component';
import ProfilExperience from './ProfilExperience.component';
import styles from './profil.module.css';
import React, { useState, useEffect } from 'react';


export default function Profil() {

  // Script to active an event to set an active class on profil buttons clicked
  const [activeButton, setActiveButton] = useState(null);
  //the function to active the index for the correct button
  const profilButton = (index) => {
    if (index !== activeButton) {
      setActiveButton(index);
    }
  };
  //use the function on first button automatically on page load
  useEffect(() => {
    profilButton(0);
  }, []);


  // Content of the section
  return (
    <section className={styles.profil} id="Profil">
      <h1><u>Mon Profil</u></h1>
      <div className={styles.buttons_div}>
        <button className={activeButton === 0 ? styles.activeButton : ''} onClick={() => profilButton(0)}>Compétences</button>
        <button className={activeButton === 1 ? styles.activeButton : ''} onClick={() => profilButton(1)}>Éducation</button>
        <button className={activeButton === 2 ? styles.activeButton : ''} onClick={() => profilButton(2)}>Expérience</button>
      </div>
      <div className={styles.profilComponents}>
        {activeButton === 0 && <ProfilSkills />}
        {activeButton === 1 && <ProfilEducation />}
        {activeButton === 2 && <ProfilExperience />}
      </div>
    </section>
  );

}
