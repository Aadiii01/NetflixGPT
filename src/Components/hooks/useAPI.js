import { useEffect} from "react";
import { options } from "../../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../toolkit/movieSlice"

function useAPI() {
  const dispatch = useDispatch();

  const fetchdata = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        options
      );
      const json = await data.json();
      dispatch(addNowPlayingMovies(json?.results));
    } catch (error) {
      console.log("Now Playing API",error)
    }
  };

  useEffect(() => {
   fetchdata();
  }, []);

}

export default useAPI;
