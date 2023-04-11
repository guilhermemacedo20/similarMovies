import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function getFilmName(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try{
    const result = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1fd9d0e013329f231ac2b285f03a2dd9&query=${req.query.filmName}&language=pt-BR`).then((response)=> response.data.results.slice(0,10))
    res.send(result)
  }catch(error){
    console.error(error)
  }
    
}