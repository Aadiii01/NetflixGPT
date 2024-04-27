import React from 'react'
import "./warning.css"

const Warning = () => {

  const h1 = "The Feature of Chat GPT Search in this Project is not currently available because of exceed the usage limit of OPEN AI API so for your inconvenience i am really sorry enjoy the other functionality of this Project Thankyou!"

  return (
    <div className='bg-[#465A7E66] sm:w-[500px] sm:h-[250px] rounded-[8px] border border-[#696969] sm:mt-[-320px] z-10 
    absolute sm:ml-[30rem] w-[300px] h-[150px] mt-[-170px] ssmm:ml-[80px] ssm:ml-[34px] smm:ml-[55px] adm:ml-[6.3rem] '>
      <h1 className='text-white font-NetflixR sm:text-[16px] text-[12px] pt-[30px] pl-[5px] sm:pt-[65px] pr-[5px] text-center animate-blink'>
        {h1}
      </h1>
    </div>
  )
}
//  
export default Warning