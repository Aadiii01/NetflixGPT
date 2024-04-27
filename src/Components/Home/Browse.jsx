import React from 'react'
import Footer from "../Footer.jsx"
import Headers from './Headers.jsx'
import useAPI from '../hooks/useAPI.js'
import Section from './Section.jsx'
import usegetPopular from "../hooks/usegetPopular.js"
import usegetTrending from "../hooks/usegetTrending.js"
import usegetUpcoming from "../hooks/usegetUpcoming.js"
import SecondaryContainer from './SecondaryContainer.jsx'


const Browse = () => {
  
  useAPI();
  usegetTrending();
  usegetUpcoming();
  usegetPopular();
  return (
    <div className='mt-14'>
      <Headers/>
      <Section/>
      <SecondaryContainer/>
      <div className="w-full h-2 absolute bg-[#232323]"></div>
      <Footer classes="bg-[#181818] text-[#ffffffb3] sm:mt-[8px] mt-[4px] min-w-[190px] pb-[20px] relative w-full"/>
    </div>
  )
}

export default Browse