import React, { useEffect, useState } from 'react'
import './App.css'

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const API_KEY = 'e250f78f'

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function App() {
  const [movies, setMovies] = useState(tempMovieData)
  const [watched, setWatched] = useState(tempWatchedData)
  const query = 'Ben-hur'

  useEffect(function () {
    async function fetchMovies() {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
      const data = await res.json()
      console.log(data)

      setMovies(data.Search)
    }

    fetchMovies()
  })

  return (
    <div className='flex flex-col gap-4'>
      <Navbar>
        <Search />
        <NumResult movies={movies} />
      </Navbar>
      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <Summery watched={watched} />
          <WatchList watched={watched} />
        </Box>
      </Main>
    </div>
  )
}

function Navbar({ children }) {
  return (
    <div className='flex justify-between bg-primary h-30 px-6 py-2 w-full rounded-md'>
      <Logo />
      {children}
    </div>
  )
}

function Logo() {
  return (
    <div className='flex items-center'>
      <span role='img'>🍿</span>
      <h1 className='flex font-semibold text-white'>usePopcorn</h1>
    </div>
  )
}

function Search() {
  const [query, setQuery] = useState("")
  return (
    <>
      <input type="text" placeholder='Search movies...'
        className='flex items-center bg-primary-light text-sm py-1 px-4 rounded w-96 outline-none'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  )
}

function NumResult({ movies }) {
  return (
    <div className='flex items-center text-xs text-white'>Found {movies.length} results</div>
  )
}

function Main({ children }) {
  return (
    <div className='flex gap-4 px-6 text-xs mx-auto min-h-[calc(100vh-6rem)] '>
      {children}
    </div>
  )
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className='bg-background-500 rounded-md relative w-[25rem]'>
      <button className='flex justify-center items-center pb-1 absolute right-2 top-2 w-6 h-6 rounded-full bg-[#212529] text-[1.4rem]'
        onClick={() => setIsOpen(open => !open)}>
        {isOpen ? '-' : '+'}
      </button>
      {isOpen && children}
    </div>
  )
}

function MovieList({ movies }) {
  return (
    <ul>
      {movies?.map(movie => <Movie movie={movie} key={movie.imdbID} />)}
    </ul>
  )
}


function Movie({ movie }) {
  return (
    <li className='flex items-center px-6 py-3 gap-4 border-b border-background-100'>
      <img src={movie.Poster} alt={`${movie.Title} poster`} className='h-10 w-7' />
      <div>
        <h3 className='font-semibold text-sm'>{movie.Title}</h3>
        <p>
          <span className='text-xs mr-2'>🗓</span>
          <span className='text-sm'>2010</span>
        </p>
      </div>
    </li>
  )
}

function WatchList({ watched }) {
  return (
    <ul>
      {watched.map((movie) => <WatchedMovie key={movie.imdbID} movie={movie} />)}
    </ul>
  )


}

function Summery({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));


  return (
    <div className='flex flex-col px-8 py-3 gap-2 bg-background-100 rounded-md'>
      <h2 className='uppercase font-semibold text-[.8rem]'>Movies you watched</h2>
      <div className='flex justify-between'>
        <p className='flex gap-1'>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p className='flex gap-1'>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p className='flex gap-1'>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p className='flex gap-1'>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div >
  )
}

function WatchedMovie({ movie }) {
  return (
    <li className='flex items-center px-6 py-3 gap-4 border-b border-background-100'>
      <img src={movie.Poster} alt={`${movie.Title} poster`} className='h-10 w-7' />
      <div className='flex flex-col gap-2 w-3/5'>
        <h3 className='font-semibold text-sm'>{movie.Title}</h3>
        <div className='flex justify-between'>
          <p className='flex gap-1'>
            <span>⭐️</span>
            <span>{movie.imdbRating}</span>
          </p>
          <p className='flex gap-1'>
            <span>🌟</span>
            <span>{movie.userRating}</span>
          </p>
          <p className='flex gap-1'>
            <span>⏳</span>
            <span>{movie.runtime} min</span>
          </p>
        </div>
      </div>
    </li>
  )
}



export default App