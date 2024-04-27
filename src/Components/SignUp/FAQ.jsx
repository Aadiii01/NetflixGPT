import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export const Accordian = ({faq}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      {faq.map((e, index) => (
        <div
          key={index}
          className="cursor-pointer rounded-md border border-[#465A7E66] shadow-lg transition-all duration-250 bg-[#2d2d2d]"
        >
          <button
            type="button"
            className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
            onClick={() => toggleAccordion(index)}
          >
            <span className="flex font-NetflixR text-[1rem] sm:text-[1.5rem] font-medium text-white">
              {e.question}
            </span>
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 text-white" />
            ) : (
              <ChevronDown className="h-5 w-5 text-white" />
            )}
          </button>
          
          {openIndex === index && (
            <>
            <div className="w-full h-[0.2px] bg-gray-400 mt-[-10px]"></div>
            <div className="px-4 pb-5 pt-4 text-left sm:px-6 sm:pb-6">
              <p className="text-white text-[1rem] sm:text-[1.5rem] sm:leading-8 font-NetflixL">{e.answer}</p>
            </div>
            </>
          )}
        </div>
      ))}
    </>
  );
};

const FAQ = ({bg,faq,h1}) => {

  return (
    <div className={`relative flex justify-center text-white text-center box-border min-h-auto ${bg} py-14 px-0 sm:min-h-auto 
    sm:py-[4.5rem]`}>
      <div className="m-auto max-w-[calc(100%-3rem)] sm:max-w-[1170px] flex items-center flex-col text-center">
        <div className="basic-[50%] p-0 z-10 sm:max-w-[1170px]">
          <h2 className="adm:text-[2.35rem]  text-[1.75rem] m-0 font-NetflixB text-white sm:text-[3rem]">
          {h1}
          </h2>
          <div className="mx-auto mt-8  sm:w-[1170px] space-y-4 md:mt-16 ">
            <Accordian faq={faq}/>
          </div>
        </div>
      </div>
      <div className="w-full h-2 absolute bottom-[-0.1rem] bg-[#232323]"></div>
    </div>
  );
};
export default FAQ;
