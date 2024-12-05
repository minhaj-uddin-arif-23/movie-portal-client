import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import MovieCard from './MovieCard'

export default function AllMovie() {
  const getData = useLoaderData()
  // const [data,setData] = useState([])
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {
          getData?.map(data => <MovieCard key={data._id} sendCard={data} /> )
        }
      </div>
    </div>
  )
}
