import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import DetailsMovie from './DetailsMovie'

export default function MovieDetails() {
  const allData = useLoaderData()
  const [movies,setMovie] = useState(allData)
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          allData?.map(data => <DetailsMovie key={data._id} 
              movies={movies}
              setMovie={setMovie}
            sendAllMovie={data} />)
        }
      </div>
    </div>
  )
}
