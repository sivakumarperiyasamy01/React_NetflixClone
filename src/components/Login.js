import React from 'react'
import Header from './Header'
import { useState } from 'react'
 

const Login = () => {

    const[signinform,setsigninform]=useState(true)

    const togglesigninform =()=>{
          setsigninform(!signinform)
    }
  return (
    <div >
      <Header/>
      <div  className='absolute'>
      <img alt="logo" src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_medium.jpg"></img>
      </div> 

    <form className='bg-black opacity-110 absolute w-3/12 mx-auto right-0 left-0 my-36 px-6 h-96 text-white font-bold'>
        
        <h1 className='font-bold my-4 text-lg'>{signinform ?"Sign In":"Sign up"}</h1>
        {!signinform &&<input type='text'  placeholder='Full Name' className=' bg-gray-500 p-2 m-2 w-full'/>}
        <input type='text'  placeholder='Email address' className=' bg-gray-500 p-2 m-2 w-full'/>
        <input type='password' placeholder='password' className='p-2 m-2 w-full bg-gray-500'/>
        <button className='p-2 my-10 m-2  bg-red-500 w-full'>{signinform ?"Sign In":"Sign up"}</button>
        <h3 className="cursor-pointer" onClick={togglesigninform}> {signinform ?"New To Netflix Sign up":"Already Registerd Sigin Now"}</h3>
    </form>
    

    </div>
  )
}

export default Login