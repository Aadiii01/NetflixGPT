import { useEffect } from "react";
import { options } from "../../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcoming } from "../toolkit/movieSlice"

function usegetUpcoming() {

  const dispatch = useDispatch();
  const fetchdata = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    );
    const json = await data.json();

    dispatch(addUpcoming(json?.results));
  };

  useEffect(() => {
    fetchdata();
  }, []);

}

export default usegetUpcoming;
