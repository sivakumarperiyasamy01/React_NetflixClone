import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "movieslist",
  initialState: {
    addmovies: null,
    addtrailer: null,
    popularmovies: null,
    movienames: null,
    tmdbmovie: null,
  },
  reducers: {
    addNowplayingMovies: (state, action) => {
      state.addmovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularmovies = action.payload;
    },
    addMovieTrailerVideos: (state, action) => {
      state.addtrailer = action.payload;
    },
    addTMDBMovies: (state, action) => {
      const { movienames, tmdbmovie } = action.payload;
      state.movienames = movienames;
      state.tmdbmovie = tmdbmovie;
    },
  },
});

export const {
  addNowplayingMovies,
  addMovieTrailerVideos,
  addPopularMovies,
  addTMDBMovies,
} = MovieSlice.actions;
export default MovieSlice.reducer;
