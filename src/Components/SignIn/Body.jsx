import React from "react";
import Login from "./LogIn"
import Header from "./Header";
import Footer from "../Footer.jsx"

const Body = () => {
  return (
    <div className="flex bg-black flex-col min-h-[100vh]  overflow-hidden relative z-0">
      <div className="hidden sm:block opacity-50 pointer-events-none sm:absolute sm:h-full sm:min-h-[100vh] sm:overflow-hidden sm:bg-cover sm:w-full sm:z-[-1] ">
        <img className="sm:max-w-[150%]" src="IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
      </div>
      <Header/>
      <div className="">
        <Login/>
      </div>
      <div className="w-full bg-[#ffffff] h-[2px] mt-[90px] mb-[-100px] sm:mb-[-80px]"></div>
      <Footer classes="bg-[#000000b3] text-[#ffffffb3] mt-[80px] min-w-[190px] pb-[20px] relative w-full"/>
    </div>
  );
};

export default Body;
 