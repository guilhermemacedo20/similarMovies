import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function getFilmName(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try{
    const result = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&query=${req.query.filmName}&language=pt-BR`)
    .then((response)=> response.data.results
    .sort(() => Math.random() - 0.5)
    .slice(0,10))
    res.send(result)
  }catch(error){
    console.error(error)
  }
    
}