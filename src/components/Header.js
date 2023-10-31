import React from 'react'
import {getAuth, signOut} from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate=useNavigate();

  const onclickhandler=()=>{
      
    const auth = getAuth();
    signOut(auth).then(() => {
           navigate("/")
    }).catch((error) => {
      // An error happened.
    });

  }

  return (
    <div className='py-2 px-48 bg-black absolute z-40 max-w-lg flex justify-between '>
      <img className='w-44' alt="logo "src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"></img>

      <div className='flex '>
      <img src="https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"></img>
      <button onClick={onclickhandler} className='bg-red-500 w-10'>(Sign Out)</button>
      </div>
     
    </div>
   
       
  )
};

export default Header     