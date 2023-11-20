import styles from '../styles/header.module.css';
import React, { useEffect, useState } from 'react';


export default function Header() {

  // Script to display header nav-bar list when user click on the burger-menu icon
  var burgerCheck = false;
  function burgerClicked() {
    //define elements
    const Line1 = document.getElementById('burger1');
    const Line2 = document.getElementById('burger2');
    const Line3 = document.getElementById('burger3');
    const navList = document.getElementById('nl');
    if (burgerCheck === false) {
      //change visual of the burger icon
      Line1.style.width = "8px";
      Line1.style.borderColor = "rgba(248, 13, 65)";
      Line2.style.width = "16px";
      Line2.style.borderColor = "rgba(248, 13, 65)";
      Line3.style.width = "24px";
      Line3.style.borderColor = "rgba(248, 13, 65)";
      //animation to display nav list
      navList.style.transform = "translateX(0%)";
      burgerCheck = true;
    }
    else if (burgerCheck === true) {
      //change visual of the burger icon
      Line1.style.width = "30px";
      Line1.style.borderColor = "white";
      Line2.style.width = "30px";
      Line2.style.borderColor = "white";
      Line3.style.width = "30px";
      Line3.style.borderColor = "white";
      //animation to display nav list
      navList.style.transform = "translateX(100%)";
      burgerCheck = false;
    }
    else {
      throw new Error('Une erreur a été produite dans la liste de conditions.');
    }
  }

  // Script to change the color of nav-bar anchors links if on corresponding section
  const [currentSection, setCurrentSection] = useState('home');
  useEffect(() => {
    //function to check current section and give correct active class
    const CurrentSection = () => {
      const sections = document.querySelectorAll('section');
      let currentSectionId = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          currentSectionId = section.getAttribute('id');
        }
      });
      //save current section to have correct color
      setCurrentSection(currentSectionId);
    };

    //execute the script on page load
    CurrentSection();
    //execute the script when page scroll
    window.addEventListener('scroll', CurrentSection);
    return () => {
      window.removeEventListener('scroll', CurrentSection);
    };
  }, []);


  // Content of the Header
  return (
    <header className={styles.header}>
      <a href=''>{/*Home*/}</a>
      <div className={styles.header_list}>
        <div className={styles.nav_list_ext}>
        <div className={styles.nav_list} id="nl">
          <a href='#Accueil' className={currentSection === 'Accueil' ? styles.active : ''}>Accueil</a>
          <a href='#Projects' className={currentSection === 'Projects' ? styles.active : ''}>Projets</a>
          <a href='#Profil' className={currentSection === 'Profil' ? styles.active : ''}>Profil</a>
          <a href='#' className={currentSection === '' ? styles.active : ''}>Contact</a>
        </div>
        </div>
        <div className={styles.burger} onClick={burgerClicked}>
          <span className={styles.burger1} id="burger1"></span><span className={styles.burger2} id="burger2"></span><span className={styles.burger3} id="burger3"></span>
        </div>
      </div>
    </header>
  );

}