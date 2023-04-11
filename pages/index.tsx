import Head from 'next/head'
import styles from '@/styles/Pages.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Descubra Filmes</title>
        <meta name="description" content="Just a test in next JS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.principalContainer}>
          <h1>Descubra Filmes</h1>
          <Link href={'/similar-films'}>Filmes Similares</Link>
          <Link href={'/recommendations'} className={styles.recommendations}>Recomendações</Link>
          <Link href={'/about-us'} className={styles.aboutUs}>Sobre o site</Link>
        </div>
      </main>
    </>
  )
}
