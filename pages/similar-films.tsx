import Head from 'next/head'
import styles from '@/styles/Pages.module.scss'
import Link from 'next/link'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SimilarFilms from '@/components/similarFilms/SimilarFilms'

export default function Page() {

  return (
    <>
      <Head>
        <title>Filmes similares</title>
        <meta name="description" content="Just a test in next JS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Link className={styles.backArrow} href={"/"}><ArrowBackIcon /> Voltar</Link>
        <SimilarFilms />
      </main>
    </>
  )
}
