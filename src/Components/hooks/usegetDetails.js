import { useEffect,useState} from "react";
import { options } from "../../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addDetails } from "../toolkit/movieSlice"

function usegetDetails(id) {
  const dispatch = useDispatch();
  const [detaildata,setdetaildata] = useState(null);

  const fetchdata = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+id+"?language=en-US&page=1",
        options
      );
      const json = await data.json();
      setdetaildata(json)
      dispatch(addDetails(json));
    } catch (error) {
      console.log("Now Playing API",error)
    }
  };

  useEffect(() => {
     fetchdata();
  }, []);
  return {detaildata}
}

export default usegetDetails;
