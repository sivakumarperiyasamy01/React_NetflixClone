import React from 'react'
import {getAuth, signOut} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate=useNavigate();
  const user=useSelector(store=>store.user)

  const onclickhandler=()=>{
      
    const auth = getAuth();
    signOut(auth).then(() => {
           navigate("/")
    }).catch((error) => {
      // An error happened.
    });

  }
  
  return (
    <div className='py-2 px-48 bg-gradient-to-br from-black absolute z-20 w-screen  flex justify-between '>
      <img alt="logo" className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"></img>

      {user &&<div className='flex p-4'>
       <img alt="usericon" className="w-12 h-12 "src={user?.photoURL}></img>
      <button onClick={onclickhandler} className='font-bold text-white' >(Sign Out)</button>
      </div>}
     
    </div>
   
       
  )
};

export default Header     