import {useEffect,useState} from 'react'
import { options } from "../../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {addActor} from "../toolkit/movieSlice"
import {addDirector} from "../toolkit/movieSlice"

const usergetCast = (id) => {
  const dispatch = useDispatch();
  const [cast,setCast] = useState(null);
  const [dir,setdir] = useState(null);
  const[dd,setdd] = useState(null);

  const fetchdata = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/"+ id +"/credits?language=en-US",options);
    const json = await data.json();
    setdd(json)
    const filteractor = json?.cast.slice(0, 2).map(actor => actor.name);
    const actorNames = filteractor ? filteractor.join(", ") : '';
    const filtercrew = json?.crew.slice(0,1).map(dir => dir?.name);
    setCast(actorNames)
    setdir(filtercrew)
    dispatch(addActor(actorNames))
    dispatch(addDirector(filtercrew))

  }

  useEffect(() => {
   fetchdata();
  },[])
  return {cast,dir,dd}
}

export default usergetCast;
