import React from 'react'
import Headers from "../Home/Headers"
import Footer from "../Footer"
import GptSearchBar from './GptSearchBar'
import {Supported_Lang} from "../../Utils/constants"
import { useDispatch } from "react-redux";
import { changelang } from "../toolkit/configSlice"
import GptMovieBox from './GptMovieBox'

const GptPage = () => {
  const dispatch = useDispatch();

  const handleLangChange = (e) => {
    dispatch(changelang(e.target.value))
  }
  return (
    <div className=''>
      <Headers/>
      <select className='bg-black rounded-[4px] mt-[70px] sm:mt-[90px] ssm:ml-[15rem] smm:ml-[17rem] ssmm:ml-[20rem] sm:ml-[80rem] z-10 absolute w-[90px] text-white font-NetflixT' onChange={handleLangChange}>
        {Supported_Lang.map((lan) => (<option key={lan.identifier} value={lan.identifier}>{lan.name}</option>))}
      </select>
      <div className='relative flex justify-center text-white text-center box-border min-h-[30rem] sm:min-h-[43.75rem] sm:pt-[12.875rem] sm:pb-[4rem] pt-[7.5rem] px-0 pb-[2rem]'>
        <div className="h-full left-0 top-0 w-full absolute">
          <div className="w-full h-full relative overflow-hidden">
            <img className="h-full w-full object-cover" src="IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
            <div style={{backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)'}} className="IMGclass"></div>
            </div>
          </div>
          <div className="mt-[20px] flex items-center flex-col text-center">
            <div className="basic-[50%] z-10 w-full">
              <h1 className="m-0 font-NetflixB text-[1.5rem] font-bold sm:text-[3rem] sm:mt-[-50px]">Search Movie in Chat GPT</h1>
              <div className='mt-[20px]'> <GptSearchBar/></div>
            </div>
          </div>
      </div>
      <GptMovieBox/>
      <Footer classes="bg-[#181818] text-[#ffffffb3] sm:mt-[0px]  min-w-[190px] pb-[20px] relative w-full"/>
    </div>
  )
}

export default GptPage