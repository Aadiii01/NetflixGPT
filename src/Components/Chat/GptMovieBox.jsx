import React from 'react'
import { useSelector } from "react-redux";
import MovieList from '../Home/MovieList';
import Warning from './Warning';

const GptMovieBox = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  const movies = useSelector(store => store.movies)
  return !movieNames ? <Warning/> : (
    <div className='mt-[-180px] bg-[#181818]'>
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  )
}

export default GptMovieBox