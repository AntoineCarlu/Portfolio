import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

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
      <div className={styles.header}>
        <a href=''>Home</a>
        <p>Liste</p>
      </div>
    </main>
		</>
	);
}
