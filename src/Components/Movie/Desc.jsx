import React from 'react'
import { useSelector } from "react-redux";
import usergetCast from '../hooks/usergetCast';
import usegetDetails from '../hooks/usegetDetails';
import "./section.css"

const Desc = ({idd}) => {

  const {cast,dir} = usergetCast(idd);
  const detailss = usegetDetails(idd);
  const movies = useSelector(store => store.movies?.details)
  const actor = useSelector(store => store.movies.actor);
  const crew = useSelector(store => store.movies.director);
  return movies && (
    <div className='w-screen aspect-video mt-[-7px] min-w-auto pt-0 pr-[32px] pb-[64px] pl-0  flex flex-col sm:absolute justify-center max-w-[800px] z-10 sm:pt-[16px] sm:w-[35%] sm:min-w-[500px] la sm:mr-[950px] sm:mt-[220px]'>
    <div className='mt-[24px] mx-0 mb-0 sm:mt-[40px]'>
      <div className='mb-[16px] sm:ml-[86px] sm:mb-[22px]'>
        <h1 className='mt-[10px] text-white truncate font-NetflixB text-[24px]'>{movies.original_title}</h1>
        <div className='flex flex-col justify-evenly my-[5px] max-w-full'>
        <div className='text-white font-NetflixL text-[16px] leading-[22px] sm:w-[600px] pt-[16px]'>{movies.overview}</div>
        <div className='text-white font-NetflixL text-[16px] leading-7 max-w-full pt-[16px]'>
          <div className='text-white font-NetflixL text-[13px]  sm:w-[600px] sm:text-[16px]'>
            <span className='text-[#a3a3a3]  font-NetflixM mr-[5px]'>Starring:</span>
            <span className='text-[#fff]  font-NetflixM'>{cast}</span>
          </div>
          <div className='text-white font-NetflixL text-[13px] sm:text-[16px]'>
            <span className='text-[#a3a3a3] font-NetflixM mr-[5px]'>Creators:</span>
            <span className='text-[#fff] font-NetflixM'>{dir}</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  )
}

export default Desc