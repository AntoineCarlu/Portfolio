import styles from './contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contact} id="Contact">
      <h1><u>Contactez moi</u></h1>
      <form className={styles.contactForm}>
        <div className={styles.twoInputs}>
          <div className={styles.contactInputs}>
            <label>NOM & PRENOM (Optionnel)</label>
            <input type='text' maxLength={50} placeholder="Votre nom et prénom (Ou nom d'entreprise)"></input>
          </div>
          <div className={styles.contactInputs}>
            <label>NUMERO (Optionnel)</label>
            <input type='text' maxLength={25} placeholder='Numero de téléphone'></input>
          </div>
        </div>
        <div className={styles.contactInputs}>
          <label>EMAIL</label>
          <input type='text' maxLength={50} required placeholder='Adresse email'></input>
        </div>
        <div className={styles.contactInputs}>
          <label>SUJET</label>
          <input type='text' maxLength={50} required placeholder='Sujet / Titre'></input>
        </div>
        <div className={styles.contactInputs}>
          <label>MESSAGE</label>
          <textarea type='text' required placeholder='Contenu du message'></textarea>
        </div>
        <button type='submit'>ENVOYER</button>
      </form>
    </div>
  );
}
