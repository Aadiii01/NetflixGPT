import React, { useState, useEffect } from "react";
import { IoHome } from "react-icons/io5";
import { SiOpenai } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { MdOutlineDescription } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { signOut } from "firebase/auth";
import {auth} from "../../Utils/firebase"
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react'
import NetflixScreen from "../../assets/netflix-logo-png-2562.png"
import NetflixMobile from "../../assets/4375011_logo_netflix_icon.png"

const Headers = () => {

  const navigate = useNavigate();
  const handlebutton = () => {
    signOut(auth)
      .then(() => {
        navigate("/login")
      })
      .catch((err) => {
        navigate("/error")
      })
  }

  const [isDesktopOrMobile, setIsDesktopOrMobile] = useState(
    window.innerWidth > 1024
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopOrMobile(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const logoSrc = isDesktopOrMobile ? NetflixScreen : NetflixMobile;

  return (
    <div className="flex justify-between py-8 px-[3%] fixed h-4 left-0 right-0 top-0 z-20 bg-[#000000]">
      <div className="flex items-center flex-row text-[13px]">
        <Link  to="/">
          <img
            src={logoSrc} className="h-12 block overflow-hidden "/>
        </Link>
      </div>

      {isDesktopOrMobile && <ul className='p-0 pl-20 list-none min-w-0 flex flex-1 flex-row h-full items-center text-[#ffffffb3] font-NetflixL text-[13px]'>

        <li className='mr-14 hover:text-white'>
          <div className='relative h-20 cursor-pointer flex items-center pl-7'>
            <Link to="/browse" className='flex items-center text-no-underline h-full ml-n7'>
              <span className='absolute top-[49%] left-[2.5px] text-[1.2rem] -translate-y-1/2 leading-none'>
                <IoHome/>
              </span>
              <span>Home</span>
            </Link>
          </div>
        </li>

        <li className='mr-14 hover:text-white'>
          <div className='relative h-20 cursor-pointer flex items-center pl-7'>
            <Link to="/gptsearch" className='flex items-center text-no-underline h-full ml-n7'>
              <span className='absolute top-[50%] left-[2.5px] text-[1.2rem] -translate-y-1/2 leading-none'>
                <SiOpenai/>
               </span>
               <span>CHAT GPT Search</span>
            </Link>
          </div>
        </li>

        <li className='mr-14 hover:text-white'>
          <div className='relative h-20 cursor-pointer flex items-center pl-7'>
            <Link to="/about" className='flex items-center text-no-underline h-full ml-n7'>
              <span className='absolute top-[50%] left-[2.5px] text-[1.2rem] -translate-y-1/2 leading-none'>
                <SiGithub/>
              </span>
              <span>About</span>
            </Link>
          </div>
        </li>

        <li className='mr-14 hover:text-white'>
          <div className='relative h-20 cursor-pointer flex items-center pl-7'>
            <Link to="/info" className='flex items-center text-no-underline h-full ml-n7 '>
              <span className='absolute top-[50%] left-[2.5px] text-[1.2rem] -translate-y-1/2 leading-none'>
                <MdOutlineDescription/>
              </span>
              <span>Project Details</span>
            </Link>
          </div>
        </li>

      </ul>}

      {isDesktopOrMobile && <div className='h-[40px] mr-[32px] mb-[-20px] min-w-[300px] self-end relative flex items-center w-[280px] rounded-[12px] border-[1px] border-[#696969]'>
        <input className='w-[258px] h-full outline-none bg-transparent font-NetflixT text-[18px] text-white ml-[23px] whitespace-nowrap rounded-[12px]' placeholder="Search" />
          <button className='absolute top-[7px] right-[21px] width-[18px] height-[18px] text-[25px] text-[#ffffffb3]' ><IoMdSearch/>
          </button>
      </div>}

      {isDesktopOrMobile && <div className="flex items-center text-[13px]">
        <button className="inline-flex items-center justify-center border-[1px] border-solid border-[#696969] box-border rounded-[0.25rem] cursor-pointer font-NetflixL relative text-[1rem] w-[95px] h-[35px] text-white bg-[#e50914] hover:bg-[#e50914a4]" onClick={handlebutton}>Sign Out
        </button>
      </div>}

      {!isDesktopOrMobile && <div className="flex items-center text-[13px]">
        <button className="inline-flex items-center mr-[20px] justify-center border-[1px] border-solid border-[#696969] box-border rounded-[0.25rem] cursor-pointer font-NetflixL relative text-[1rem] w-[95px] h-[35px] text-white bg-[#e50914] hover:bg-[#e50914a4]" onClick={handlebutton}>Sign Out
        </button>
        {isMenuOpen ? (
          <X onClick={toggleMenu} className="h-6 w-6 text-white cursor-pointer" aria-hidden="true" />
        ) : (
          <Menu onClick={toggleMenu} className="h-6 w-6 text-white cursor-pointer" />
        )}
        {isMenuOpen && (
            <>
            <div className="absolute inset-x-0 top-[62px] z-50 origin-top-right transform  transition lg:hidden">
              <div className="divide divide-gray-50 bg-black shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="w-full h-[0.2px] bg-gray-400"></div>
                <div className="px-5 pb-6 pt-4">
                  <ul className="list-none  flex flex-col h-full items- text-[#ffffffb3] font-NetflixL text-[13px]">
                    <li className=' hover:text-white'>
                      <div className='relative cursor-pointer flex items-center pl-7'>
                        <Link to="/browse" className='flex items-center text-no-underline h-full ml-n7'>
                          <span className='absolute top-[49%] left-[2.5px] text-[1.2rem] -translate-y-1/2 leading-none'>
                            <IoHome/>
                          </span>
                          <span>Home</span>
                        </Link>
                      </div>
                    </li>
                    <li className='mt-4 hover:text-white'>
                      <div className='relative cursor-pointer flex items-center pl-7'>
                        <Link to="/gptsearch" className='flex items-center text-no-underline h-full ml-n7'>
                          <span className='absolute top-[49%] left-[2.5px] text-[1.2rem] -translate-y-1/2 leading-none'>
                            <SiOpenai/>
                          </span>
                          <span>CHAT GPT Search</span>
                        </Link>
                      </div>
                    </li>
                    <li className='mt-4 hover:text-white'>
                      <div className='relative cursor-pointer flex items-center pl-7'>
                        <Link to="/about" className='flex items-center text-no-underline h-full ml-n7'>
                          <span className='absolute top-[49%] left-[2.5px] text-[1.2rem] -translate-y-1/2 leading-none'>
                            <SiGithub/>
                          </span>
                          <span>About</span>
                        </Link>
                      </div>
                    </li>
                    <li className='mt-4 hover:text-white'>
                      <div className='relative cursor-pointer flex items-center pl-7'>
                        <Link to="/info" className='flex items-center text-no-underline h-full ml-n7'>
                          <span className='absolute top-[49%] left-[2.5px] text-[1.2rem] -translate-y-1/2 leading-none'>
                            <MdOutlineDescription/>
                          </span>
                          <span>Project Details</span>
                        </Link>
                      </div>
                    </li>
                  </ul>
                  <div className="w-[500px] ml-[-20px] h-[0.2px] bg-gray-400 mt-[20px]"></div>
                  <div className='h-[40px] mr-[32px] mt-[20px] min-w-full self-end relative flex items-center w-[280px] rounded-[12px] border-[1px] border-[#696969]'>
                    <input className='w-[258px] h-full outline-none bg-transparent font-NetflixT text-[18px] text-white ml-[23px] whitespace-nowrap rounded-[12px]' placeholder="Search" />
                      <button className='absolute top-[7px] right-[21px] width-[18px] height-[18px] text-[25px] text-[#ffffffb3]' ><IoMdSearch/></button>
                  </div>
                </div>
              </div>
            </div>
        </>)} 
      </div>}
    </div>
  );
};

export default Headers;