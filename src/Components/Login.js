import "../index.css";

import React from 'react'
import {InputField} from  './InputField';
import {InputButton} from  './InputButton';

export const Login = () => {
  return (
  <div className="absolute w-full h-full flex items-center justify-center bg-slate-900" >
    <div className="relative bg-blue-500 w-2/5 h-4/5 rounded-s-2xl overflow-hidden">
      <img className="object-cover w-full h-full" src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
    <div className="relative w-2/5 h-4/5 items-center justify-center rounded-e-2xl bg-white">
      <label className="flex justify-center mt-36 mb-10 font-bold text-2xl">Sign Up</label>
      <InputField inputStyles="flex justify-center w-2/5 h-10 mt-5 px-2 rounded outline-none bg-slate-100" inputType="email" inputPlaceHolder="Enter Email ID"/>
      <InputField inputStyles="flex justify-center w-2/5 h-10 mt-5 px-2 rounded outline-none bg-slate-100" inputType="text" inputPlaceHolder="Enter Mobile Number"/>
      <InputField inputStyles="flex justify-center w-2/5 h-10 mt-5 px-2 rounded outline-none bg-slate-100" inputType="password" inputPlaceHolder="Enter Password"/>
      <InputButton buttonStyles="flex my-10 bg-green-950 w-1/5 h-10 items-center justify-center rounded-lg text-white font-semibold" buttonType="Submit">Register</InputButton>
    </div>
    <div className="relative w-2/5 h-4/5 items-center justify-center rounded-e-2xl bg-white hidden">
      <label className="flex justify-center mt-36 font-bold text-2xl text-green-950">Sign In</label>
      <InputField inputStyles="flex justify-center w-2/5 h-10 mt-5 px-2 rounded outline-none bg-slate-100" inputType="email" inputPlaceHolder="Enter Email ID"/>
      <InputField inputStyles="flex justify-center w-2/5 h-10 mt-5 px-2 rounded outline-none bg-slate-100" inputType="password" inputPlaceHolder="Enter Password"/>
      <InputButton buttonStyles="flex my-10 bg-green-950 w-1/5 h-10 items-center justify-center rounded-lg text-white font-semibold" buttonType="Submit">Login</InputButton>
    </div>
  </div> 
  );
}


