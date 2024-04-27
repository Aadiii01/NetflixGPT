import React from 'react'
import Video from './Video'
import Desc from './Desc'

const Container = ({idd}) => {
  return (
    <section className='pt-0 overflow-hidden my-0 mx-auto max-w-[1600px] relative pb-[20px] sm:pb-[25px] py-[25px] px-[5vw] bg-[#181818]'>
    <div className='flex flex-col sm:flex-row-reverse relative my-0 mx-auto w-full'>
      <Video idd={idd}/>
      <Desc idd={idd}/>
    </div>
  </section>
  )
}

export default Container