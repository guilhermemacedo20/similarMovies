import Image from 'next/image'
import styles from './popular.module.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import FilmItem from '@/components/FilmItem/filmItem'

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

export default function Popular() {

  const [filmsName,setFilmName] = useState<filmsArray>()

  const getFilms = async () => {
    
    setFilmName(await axios.get(`/api/getPopular/getPopular`))
    
  }

  useEffect(()=>{
    getFilms()
  },[])

  return (
    <>
      <div className={styles.filmContainer}>
        {filmsName && filmsName.data.map((film : filmType,idx)=>{
          return(
            <div key={idx}>
              <FilmItem film={film}/>
            </div>
          )
        })}
      </div>
    </>
  )
}
