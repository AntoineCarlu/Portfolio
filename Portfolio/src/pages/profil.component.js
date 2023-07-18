import styles from '../styles/profil.module.css';


export default function Profil() {
  return (
    <section className={styles.profil} id="Profil">
      <h1><u>Mon Profil</u></h1>
      <div className={styles.buttonsDiv}>
        <button>Compétences</button>
        <button>Éducation</button>
        <button>Expérience</button>
      </div>
    </section>
  );
}