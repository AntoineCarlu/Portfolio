import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>Portfolio Next.js</title>
				<meta name='description' content='Antoine Carlu | My Portfolio with Next.js & React !' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
      <main className={styles.main}>
        {/* Header */}
        <header className={styles.header}>
          <a href=''>Home</a>
          <div className={styles.headerList}>
            <a href=''>Accueil</a>
            <a href=''>Projets</a>
            <a href=''>Profil</a>
            <a href=''>Contact</a>
            <div className={styles.burger} onClick={burgerClicked}>
              <span className={styles.burger1} id="burger1"></span><span className={styles.burger2} id="burger2"></span><span className={styles.burger3} id="burger3"></span>
            </div>
          </div>
        </header>
        {/* Section Accueil */}
        <section className={styles.accueil}>

        </section>
      </main>
		</>
	);
}



//Event to display header list when click on the burger-menu icon
var burgerCheck = false;
function burgerClicked() {
  //define elements
  const Line1 = document.getElementById('burger1');
  const Line2 = document.getElementById('burger2');
  const Line3 = document.getElementById('burger3');
  if (burgerCheck === false) {
    //change visual of the burger icon
    Line1.style.width = "8px";
    Line1.style.borderColor = "rgba(248, 13, 65)";
    Line2.style.width = "16px";
    Line2.style.borderColor = "rgba(248, 13, 65)";
    Line3.style.width = "24px";
    Line3.style.borderColor = "rgba(248, 13, 65)";
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
    burgerCheck = false;
  }
  else {
    throw new Error('Une erreur a été produite dans la liste de conditions.');
  }
}