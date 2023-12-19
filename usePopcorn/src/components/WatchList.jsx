import React from 'react'
import Summery from './Summery'
import Movie from './Movie'

function WatchList() {
  return (
    <div className='bg-background-500 rounded-md relative w-[25rem]'>
      <Summery />
      <Movie />
      <Movie />
    </div>
  )
}

export default WatchList