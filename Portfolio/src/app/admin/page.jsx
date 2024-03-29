"use client"

import { setAuthentication } from '@/libs/auth';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './admin.module.css';

export default function Admin() {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user, password }),
      });

      //check if authentification is correct
      if (res.ok) {
        setAuthentication(true);
        router.replace("dashboard");
        console.log('Connexion réussie !');
      } else {
        const error = await res.json();
        setErrorMessage('Échec de la connexion : ' + error.message);
      }
    } catch (error) {
      setErrorMessage('Erreur lors de la connexion. Réessayez à nouveau.');
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.login_div}>
        <h1>Connexion</h1>
        <form onSubmit={handleLogin}>
          <label>
            Identifiant :
            <input type="text" maxLength={20} value={user} onChange={(e) => setUser(e.target.value)} placeholder="Identifiant" />
          </label>
          <br />
          <label>
            Mot de passe :
            <input type="password" maxLength={25} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" />
          </label>
          <br />
          <button type="submit">Valider</button>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </main>
  );
}
