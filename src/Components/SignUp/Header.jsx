import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header className='pl-6 pr-6 pt-6 pb-6 sm:max-w-[1266px] sm:pl-12 sm:pr-12 m-auto'>
      <div className='box-border w-full h-8 sm:h-11'>
        <div className='ml-[-0.5rem] w-full inline-flex flex-wrap flex-row h-10 mt-[-0.5rem] items-center justify-between sm:w-[1186px] sm:h-12'>
          <div className='ml-[0.5rem] mt-[0.5rem] inline-flex flex-wrap w-auto'>
            <img className="block sm:w-[10rem] sm:h-[3.2rem] w-[6.5rem] h-[2.2rem]" src="netflix-logo-png-2562.png"/>
          </div>
          <div className='inline-flex flex-wrap justify-end ml-[0.5rem] mt-[0.5rem] w-auto'>
            <div className='box-border w-full h-auto'>
              <div className='w-[157px] h-8 inline-flex flex-wrap justify-end flex-row'>
                <div className='w-auto inline-flex flex-wrap'>
                  <Link to='login'>
                    <div className='bg-[#e50914] rounded w-[90px] h-[42px] text-[16px] pl-[18px] pt-[9px]  mt-[-12px] text-white font-NetflixM cursor-pointer hover:bg-[#e5090de1] mr-[-18px] sm:mr-[0px]'>Sign In</div>
                    {/* ssmm:mr-[60px] smm:mr-[90px] ssm:mr-[110px] adm:mr-[-10px] */}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header