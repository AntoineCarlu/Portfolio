"use client"

import { isAuthenticated } from '@/libs/auth';
import { redirect } from 'next/navigation';
import { useState, useLayoutEffect } from 'react';
import styles from './dashboard.module.css';
import AddProject from '@/components/dashboard.components/AddProject.component';
import DeleteProjectsList from '@/components/dashboard.components/FetchProjects.component';

export default function Dashboard() {
  const [renderProjectsList, setRenderProjectsList] = useState(false);

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

        <div className={styles.dashboard_center}>
          <div className={styles.dashboard_div}>
            <h2>Project | Create</h2>
            <AddProject />
          </div>

          <div className={styles.dashboard_div}>
            <h2>Project | Update / Delete</h2>
            <div>
              <span onClick={() => setRenderProjectsList(!renderProjectsList)}>Cliquez pour voir la liste des projets</span>
              {renderProjectsList ? <DeleteProjectsList /> : ""}
            </div>
          </div>
        </div>

      ) : null}
    </main>
  );
}
