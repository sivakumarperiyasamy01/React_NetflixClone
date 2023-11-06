import { createSlice } from "@reduxjs/toolkit";

const MovieSlice=createSlice({
    name:"movieslist",
    initialState:{
      addmovies:null,
      addtrailer:null,
      popularmovies:null,
    },
    reducers:{
      addNowplayingMovies:(state,action)=>{
       state.addmovies=action.payload
      },
      addPopularMovies:(state,action)=>{
       state.popularmovies=action.payload
      },
      addMovieTrailerVideos:(state,action)=>{
        state.addtrailer=action.payload
      }
    },
});

export const{addNowplayingMovies,addMovieTrailerVideos,addPopularMovies}=MovieSlice.actions;
export default MovieSlice.reducer;

