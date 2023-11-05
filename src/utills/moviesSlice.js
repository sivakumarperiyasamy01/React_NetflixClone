import { createSlice } from "@reduxjs/toolkit";

const MovieSlice=createSlice({
    name:"movieslist",
    initialState:{
      addmovies:null,
      addtrailer:null,
    },
    reducers:{
      addNowplayingMovies:(state,action)=>{
       state.addmovies=action.payload
      },
      addMovieTrailerVideos:(state,action)=>{
        state.addtrailer=action.payload
      }
    },
});

export const{addNowplayingMovies,addMovieTrailerVideos}=MovieSlice.actions;
export default MovieSlice.reducer;

