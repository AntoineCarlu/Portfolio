"use client"

import { isAuthenticated } from '@/libs/auth';
import { redirect } from 'next/navigation';
import { useState, useLayoutEffect } from 'react';
import styles from './dashboard.module.css';
import AddProject from '@/components/dashboard.components/AddProject.component';
import ProjectsList from '@/components/dashboard.components/FetchProjects.component';
import AddSkill from '@/components/dashboard.components/AddSkill.component';
import SkillsList from '@/components/dashboard.components/FetchSkills.component';
import AddEducation from '@/components/dashboard.components/AddEducation.component';
import AddExperience from '@/components/dashboard.components/AddExperience.component';

export default function Dashboard() {
  const [renderProjectsList, setRenderProjectsList] = useState(false);
  const [renderSkillsList, setRenderSkillsList] = useState(false);

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
            <h2>Projects | Update / Delete</h2>
            <div>
              <span onClick={() => setRenderProjectsList(!renderProjectsList)}>Cliquez pour voir la liste des projets</span>
              {renderProjectsList ? <ProjectsList /> : ""}
            </div>
          </div>

          <div className={styles.dashboard_div}>
            <h2>Skill | Create</h2>
            <AddSkill />
          </div>

          <div className={styles.dashboard_div}>
            <h2>Skills | Update / Delete</h2>
            <div>
              <span onClick={() => setRenderSkillsList(!renderSkillsList)}>Cliquez pour voir la liste des compétences</span>
              {renderSkillsList ? <SkillsList /> : ""}
            </div>
          </div>

          <div className={styles.dashboard_div}>
            <h2>Education | Create</h2>
            <AddEducation />
          </div>

          <div className={styles.dashboard_div}>
            <h2>Experience | Create</h2>
            <AddExperience />
          </div>
        </div>

      ) : null}
    </main>
  );
}
