import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utills/firbase';
import { useDispatch } from 'react-redux';
import { adduser,removeuser } from '../utills/appslice';


const Body = () => {
  const dispatch=useDispatch();

const approuter=createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/Browse",
    element:<Browse/>
  }
]
)

useEffect(()=>{
 onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    const {uid,email,displayname} = user;
    dispatch(adduser({uid:uid,email:email,displayname:displayname}))
    
  
  } else {
    // User is signed out
    dispatch(removeuser());
  }
});},[])
 
  return (
    <div>
      <RouterProvider router={approuter}/>
    </div>
  )
}

export default Body