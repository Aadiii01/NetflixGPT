import React from 'react'

const Sections4 = () => {
  return (
    <div className='relative flex justify-center text-white text-center box-border min-h-auto py-14 px-0 bg-black sm:min-h-auto 
    sm:py-[4.5rem]'>
      <div className='m-auto max-w-[calc(100%-3rem)] sm:max-w-[calc(83.33333333333334%-6rem)] flex items-center flex-col text-center sm:flex-row-reverse'>
        <div className='basic-[50%] p-0 z-10 w-full sm:text-left sm:pr-[0.375rem] sm:max-w-[585px]'>
          <h2 className='m-0 text-[2rem] sm:text-[3rem] font-NetflixB leading-[45px] sm:leading-[60px]'>Create profiles for kids</h2>
          <p className='mt-4 text-[1.125rem] sm:text-[1.5rem] font-NetflixL sm:leading-[30px]'>Send children on adventures with their favourite characters in a space made just for them free with your membership.</p>
          <div className='mt-4'><div className='absolute left-[50%] top-[50%]'></div></div>
        </div>
        <div className='basic-[50%] p-0 z-10 sm:pl-[0.375rem]'>
          <div className='relative'>
            <img className='w-full' src='Child.png'/>
          </div>
        </div>
      </div>
      <div className="w-full h-2 absolute bottom-[-0.1rem] bg-[#232323]"></div>
    </div>
  )
}

export default Sections4