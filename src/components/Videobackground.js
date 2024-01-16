import { useSelector } from "react-redux";
import useMovietrailervideo from "../customhooks/usemovietrailer";

const Videobackground = ({ videoid }) => {
  const trailermoviedata = useSelector((store) => store.movieslist?.addtrailer);
  useMovietrailervideo(videoid);

  if (trailermoviedata === null) return;
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailermoviedata[0]?.key +
          "?autoplay=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Videobackground;
