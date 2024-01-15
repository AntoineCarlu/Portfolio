"use client"

import { isAuthenticated } from '@/libs/auth';
import { redirect } from 'next/navigation';
import { useLayoutEffect } from 'react';
import styles from './dashboard.module.css';
import AddProject from '@/components/dashboard.components/AddProject.component';

export default function Dashboard() {

  // Function to protect the route to being access by unauthorized user
  useLayoutEffect(() => { 
    const isAuth = isAuthenticated;
    if(!isAuth) {
      redirect('/');
    }
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.dashboard_div}>
        <AddProject />
      </div>
    </main>
  );
}
