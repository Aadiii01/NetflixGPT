import React,{useRef} from 'react'
import lang from "../../Utils/languageconst"
import { useDispatch, useSelector } from "react-redux";
import openai from "../../Utils/openai"
import { options } from '../../Utils/constants';
import { addGptMovieResult } from "../toolkit/gptSlice"

function GptSearchBar() {
  const dispatch = useDispatch();
  const langkey = useSelector(store => store.config.lang);
  const searchText = useRef(null)

  const searchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie +"&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearch = async () => {
    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " + searchText.current.value +
    ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}))
  }

  return (
    <div className="flex items-center space-x-2 flex-col sm:flex-row">
      <input className="flex h-10 ssmm:w-[400px] smm:w-[370px] ssm:w-[340px] sm:w-[800px] font-NetflixL rounded-md border border-[#696969] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black/30 bg-[#465A7E66]" type="text"
      placeholder={lang[langkey].gptplaceholder} ref={searchText}  />
      <button type="button" className="rounded-md bg-[#e50914] hover:bg-[#e50914a4] w-[160px] px-3 py-2 font-NetflixB text-white border-[1px] border-solid border-[#696969] shadow-sm mt-[10px] sm:mt-[0px] " onClick={handleGptSearch}>{lang[langkey].search}
      </button>
    </div>
  )
}

export default GptSearchBar