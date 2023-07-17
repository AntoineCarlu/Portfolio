import styles from '../styles/header.module.css';
import React, { useEffect, useState } from 'react';


export default function Header() {

  //Event to display header list when click on the burger-menu icon
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


  // const [currentSection, setCurrentSection] = useState('home');
  // useEffect(() => {
  //   const CurrentSection = () => {
  //     const sections = document.querySelectorAll('section');
  //     let currentSectionId = '';

  //     sections.forEach((section) => {
  //       const sectionTop = section.offsetTop;
  //       const sectionHeight = section.clientHeight;

  //       if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
  //         currentSectionId = section.getAttribute('id');
  //       }
  //     });

  //     setCurrentSection(currentSectionId);
  //   };

  //   window.addEventListener('scroll', CurrentSection);
  //   return () => {
  //     window.removeEventListener('scroll', CurrentSection);
  //   };
  // }, []);

  // useEffect(() => {
  //   const navLinks = document.querySelectorAll('.nav_link');

  //   navLinks.forEach((link) => {
  //     if (link.classList.contains(currentSection)) {
  //       link.style.opacity = '1';
  //     } else {
  //       link.style.opacity = '0.8';
  //     }
  //   });
  // }, [currentSection]);


  return (
    <header className={styles.header}>
      <a href=''>{/*Home*/}</a>
      <div className={styles.headerList}>
        <div className={styles.navListExt}>
        <div className={styles.navList} id="nl">
          <a href='#Accueil' className={styles.nav_link}>Accueil</a>
          <a href='#Projects' className={styles.nav_link}>Projets</a>
          <a href='#' className={styles.nav_link}>Profil</a>
          <a href='#' className={styles.nav_link}>Contact</a>
        </div>
        </div>
        <div className={styles.burger} onClick={burgerClicked}>
          <span className={styles.burger1} id="burger1"></span><span className={styles.burger2} id="burger2"></span><span className={styles.burger3} id="burger3"></span>
        </div>
      </div>
    </header>
  );
}
