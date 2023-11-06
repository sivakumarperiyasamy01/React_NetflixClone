import React, { useEffect } from 'react'
import Header from './Header'
import {API_OPTIONS } from '../utills/constants'
import Usenowplayingmovies from '../customhooks/usenowplayingmovies'
import Maincontainer from './Maincontainer'
import Secondarycontainer from './Secondarycontainer'
import Usepopularmovies from '../customhooks/usepopularmovies'


const Browse = () => {
  //{fecting data and puuting in to store }
  Usenowplayingmovies();
  Usepopularmovies();
 
  return (
    <div>
       <Header/>
       <Maincontainer/>
       <Secondarycontainer/>
    </div>
  )
}

export default Browse