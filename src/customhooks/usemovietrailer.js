import { useEffect } from "react";
import { API_OPTIONS } from "../utills/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailerVideos } from "../utills/moviesSlice";

const useMovietrailervideo = ({ videoid }) => {
  const dispatch = useDispatch();

  const GetMoviestrailer = async () => {
    const moviedata = await fetch(
      "https://api.themoviedb.org/3/movie/507089/videos?api_key=0308295fa6ca2207e7d50d0fb82fc61d",
      { API_OPTIONS }
    );
    const json = await moviedata.json();

    const filtermoviedata = json.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailererror = filtermoviedata.length
      ? filtermoviedata[0]
      : json.results[0];

    // dispatch action
    dispatch(addMovieTrailerVideos(filtermoviedata));
  };
  useEffect(() => {
    GetMoviestrailer();
  }, []);
};

export default useMovietrailervideo;
