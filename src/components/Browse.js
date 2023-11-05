import React, { useEffect } from 'react'
import Header from './Header'
import {API_OPTIONS } from '../utills/constants'
import Usenowplayingmovies from '../customhooks/usenowplayingmovies'
import Maincontainer from './Maincontainer'
import Secondarycontainer from './Secondarycontainer'


const Browse = () => {
  //{fecting data and puuting in to store }
  Usenowplayingmovies();
 
  return (
    <div>
       <Header/>
       <Maincontainer/>
       <Secondarycontainer/>
    </div>
  )
}

export default Browse