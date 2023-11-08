import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const Secondarycontainer=()=>{
  const Movieslistdata=useSelector(store=>store.movieslist)
  return(
    <div className="bg-black">
      <div  className="-mt-10 z-30 relative bg-transparent ">
        <Movielist title={"NowPlaying"} moviedata={Movieslistdata?.addmovies}/>
        <Movielist title={"Popular Movies"} moviedata={Movieslistdata?.popularmovies}/>
        <Movielist title={"Horror Movies"} moviedata={Movieslistdata?.addmovies}/>
        <Movielist title={"Documentry"} moviedata={Movieslistdata?.addmovies}/>
        <Movielist title={"Action Movies"} moviedata={Movieslistdata?.addmovies}/>
      </div>
  
    </div>
  )

}

export default Secondarycontainer;