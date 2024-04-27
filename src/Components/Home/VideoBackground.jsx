import React from "react";
import usegetTrailer from "../hooks/usegetTrailer";
import { useSelector } from "react-redux";
import "./section.css"

const VideoBackground = ({movieId}) => {
  usegetTrailer(movieId);
  const trailerVideo = useSelector(store => store.movies?.trailerVideo)
  const getVideoKey = () => {
    if (trailerVideo && trailerVideo.key) {
      return trailerVideo.key;
    } else {
      return 't06RUxPbp_c';
    }
  };
  const key = getVideoKey();

  return (
    <div className="m-0 relative flex flex-1 basis-auto flex-row h-0 pb-[55%] z-10">
      <div className="sm:w-screen sm:aspect-video sm:mr-[-90px] sm:mt-[-90px] relative mr-[0px] mt-[px] ml-[-25px]">
      <iframe
       className="sm:w-screen sm:aspect-video w-screen aspect-video"
       src={`https://www.youtube.com/embed/${key}?controls=0&mute=1&autoplay=1&loop=1&playlist=${key}`}
       allowFullScreen>
      </iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
