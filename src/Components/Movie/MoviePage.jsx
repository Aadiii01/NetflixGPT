import React from 'react'
import { useParams } from "react-router-dom";
import Headers from '../Home/Headers.jsx'
import Container from './Container.jsx';
import Cast from './Cast.jsx';
import Footer from "../../Components/Footer.jsx"


const MoviePage = () => {

  const {id} = useParams();

  return (
    <div className='mt-14 bg-[#181818]'>
      <Headers/>
      <Container idd={id}/>
      <div className=''>
        <div className='sm:mt-[-222px] mt-[-80px] relative z-10'>
      <Cast idd={id}/>
      </div>
      </div>
      <Footer classes="bg-[#181818] text-[#ffffffb3] top-[2px] min-w-[190px] pb-[20px] relative w-full"/>
    </div>
  )
}

export default MoviePage