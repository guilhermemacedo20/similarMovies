import Head from 'next/head'
import styles from '@/styles/Pages.module.scss'
import Link from 'next/link'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SimilarFilms from '@/components/similarFilms/SimilarFilms'

export interface filmType {
  adult: boolean
  backdrop_path: string
  genre_ids: Array<number>
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
interface filmsArray {
  data:filmType[]
}

export default function Page() {

  return (
    <>
      <Head>
        <title>Similar Movies</title>
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
