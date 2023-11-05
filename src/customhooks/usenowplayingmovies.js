import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utills/constants";
import { useEffect } from "react";
import { addNowplayingMovies } from "../utills/moviesSlice";

const Usenowplayingmovies=()=>{


  //{fecting data and puuting in to store }
   // dispatch action 
    const dispatch=useDispatch();

   // fecth the api dataand diaptch an action 
   const getNowPlayingMovies=async()=>{
     const data=await fetch(
       'https://api.themoviedb.org/3/movie/now_playing?api_key=0308295fa6ca2207e7d50d0fb82fc61d',
       {API_OPTIONS})
     const json=await data.json();
  
     dispatch(addNowplayingMovies(json.results))
   
   };
 // call the api using useeffecthook
   useEffect(()=>{
     getNowPlayingMovies();
   },[])
 
  //{above till fecting data and puuting in to store }

};

export default Usenowplayingmovies;

