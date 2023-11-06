import React from 'react'
import { POSTER_URL } from '../utills/constants'

const Moviecards = ({ moviespath}) => {
  
  return (
    <div className='w-40 pl-3'>
      <img alt="nowplayingmovie"src={POSTER_URL+ moviespath}></img>
    </div>
  )
}

export default Moviecards;