import styles from '../styles/accueil.module.css';

export default function Accueil() {
  return (
    <section className={styles.accueil}>
      <div>
        <h1>Enchanté, je m'appelle <span className={styles.red}>Antoine Carlu</span> !<br></br>Je suis un <span className={styles.red}>{presentJ}</span>,</h1>
      </div>
      <div>
        <p>
          Passioné par la programmation et le développement Web, <br></br>
          mon interêt et ma curiosité m’ont fait découvrir ce domaine en 2022. <br></br>
          Depuis, j’ai découvert de nombreux languages et méthodes de développement Web lors de formations professionnelles ou découvertes personnelles.
        </p>
      </div>
      <div>
        <img src="img/photo-cv.jpg" alt="Photo n&b"></img>
      </div>
    </section>
  );
}

var presentJ = "Développeur Web";
// setInterval(function() {
//   presentJ = "Développeur Web";
//   setTimeout(function() {
//     presentJ = "Développeur";
//   }, 2000);
// }, 4000);