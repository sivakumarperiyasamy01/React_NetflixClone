import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { Validate } from "../utills/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utills/firbase";
import { useDispatch } from "react-redux";
import { adduser } from "../utills/appslice";
import { BG_IMGAE } from "../utills/constants";
import { PHOTO_URL } from "../utills/constants";

const Login = () => {
  const [signinform, setsigninform] = useState(true);

  const [errormessage, seterrormessage] = useState(null);
  const dispatch = useDispatch();

  const togglesigninform = () => {
    setsigninform(!signinform);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handelbuttonclick = () => {
    const Message = Validate(email?.current?.value, password?.current?.value);
    seterrormessage(Message);
    if (Message) return;

    if (!signinform) {
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value,
            photoURL: PHOTO_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                adduser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              seterrormessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value,
            photoURL: PHOTO_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                adduser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              seterrormessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + "" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img alt="Bgimage" src={BG_IMGAE}></img>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg"
      >
        <h1 className="font-bold my-4 text-3xl ">
          {signinform ? "Sign In" : "Sign up"}
        </h1>

        {!signinform && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="  bg-gray-700 p-2 m-2 w-full"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className=" bg-gray-700 p-2 m-2 w-full"
        />

        <input
          ref={password}
          type="password"
          placeholder="password"
          className="bg-gray-700 p-2 m-2 w-full"
        />

        <p className="font-bold text-lg text-red-500">{errormessage}</p>

        <button
          onClick={handelbuttonclick}
          className="p-2 my-5 m-2  bg-red-500 w-full rounded-lg"
        >
          {signinform ? "Sign In" : "Sign up"}
        </button>

        <h3 className="cursor-pointer py-2" onClick={togglesigninform}>
          {" "}
          {signinform
            ? "New To Netflix Sign up"
            : "Already Registerd Sigin Now"}
        </h3>
      </form>
    </div>
  );
};

export default Login;
