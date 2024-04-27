import React from 'react'
import Headers from '../Home/Headers'
import FAQ from "../SignUp/FAQ"
import { faq } from '../../Utils/Projectdetails'
import Footer from '../Footer'

const ProjectDeatils = () => {
  return (
    <div>
      <Headers/>
      <div className='mt-[60px]'>
      <FAQ bg={"bg-[#181818]"} faq={faq} h1="Project Related Question and Answer"/>
      </div>
    <Footer classes="bg-[#181818] text-[#ffffffb3]  min-w-[190px] pb-[20px] relative w-full"/>
    </div>
  )
}

export default ProjectDeatils