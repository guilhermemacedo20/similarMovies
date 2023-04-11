import Image from 'next/image'
import styles from './film-item.module.scss'
import { filmType } from '../similarFilms/SimilarFilms'

interface FilmItemType {
  film: filmType
  setFilm: (
    film: filmType
  ) => void
}

export default function FilmItem({film,setFilm}:FilmItemType) {
  return (
    <>
      <div className={styles.filmItem}>
        <Image src={`https://image.tmdb.org/t/p/w400/${film.poster_path}`} alt={film.id.toString()} width={250} height={300}/>
        <p className={styles.filmTitle}>Título: {film.title}</p>
        <p className={styles.filmOverview}>Sinopse: {(film.overview.length > 250) ? film.overview.substring(0, 250) + '...': film.overview}</p>
        <p className={styles.filmVote}>Nota: {film.vote_average.toFixed(1)}</p>
        <button className={styles.filmButton}  onClick={() => setFilm(film)}>Selecionar</button>
      </div>
    </>
  )
}
