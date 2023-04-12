import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function getFilmName(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try{
    const result = await axios.get(`https://api.themoviedb.org/3/movie/${req.query.filmId}/recommendations?api_key=${process.env.API_KEY}&language=pt-BR`)
    .then((response)=> response.data.results
    .sort(() => Math.random() - 0.5)
    .slice(0,8))
    res.send(result)
  }catch(error){
    console.error(error)
  }
    
}