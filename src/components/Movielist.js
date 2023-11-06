import React from 'react'
import Moviecards from './Moviecards'

const Movielist = ({title,moviedata}) => {
  // if store not updated with movie data dont render page
   if(!moviedata)return;
  return (
    <div className='pl-4 bg-black'>
      <div>
      <h1 className='text-2xl py-2 text-white' >{title}</h1>
      </div>
      <div className='flex 	overflow-x-scroll bg-black'>
      <div className='flex '>
        {moviedata.map((movies)=><Moviecards key={movies.id} moviespath={movies.poster_path}/>)}
        
      </div>
      </div>
      

    </div>
   
  )
}

export default Movielist