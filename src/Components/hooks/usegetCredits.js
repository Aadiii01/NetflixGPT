import {useEffect} from 'react'
import { options } from "../../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {addCredits} from "../toolkit/movieSlice"
import {addCrew} from "../toolkit/movieSlice"

const usegetCredits = (movieId) => {
  const dispatch = useDispatch();
  
  const fetchdata = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/"+ movieId +"/credits?language=en-US",options);
    const json = await data.json();
    const filteractor = json?.cast.slice(0, 2).map(actor => actor.name);
    const actorNames = filteractor ? filteractor.join(", ") : '';
    const filtercrew = json?.crew.slice(0,1).map(dir => dir?.name);
    dispatch(addCredits(actorNames))
    dispatch(addCrew(filtercrew))

  }

  useEffect(() => {
     fetchdata();
  },[])

}

export default usegetCredits;
