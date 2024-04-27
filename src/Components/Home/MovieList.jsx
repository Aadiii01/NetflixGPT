import React, { useRef, useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const MovieList = ({ title, movies }) => {
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
  return (
    movies && (
      <div className="sm:ml-[60px] ml-[10px] ">
        {isDesktopOrMobile && (
          <div className="flex absolute mt-[4px] right-[50px]">
            <button onClick={scrollLeft}
              className="bg-transparent border-none cursor-pointer inline m-0 p-0 opacity-50">
              <div className="mr-4 rounded-full h-34 p-[8px] bg-gray-300"><FaArrowLeft /></div>
            </button>
            <button onClick={scrollRight}
              className="bg-transparent border-none cursor-pointer inline mr-[11px] p-0">
              <div className="rounded-full h-34 p-[8px] bg-gray-300"><FaArrowRight /></div>
            </button>
          </div>
        )}
        <h1 className="text-white ml-[13px] font-NetflixM text-[24px]">{title}</h1>
        <div className="flex gap-[8px] sm:gap-3 sm:max-w-[1400px] sm:overflow-x-hidden overflow-x-scroll ml-[12px] mr-[10px] sm:mr-[66px]" ref={carouselRef}>
          {movies.map((movie) => (<Link to={"/movie/"+movie.id} key={movie.id}>
            <MovieCard poster={movie?.poster_path} title={movie.title} rd={movie.release_date} />
          </Link>))}
        </div>
      </div>
    )
  );
};

export default MovieList;
