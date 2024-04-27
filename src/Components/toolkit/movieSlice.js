import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popular: null,
    trending: null,
    upcoming: null,
    trailerVideo: null,
    credits: null,
    crew: null,
    movieid:null,
    video:null,
    actor:null,
    director:null,
    details:null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopular: (state, action) => {
      state.popular = action.payload;
    },
    addTrending: (state, action) => {
      state.trending = action.payload;
    },
    addUpcoming: (state, action) => {
      state.upcoming = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addCredits: (state, action) => {
      state.credits = action.payload;
    },
    addCrew: (state, action) => {
      state.crew = action.payload;
    },
    addMovieID: (state,action) => {
      state.movieid = action.payload
    },
    addVideo: (state,action) => {
      state.video = action.payload
    },
    addActor: (state,action) => {
      state.actor = action.payload
    },
    addDirector: (state,action) => {
      state.director = action.payload
    },
    addDetails: (state,action) => {
      state.details = action.payload
    }
  },
});

export const {
  addNowPlayingMovies,
  addPopular,
  addTrending,
  addUpcoming,
  addTrailerVideo,
  addCredits,
  addCrew,
  addMovieID,
  addVideo,
  addActor,
  addDirector,
  addDetails
} = movieSlice.actions;
export default movieSlice.reducer;
