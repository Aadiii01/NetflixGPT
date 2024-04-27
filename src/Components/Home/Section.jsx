import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoDesc from './VideoDesc'
import Shimmer from './Shimmer'

const Section = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies)
  if(!movies) return <Shimmer/>;
  const randomIndex = Math.floor(Math.random() * 20);
  const mainMovie = movies[randomIndex];

  const {original_title,id,overview} = mainMovie
  return (
    <section className='pt-0 overflow-hidden my-0 mx-auto max-w-[1600px] relative pb-[20px] sm:pb-[25px] py-[25px] px-[5vw] bg-[#181818]'>
      <div className='flex flex-col sm:flex-row-reverse relative my-0 mx-auto w-full'>
        <VideoBackground movieId={id}/>
        <VideoDesc title={original_title} desc={overview} movieId={id}/>
      </div>
    </section>
  )
}

export default Section