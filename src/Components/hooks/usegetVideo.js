import {useEffect} from 'react'
import { options } from "../../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {addVideo} from "../toolkit/movieSlice"

const usegetVideo = (id) => {
  const dispatch = useDispatch();

  const fetchdata = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/"+ id +"/videos?language=en-US",options);
    const json = await data.json();
    const filterData = json?.results.filter((video) => video?.type === "Trailer")
    const trailer = filterData.length ? filterData[0] : json.results[0]
    dispatch(addVideo(trailer))
  }

  useEffect(() => {
     fetchdata();
  },[])

}

export default usegetVideo;
