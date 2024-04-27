import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

export const FooterList = ({name}) => {
  return(
    <li className='list-none box-border ml-[0px] w-[50%] sm:w-[25%] inline-block mb-[16px] sm:mb-[12px] min-w-[100px] align-text-top pr-[22px]'>{name}</li>
  )
}

const Footer = ({classes}) => {
  return (
    <footer className={classes}>
      <div className='pt-[30px] w-[90%] ml-[20px] sm:ml-[80px] my-auto'>
        <p className='mb-[30px] text-[18px] sm:text-[15px] sm:font-NetflixR font-NetflixR'>Questions? Call 000-800-919-1694</p>
        <ul className='box-border max-w-[1000px] sm:text-[13px] sm:font-NetflixL text-[14px] font-NetflixR cursor-pointer'>
          <FooterList name="FAQ"/>
          <FooterList name="Help Centre"/>
          <FooterList name="Account"/>
          <FooterList name="Media Centre"/>
          <FooterList name="Investor Relations"/>
          <FooterList name="Jobs"/>
          <FooterList name="Ways to Watch"/>
          <FooterList name="Terms of Use"/>
          <FooterList name="Privacy"/>
          <FooterList name="Cookie Preferences"/>
          <FooterList name="Corporate Information"/>
          <FooterList name="Contact Us"/>
          <FooterList name="Speed Test"/>
          <FooterList name="Legal Notices"/>
          <FooterList name="Only on Netflix"/>
        </ul>
        <div className='border-[1px] flex mt-[20px] rounded-[4px] bg-[#181818] h-[40px] w-[85px] cursor-pointer'>
          <p className='pl-[10px] pt-[9px] text-[14px]  font-NetflixR'>English</p>
          <IoIosArrowDown className=' text-[14px] ml-[8px] mt-[13px]'/>
        </div>
        <p className='mt-[24px] text-[13px] pl-[2px] font-NetflixR'>Netflix India</p>
      </div>
    </footer>
  )
}

export default Footer