import { useSelector } from "react-redux";
import Movielist from "./Movielist";


const GPTMoviesuggestions=()=>{
   const{movienames}=useSelector((store)=>store?.movieslist)
  if(!movienames)return null;


  return(
    <div className="bg-black p-4 m-4 ">
      <Movielist title={movienames} />
    </div>

  )
}

export default GPTMoviesuggestions;