"use client"

import styles from '@/app/page.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function Admin() {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const token = process.env.API_TOKEN;
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ user, password }),
      });

      //check if authentification is correct
      if (res.ok) {
        router.replace("dashboard");
        console.log('Login réussi !');
      } else {
        console.log('Login incorrect !');
      }
    } catch (error) {
      console.error('Error during login :', error);
    }
  };

  return (
    <main className={styles.main}>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input type="text" value={user} onChange={(e) => setUser(e.target.value)} placeholder="Username" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </main>
  );
}
