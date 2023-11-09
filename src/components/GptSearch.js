import { useSelector } from "react-redux";
import lang from "../utills/language";

const Gptsearch=()=>{

  const langkey=useSelector(store=>store.lang?.langugage)
  

 return (
  <div className="pt-40 ">
    <form className=" flex justify-center  ">
      <input type="text" 
      placeholder={lang[langkey].Gptsearchplaceholder} 
      className="py-1 px-36 bg-gray-400 text-white placeholder-white rounded-l-full"></input>
      <button
       className="p-2 px-10 rounded-r-full text-white bg-black">{lang[langkey].search} </button>
    </form>
  </div>
 )
}

export default Gptsearch;