import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react'
import { Validate } from '../utills/validate'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utills/firbase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { adduser } from '../utills/appslice';

const Login = () => {
  //form sign up sign in change variable catch 
    const[signinform,setsigninform]=useState(true)

    const[errormessage,seterrormessage]=useState(null)
    const navigate=useNavigate()
    const dispatch=useDispatch()

// form sign up sign in change 
    const togglesigninform =()=>{
          setsigninform(!signinform)
    }
// input box refrence 
    const email=useRef(null)
    const password=useRef(null)
    const name=useRef(null)
// form validation 
    const handelbuttonclick=()=>{
          // validate form 
        
      const Message=Validate(email?.current?.value,password?.current?.value);
      seterrormessage(Message);
      if(Message)return;

//firebae signup logic 
      if(!signinform){
        //signup logic 
        createUserWithEmailAndPassword(
           auth,
           email?.current?.value,
           password?.current?.value
           )
             .then((userCredential) => {
               const user = userCredential.user;
                updateProfile(user,{
                 displayName: name?.current?.value,
                 photoURL:"https://lh3.googleusercontent.com/a/ACg8ocKuSelAxEB__Ug4DCoUcsjEZVXS5FAMF_sxCvx55h_qgzM=s260-c-no",
          })
               .then(() => {
                const {uid,email,displayName,photoURL}= auth.currentUser;
                dispatch(
                  adduser({
                    uid:uid,
                    email:email,
                    displayName:displayName,
                    photoURL: photoURL,
                  })
                  );
                  navigate("/Browse")
          })
          .catch((error) => {
            seterrormessage(error.message)
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode+ " "+ errorMessage)
        });

      }
      else{
        signInWithEmailAndPassword(auth,email?.current?.value,password?.current?.value)
        .then((userCredential) => {
          const user = userCredential.user;
           updateProfile(user,{
            displayName: name?.current?.value,
            photoURL:"https://lh3.googleusercontent.com/a/ACg8ocKuSelAxEB__Ug4DCoUcsjEZVXS5FAMF_sxCvx55h_qgzM=s260-c-no",
     })
          .then(() => {
           const {uid,email,displayName,photoURL}= auth.currentUser;
           dispatch(
             adduser({
               uid:uid,
               email:email,
               displayName:displayName,
               photoURL: photoURL,
             })
             );
             navigate("/Browse")
     })
     .catch((error) => {
       seterrormessage(error.message)
     });
          navigate("/Browse")

          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode+""+errorMessage)
          
        });
      }
    }

  return (
    <div >
      <Header/>
      <div  className='absolute'>
      <img alt="logo" src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_medium.jpg"></img>
      </div> 

    <form onSubmit={(e)=>e.preventDefault()}   className='bg-black opacity-110 absolute w-3/12 mx-auto right-0 left-0 my-36 px-6 h-96 text-white font-bold'>
        
        <h1 className='font-bold my-4 text-lg'>{signinform ?"Sign In":"Sign up"}</h1>
        {!signinform &&<input ref={name} type='text'  placeholder='Full Name' className=' bg-gray-500 p-2 m-2 w-full'/>}
        <input
         ref={email}type='text' 
          placeholder='Email address' 
          className=' bg-gray-500 p-2 m-2 w-full'/>

        <input
         ref={password}
          type='password' 
          placeholder='password' 
          className='p-2 m-2 w-full bg-gray-500'/>

        <p className='font-bold text-lg text-red-500'>{errormessage}</p>
        
        <button
         onClick={handelbuttonclick} 
         className='p-2 my-10 m-2  bg-red-500 w-full'>{signinform ?"Sign In":"Sign up"}</button>
        <h3 className="cursor-pointer"
         onClick={togglesigninform}> {signinform ?"New To Netflix Sign up":"Already Registerd Sigin Now"}</h3>
    </form>
    

    </div>
  )
}

export default Login