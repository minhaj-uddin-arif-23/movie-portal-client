import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import DetailsMovie from './DetailsMovie'

export default function MovieDetails() {
  // const {id} = useParams()
  const allData = useLoaderData()
  const [movies,setMovie] = useState(allData)
  // console.log(movies)
  return (
    <>
      <div className=''>
        {
           movies ? < DetailsMovie key={movies._id} movies={movies}
           setMovie={setMovie}
         data={movies} /> : "Not found" 
        }
      </div>
    </>
  )
}

