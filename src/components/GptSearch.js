import { useDispatch, useSelector } from "react-redux";
import lang from "../utills/language";
import { useRef } from "react";
import openai from "../utills/openai";
import { addTMDBMovies } from "../utills/moviesSlice";
import GPTMoviesuggestions from "./Gptmoviesuggestions";

const Gptsearch=()=>{
  const dispatch=useDispatch(null)

  const langkey=useSelector(store=>store.lang?.langugage)
  
  const Searchtext=useRef(null)
    // calling tmdb api to fetch movie data 
  const TMDBdata=async(movie)=>{
    const Moviedata= await fetch(
      "https://api.themoviedb.org/3/search/movie?query="+movie+"&api_key=0308295fa6ca2207e7d50d0fb82fc61d",
    );
    
    const json= await Moviedata.json()
    return json 

  }

  const gptquery="acts as a movie recommendation system and suggest some movies for the query:"+Searchtext?.current?.value + "only give me name of 5 movies , comma separated like the example result given ahead.example result:gadar,sholay,don,golmaal,koimilgaya"

  const Searchclickhandeler=async()=>{
    console.log(Searchtext.current.value)
    // make gpt api calls 
    const gptresults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptquery}],
      model: 'gpt-3.5-turbo',
    });
    // convert the data in to array 
    const resultsdata=(gptresults.choices?.[0]?.message?.content.split(","))
    console.log(resultsdata);
    // pass the converted data to function 
    const Movieresults=resultsdata.map((movie)=>TMDBdata(movie))
    // tmdb api return a promisee and solve all promises by promise .all
    const tmdbresults=await Promise.all(Movieresults);
    console.log(tmdbresults)
    dispatch(addTMDBMovies({movienames:resultsdata,tmdbmovie:tmdbresults}))

  }

 return (
  <div className="pt-40 ">
    <form className=" flex justify-center  " onSubmit={(e)=>e.preventDefault()} >
      <input type="text" ref={Searchtext}
      placeholder={lang[langkey].Gptsearchplaceholder} 
      className="py-1 px-36 bg-gray-400 text-white placeholder-white rounded-l-full">
      </input>
      <button
        onClick={Searchclickhandeler}className="p-2 px-10 rounded-r-full text-white bg-black">{lang[langkey].search} 
       </button>
    </form>
    <div className="w-screen h-500px">
    <GPTMoviesuggestions/>
    </div>
  </div>
 )
}

export default Gptsearch;