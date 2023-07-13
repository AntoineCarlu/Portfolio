import Head from 'next/head';
import Image from 'next/image';
import Header from './header.component';
import Accueil from './accueil.component';
import styles from '../styles/main.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>Portfolio Next.js</title>
				<meta name='description' content='Antoine Carlu | My Portfolio with Next.js & React !' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
      <main className={styles.main}>
        {/* Header */}
        <Header />
        {/* Section Accueil */}
        <Accueil />
        
      </main>
		</>
	);
}

