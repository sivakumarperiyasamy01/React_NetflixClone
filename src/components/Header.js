import React from 'react'
import {getAuth, signOut} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utills/firbase';
import { adduser,removeuser } from '../utills/appslice';
import { useDispatch } from 'react-redux';
import { LOGO } from '../utills/constants';
import { ToggleGptSearchview } from '../utills/GptsearchSlice';
import { changelanguage} from "../utills/langugageSlice";
import { LANG_CHANGE } from '../utills/constants';

const Header = () => {

  const navigate=useNavigate();
  const user=useSelector(store=>store.user)
  const dispatch=useDispatch();

  const GptSearchhandler=()=>{
    dispatch(ToggleGptSearchview())
  };

  const changehandeler=(e)=>{
    dispatch(changelanguage(e.target.value))
  }

  const onclickhandler=()=>{
      
    const auth = getAuth();
    signOut(auth).then(() => {
           navigate("/")
    }).catch((error) => {
      // An error happened.
    });

  }

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
     if (user) {
       // User is signed in
       const {uid,email,displayName,photoURL} = user;
       dispatch(adduser(
         {uid:uid,
         email:email,
         displayName:displayName,
         photoURL: photoURL,
       })
       );
       navigate("/Browse")
   
     } else {
       // User is signed out
       dispatch(removeuser())
       navigate("/")
     }
     return()=>unsubscribe()
   });},[])
  
  return (
    <div className='py-2 px-40 bg-gradient-to-br from-black absolute z-20 w-screen  flex justify-between '>
      <img alt="logo" className="w-44" src={LOGO}></img>

      {user && <div className='flex p-4'>
      <select className='bg-black text-white m-2' onChange={changehandeler}>
        {LANG_CHANGE.map((lang)=><option key={lang.identifier}value={lang.identifier}>{lang.name}</option>)}
      </select>
      <button onClick={GptSearchhandler} className='bg-purple-500 px-4 m-2'>Search</button>
      <img alt="usericon" className="w-12 h-12 "src={user?.photoURL}></img>
      <button onClick={onclickhandler} className='font-bold text-white' >(Sign Out)</button>
      
      </div>}
     
    </div>
   
       
  )
};

export default Header     