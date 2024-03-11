import styles from './contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contact} id="Contact">
      <h1><u>Contactez moi</u></h1>
      <form className={styles.contactForm}>
        <div className={styles.twoInputs}>
          <input type='text' placeholder='Nom'></input>
          <input type='text' placeholder='Numero'></input>
        </div>
        <input type='text' placeholder='Email'></input>
        <input type='text' placeholder='Sujet/Titre'></input>
        <input type='text' placeholder='Message'></input>
        <button type='submit'>ENVOYER</button>
      </form>
    </div>
  );
}
