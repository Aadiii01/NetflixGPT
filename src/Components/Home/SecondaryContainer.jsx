import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  return movies && (
    <div className='bg-[#181818]'>
      <div className='sm:mt-[-222px] mt-[-80px] relative z-10'>
        {movies && <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>}
        {movies && <MovieList title="Upcoming" movies={movies.upcoming}/>}
        {movies && <MovieList title="Popular" movies={movies.popular}/>}
        {movies && <MovieList title="Top Rated" movies={movies.trending}/>}
      </div>
    </div>
  )
}

export default SecondaryContainer