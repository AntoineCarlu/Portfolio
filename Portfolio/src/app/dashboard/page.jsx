"use client"

import { isAuthenticated } from '@/libs/auth';
import { redirect } from 'next/navigation';
import { useLayoutEffect } from 'react';
import styles from '@/app/page.module.css';

export default function Dashboard() {

  useLayoutEffect(() => { 
    const isAuth = isAuthenticated;
    if(!isAuth) {
      redirect('/');
    }
  }, [])

  return (
    <main className={styles.main}>

    </main>
  );
}