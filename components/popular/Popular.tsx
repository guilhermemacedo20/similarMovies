import { useEffect, useState } from 'react'
import axios from 'axios'
import FilmItem from '@/components/FilmItem/filmItem'
import { filmType, filmsArray } from '../types'

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
      <div>
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
