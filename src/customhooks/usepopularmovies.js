import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utills/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utills/moviesSlice";

const Usepopularmovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=0308295fa6ca2207e7d50d0fb82fc61d",
      { API_OPTIONS }
    );
    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default Usepopularmovies;
