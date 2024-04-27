import React, { useRef, useState, useEffect } from "react";
import { PosterURl } from "../../Utils/constants";
import usergetCast from "../hooks/usergetCast";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export const Cardss = ({ data }) => {
  return (
    <div className="">
      <div className=" sm:h-[342px] sm:w-64 w-[125px] h-[187.5px] rounded-[10px] bg-red-300 overflow-hidden">
        <img
          src={PosterURl + data}
          alt=""
          className="h-full w-full rounded-[10px] object-cover"
        />
      </div>
    </div>
  );
};

function Cast({ idd }) {
  const [isDesktopOrMobile, setIsDesktopOrMobile] = useState(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopOrMobile(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -300, // Adjust the scroll distance as needed
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 300, // Adjust the scroll distance as needed
      behavior: "smooth",
    });
  };
  const { dd } = usergetCast(idd);
  return dd && (
    <div className="sm:ml-[80px] ml-[20px]">
      {isDesktopOrMobile && (
        <div className="flex absolute mt-[4px] right-[50px]">
          <button
            onClick={scrollLeft}
            className="bg-transparent border-none cursor-pointer inline m-0 p-0 opacity-50"
          >
            <div className="mr-4 rounded-full h-34 p-[8px] bg-gray-300">
              <FaArrowLeft />
            </div>
          </button>
          <button
            onClick={scrollRight}
            className="bg-transparent border-none cursor-pointer inline mr-[11px] p-0"
          >
            <div className="rounded-full h-34 p-[8px] bg-gray-300">
              <FaArrowRight />
            </div>
          </button>
        </div>
      )}
      <div className="mb-[20px]">
        <h1 className="font-NetflixB text-white sm:text-[24px] text-[12px]">
          Top Cast
        </h1>
      </div>
      <div
        className="flex items-center gap-[8px] sm:gap-3 justify-start sm:max-w-[1400px] w-full sm:overflow-x-hidden overflow-x-scroll"
        ref={carouselRef}
      >
        {dd?.cast.slice(0, 8).map((p) => (
          <Cardss key={p?.id} data={p?.profile_path} />
        ))}
      </div>
    </div>
  );
}

export default Cast;
