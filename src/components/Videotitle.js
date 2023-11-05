const Videotitle=({title,view})=>{
  return(
    <div className="pt-[25%] py-50 px-10 absolute w-screen aspect-video  bg-gradient-to-r from-black ">
      <h1 className="text-3xl font-bold  text-white" >{title}</h1>
      <p className="w-4/12 py-4  text-white">{view}</p>
      <div className="py-4">
        <button className="bg-gray-600 rounded-lg text-justify hover:opacity-75 text-white py-2 mx-2 font-bold bg-opacity-30 px-6">Play</button>
        <button className="bg-gray-600 rounded-lg text-justify hover:opacity-75  text-white py-2  font-bold bg-opacity-30 px-6">Moreinfo</button>
      </div>
    </div>
  )

}

export default Videotitle