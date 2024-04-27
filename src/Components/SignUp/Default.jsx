import React from "react";
import Header from "./Header.jsx";
import SignUp from "./SignUp.jsx";
import Sections from "./Sections.jsx";
import Sections2 from "./Sections2.jsx";
import Section4 from "./Section4.jsx";
import FAQ from "./FAQ.jsx"
import Footer from "../Footer.jsx";
import { faq } from "../../Utils/faqdata"
import "./image.css"

const h1 = "Enjoy on your TV"
const h2 = "Watch everywhere"
const p1 = "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
const p2 = "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
const img1 = "tv.png"
const img2 = "device-pile-in.png"
const video1 = "video-tv-in-0819.mp4"
const video2 = "video-devices-in.mp4"


const Default = () => {
  return (
    <>
      <div className="overflow-visible h-0 z-10 relative">
        <Header />
      </div>
      <div>
        <div className="relative flex justify-center text-white text-center box-border min-h-[30rem] sm:min-h-[43.75rem] sm:pt-[12.875rem] sm:pb-[4rem] pt-[7.5rem] px-0 pb-[2rem]">
          <div className="h-full left-0 top-0 w-full absolute">
            <div className="w-full h-full relative overflow-hidden">
              <img className="h-full w-full object-cover" src="IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
              <div style={{backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)'}} className="IMGclass"></div>
            </div>
          </div>
          <div className="m-auto max-w-[435.2px] sm:max-w-[860px] flex items-center flex-col text-center">
            <div className="basic-[50%] z-10 w-full">
              <h1 className="m-0 font-NetflixB text-[2rem] font-bold sm:text-[3rem]">Unlimited movies, TV shows and more</h1>
              <p className="mt-[1rem] text-[1rem] font-NetflixL sm:text-[1.5rem]">Watch anywhere. Cancel anytime.</p>
              <div className="mt-[1.5rem]">
                <SignUp/>
              </div>
            </div>
          </div>
          <div className="w-full h-2 absolute bottom-[-0.1rem] bg-[#232323]"></div>
        </div>
        <Sections heading={h1} subheading={p1} img={img1} video={video1} cla="max-w-[73%] max-h-[54%] top-[21%] left-[13%]"/>
        <Sections2/>
        <Sections heading={h2} subheading={p2} img={img2} video={video2} cla="max-w-[63%] max-h-[47%] top-[8%] left-[19%]"/>
        <Section4/>
        <FAQ bg="bg-black" faq={faq} h1="Frequently Asked Questions"/>
      </div>
      <Footer classes="bg-black text-[#ffffffb3] sm:pl-[100px] min-w-[190px] pb-[40px] relative w-full"/>
    </>
  );
};

export default Default;
