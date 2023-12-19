import React from 'react'
import Movie from './Movie'

function MovieList() {
  return (
    <div className='bg-background-500 rounded-md relative w-[25rem]'>
      <Movie />
      <Movie />
      <Movie />
    </div>
  )
}

export default MovieList