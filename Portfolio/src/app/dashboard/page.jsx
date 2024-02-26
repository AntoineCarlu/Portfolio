"use client"

import { isAuthenticated } from '@/libs/auth';
import { redirect } from 'next/navigation';
import { useState, useLayoutEffect } from 'react';
import styles from './dashboard.module.css';
import AddData from '@/components/dashboard.components/AddData.component';
import ProjectsList from '@/components/dashboard.components/FetchProjects.component';
import SkillsList from '@/components/dashboard.components/FetchSkills.component';
import EducationsList from '@/components/dashboard.components/FetchEducations.component';
import ExperiencesList from '@/components/dashboard.components/FetchExperiences.component';

export default function Dashboard() {
  const [renderProjectsList, setRenderProjectsList] = useState(false);
  const [renderSkillsList, setRenderSkillsList] = useState(false);
  const [renderEducationsList, setRenderEducationsList] = useState(false);
  const [renderExperiencesList, setRenderExperiencesList] = useState(false);

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
            <AddData fields={['project', 'project_link', 'project_img', 'project_descr', 'project_langu']} />
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
            <AddData fields={['skill', 'skill_name', 'skill_pourcent', 'skill_category']} />
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
            <AddData fields={['education', 'education_title', 'education_infos', 'education_descr', 'education_date']} />
          </div>

          <div className={styles.dashboard_div}>
            <h2>Educations | Update / Delete</h2>
            <div>
              <span onClick={() => setRenderEducationsList(!renderEducationsList)}>Cliquez pour voir la liste des éducations</span>
              {renderEducationsList ? <EducationsList /> : ""}
            </div>
          </div>

          <div className={styles.dashboard_div}>
            <h2>Experience | Create</h2>
            <AddData fields={['experience', 'experience_title', 'experience_infos', 'experience_descr', 'experience_date']} />
          </div>

          <div className={styles.dashboard_div}>
            <h2>Experiences | Update / Delete</h2>
            <div>
              <span onClick={() => setRenderExperiencesList(!renderExperiencesList)}>Cliquez pour voir la liste des expériences</span>
              {renderExperiencesList ? <ExperiencesList /> : ""}
            </div>
          </div>
        </div>

      ) : null}
    </main>
  );
}
