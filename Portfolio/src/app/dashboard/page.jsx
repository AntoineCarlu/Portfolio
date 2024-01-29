"use client"

import { isAuthenticated } from '@/libs/auth';
import { redirect } from 'next/navigation';
import { useLayoutEffect } from 'react';
import styles from './dashboard.module.css';
import AddProject from '@/components/dashboard.components/AddProject.component';
import DeleteProjectsList from '@/components/dashboard.components/FetchProjects.component';

export default function Dashboard() {

  // Function to protect the route to being access by unauthorized user
  useLayoutEffect(() => { 
    const isAuth = isAuthenticated;
    if (!isAuth) {
      redirect('/');
    }
  }, [])

  return (
    <main className={styles.main}>
      {/* Only show this JSX elements when the user is authentificated */}
      {isAuthenticated ? (

        <div className={styles.dashboard_div}>
          <h1>Project | Create</h1>
          <AddProject />
          {/* <DeleteProjectsList /> */}
        </div>

      ) : null}
    </main>
  );
}
