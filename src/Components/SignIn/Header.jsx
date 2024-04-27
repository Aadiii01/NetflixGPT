import React from "react";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header className="block">
      <header className="pt-[1.1rem] pb-[1.5rem] pl-6 pr-6 sm:ml-32 sm:max-w-[calc(83.33333333333334%-6rem)] sm:pr-12 sm:pl-12">
        <div className="w-full border-box">
          <div className="inline-flex flex-wrap items-center ml-[-0.5rem] h-12 w-[calc(100%+0.5rem)] sm:w-[1186px] sm:mt-[-0.5rem] justify-between sm:ml-[-1rem]">
            <div className="inline-flex flex-wrap mt-2 ml-2 sm:h-10 sm:w-[379.33px] sm:grow-0 sm:shrink-0 sm:basis-[calc(33.333333333333336%-1rem)] sm:ml-4 w-auto grow-0 shrink basic-auto">
              <Link to="/" className="cursor-pointer">
                <img className="block sm:w-[10rem] sm:h-[3.2rem] w-[5.6rem] h-[1.5rem]" src="netflix-logo-png-2562.png"/>
              </Link>  
            </div>
            <div className="inline-flex flex-wrap justify-end sm:basis-[calc(66.66666666666667%-1rem)]">
              <div className=""></div>
            </div>
          </div>     
        </div>
      </header>
    </header>
  );
};

export default Header;
