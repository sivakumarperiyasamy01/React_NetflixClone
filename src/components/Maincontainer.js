
import { useSelector } from "react-redux";
import  Videobackground from "../components/Videobackground"
import Videotitle from "./Videotitle";

const Maincontainer=()=>{
  const moviesdata=useSelector((store)=>store.movieslist?.addmovies);
  if(!moviesdata)return;

  const{original_title,overview,id}=moviesdata[0]

  return(
    <div>
      <Videotitle title={original_title} view={overview}/>
      <Videobackground videoid={id}/>
    </div>
  )
  
}

export default Maincontainer;