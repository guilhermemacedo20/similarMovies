import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import { useState } from 'react'
import axios from 'axios'
import FilmItem from '@/components/FilmItem/filmItem'

const inter = Inter({ subsets: ['latin'] })
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

export default function Home() {

  const [filmsName,setFilmName] = useState<filmsArray>()
  const [selectFilms,setSelectFilms]= useState<filmType[]>([])

  const getFilmName = async () => {
    const film = (document.getElementById('inputId') as HTMLInputElement).value
    if(film){
      setFilmName(await axios.get(`/api/getFilmName/${film}`))
    }else{
      alert("Insira o nome de um filme!")
    }
    
  }

  const searchSimilars = (films: filmType[]) => {
    setFilmName(undefined)
    films.map(async (film)=>{
      setFilmName(await axios.get(`/api/searchSimilars/${film.id}`))
    })          
    setSelectFilms([]) 
  }

  const setFilm = (film : filmType)=>{
    if(selectFilms.length < 3 ){
      setSelectFilms((prevFilms) => {if(prevFilms){ return [...prevFilms,film]}else{
        return [film]
      }})
    }else{
      alert("Máximo de 3 filmes adicionados!")
    }    
    setFilmName(undefined)
  }

  const removeFilm = (filmId: number) =>{
    const films = selectFilms?.filter((selectFilm) => selectFilm.id !== filmId)
    setSelectFilms(films)
  }

  return (
    <>
      <Head>
        <title>Similar Movies</title>
        <meta name="description" content="Just a test in next JS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <label >Insira o nome do filme: </label>
            <input id="inputId"/>
            <button onClick={getFilmName}>Buscar</button>
          </div>
        </div>
        { selectFilms.length > 0 && 
          <div>
          <p>Filmes selecionados: </p>
          {selectFilms?.map((selectFilm)=>{
            return(<>
              <Image src={`https://image.tmdb.org/t/p/w400/${selectFilm.poster_path}`} alt={selectFilm.id.toString()} width={150} height={200}/>
              {selectFilm.title}
              <button onClick={() => removeFilm(selectFilm.id)}>Remover</button>
            </>
            )
          })}
          
        </div>
        }   
        {selectFilms.length > 0 &&
          <div>
            <button onClick={()=> searchSimilars(selectFilms)}>Buscar filmes parecidos</button>
          </div>
        }     
        <div className={styles.filmContainer}>
          {filmsName && filmsName.data.map((film : filmType,idx)=>{
            return(
              <div key={idx}>
                <FilmItem film={film} setFilm={setFilm}/>
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}
