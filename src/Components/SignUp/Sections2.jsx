import React from 'react'
import "./image.css"

const Sections2 = () => {
  return (
    <div className='relative flex justify-center text-white text-center box-border min-h-auto py-14 px-0 bg-black sm:min-h-auto 
    sm:py-[4.5rem]'>
      <div className='m-auto max-w-[calc(100%-3rem)] sm:max-w-[calc(83.33333333333334%-6rem)] flex items-center flex-col text-center sm:flex-row-reverse'>
        <div className='basic-[50%] p-0 z-10 w-full sm:text-left sm:pr-[0.375rem] sm:max-w-[585px]'>
          <h2 className='m-0 text-[2rem] sm:text-[3rem] font-NetflixB leading-[45px] sm:leading-[60px]'>Download your shows to watch offline</h2>
          <p className='mt-4 text-[1.125rem] sm:text-[1.5rem] font-NetflixL sm:leading-[30px]'>Save your favourites easily and always have something to watch.</p>
          <div className='mt-4'><div className='absolute left-[50%] top-[50%]'></div></div>
        </div>
        <div className='basic-[50%] p-0 z-10 sm:pl-[0.375rem]'>
          <div className='relative'>
            <img className='w-full' src='mobile-0819.jpg'/>
            <div className='z-10 .IMG1class absolute left-[19%] bottom-[8%] sm:left-[20%] my-0 mx-auto bg-black flex items-center w-[60%] min-w-[15rem] py-[0.25rem] px-[0.65rem] ssm:left-[10%] ssmm:left-[20%] smm:left-[15%] border-2 border-solid border-[#808080b3] rounded-xl sm:w-[60%] sm:py-[0.5rem] sm:px-[0.75rem]'>
              <div className='mr-4'><img className='h-12 sm:h-20' src='boxshot.png'/></div>
              <div className='text-left grow shrink my-[0.3rem]'>
                <div className='text-white text-[0.875rem] sm:text-[1rem] font-NetflixM'>Stranger Things</div>
                <div className='text-[0.75rem] text-[#0071eb] sm:text-[0.875rem] font-NetflixL'>Downloading...</div>
              </div>
              <div className='h-12 sm:h-[3.5rem] IMG1class'></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-2 absolute bottom-[-0.1rem] bg-[#232323]"></div>
    </div>
  )
}

export default Sections2