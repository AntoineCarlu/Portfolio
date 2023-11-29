import styles from '@/app/page.module.css';
import Header from '@/components/header/Header.component';
import Accueil from '@/components/home/Home.component';
import ProjectsList from '@/components/projects/Projects.component' ;
import Profil from '@/components/profil/Profil.component';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Accueil />
      <ProjectsList />
      <Profil />
    </main>
  )
}
