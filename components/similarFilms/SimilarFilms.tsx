import Image from 'next/image'
import styles from './similar-films.module.scss'
import { useState } from 'react'
import axios from 'axios'
import FilmItem from '@/components/FilmItem/filmItem'
import { filmType, filmsArray } from '../types'

export default function SimilarFilms() {

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
      <div className={styles.description}>

        {selectFilms.length === 0 && 
          <div className={styles.search}>
            <label className={styles.searchLabel}>Insira o filme que deseja buscar: </label>
            <input placeholder='Insira aqui o nome do filme' className={styles.searchInput} id="inputId"/>
            <button className={styles.searchButton} onClick={getFilmName}>Buscar</button>
          </div>
        }          
      </div>
        { selectFilms.length > 0 && 
          <div className={styles.selectFilmContainer}>
            <p className={styles.selectFilmLabel}>Filme selecionado: </p>
            {selectFilms?.map((selectFilm)=>{
              return(
              <>
                <Image className={styles.selectFilmImage} src={`https://image.tmdb.org/t/p/w400/${selectFilm.poster_path}`} alt={selectFilm.id.toString()} width={250} height={300}/>
                <p className={styles.selectFilmTitle}>{selectFilm.title}</p>
                <button className={styles.searchSelectedFilm}  onClick={()=> searchSimilars(selectFilms)}>Buscar filmes parecidos</button>
                <button className={styles.removeSelectedFilm} onClick={() => removeFilm(selectFilm.id)}>Remover Filme</button>                
              </>
              )
            })}
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
    </>
  )
}
