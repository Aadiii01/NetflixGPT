import { useEffect } from "react";
import { options } from "../../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrending } from "../toolkit/movieSlice"


function usegetTrending() {
  const dispatch = useDispatch();
  const fetchdata = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(addTrending(json?.results));
  };

  useEffect(() => {
    fetchdata();
  }, []);

}

export default usegetTrending;
