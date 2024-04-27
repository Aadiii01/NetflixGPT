import { useEffect } from "react";
import { options } from "../../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopular } from "../toolkit/movieSlice"

function usegetPopular() {

  const dispatch = useDispatch();

  const fetchdata = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(addPopular(json?.results));
  };

  useEffect(() => {
 fetchdata();
  }, []);

}

export default usegetPopular;
