"use client"

import { useState } from 'react';
import styles from './contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', number: '', email: '', subject: '', message: '' });

  // Handle the change in inputs to update the state and values
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to send email from form contact on submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/email", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({ name: '', number: '', email: '', subject: '', message: '' });
        alert('Email envoyé avec succès !');
      } else {
        alert("Erreur lors de l'envoi de l'email. (1)");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email :", error);
      alert("Erreur lors de l'envoi de l'email. (2)");
    }
  };

  // Page content
  return (
    <section className={styles.contact} id="Contact">
      <h1><u>Contactez moi</u></h1>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.twoInputs}>
          <div className={styles.contactInputs}>
            <label>NOM & PRENOM (Optionnel)</label>
            <input
              type='text'
              maxLength={50}
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom et prénom (ou nom d'entreprise)"
            />
          </div>
          <div className={styles.contactInputs}>
            <label>NUMERO (Optionnel)</label>
            <input
              type='text'
              maxLength={25}
              name='number'
              value={formData.number}
              onChange={handleChange}
              placeholder='Numéro de téléphone'
            />
          </div>
        </div>
        <div className={styles.contactInputs}>
          <label>EMAIL</label>
          <input
            type='email'
            maxLength={50}
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            placeholder='Adresse email'
          />
        </div>
        <div className={styles.contactInputs}>
          <label>SUJET</label>
          <input
            type='text'
            maxLength={50}
            name='subject'
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder='Sujet / Titre'
          />
        </div>
        <div className={styles.contactInputs}>
          <label>MESSAGE</label>
          <textarea
            type='text'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
            placeholder='Contenu du message'
          ></textarea>
        </div>
        <button
          type='submit'
          disabled={!formData.email || !formData.subject || !formData.message}
        >ENVOYER</button>
      </form>
    </section>
  );
}
