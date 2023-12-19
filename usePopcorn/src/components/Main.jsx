import React from 'react'
import MovieList from './MovieList'
import WatchList from './WatchList'

function Main() {
  return (
    <div className='flex gap-4 px-6 text-xs mx-auto h-[calc(100vh-6rem)]'>
      <MovieList />
      <WatchList />
    </div>
  )
}

export default Main