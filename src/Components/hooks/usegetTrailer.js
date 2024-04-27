import {useEffect} from 'react'
import { options } from "../../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {addTrailerVideo} from "../toolkit/movieSlice"

const usegetTrailer = (movieId) => {
  const dispatch = useDispatch();

  const fetchdata = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US",options);
    const json = await data.json();
    const filterData = json?.results.filter((video) => video?.type === "Trailer")
    const trailer = filterData.length ? filterData[0] : json.results[0]
    dispatch(addTrailerVideo(trailer))
  }

  useEffect(() => {
   fetchdata();
  },[])

}

export default usegetTrailer;
