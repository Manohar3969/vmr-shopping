import React from 'react'
import { faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons'
import { HeaderList } from "./HeaderList"
import { HeaderIcons } from "./HeaderIcons"
import { InputField } from './InputField'

export const Header = () => {
  return (
    <div className="w-full h-20 flex">
        <div className='h-full w-1/5 flex items-center justify-center overflow-hidden'>
            <img className="flex w-12 h-12 mr-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Logo_Kemnaker.png/767px-Logo_Kemnaker.png" alt="" />
            <span className='flex text-3xl text-red-500 logoName'>V</span>
            <span className='flex text-3xl text-black mr-4 logoName'>MR</span>
            <span className='flex text-3xl text-red-500 logoName'>S</span>
            <span className='flex text-3xl text-black logoName'>tyles</span>
        </div>
        <div className='h-full w-1/5'>
            <InputField inputStyles="flex justify-center rounded outline-none bg-slate-100 w-full h-10 pl-2 mt-5 pr-2" inputType="text" inputPlaceHolder="Search"/>
        </div>
        <div className='w-2/5 h-full'>
            <ul className='flex items-center justify-center h-full'>
                <HeaderList>Home</HeaderList>
                <HeaderList>Contact</HeaderList>
                <HeaderList>About Us</HeaderList>
                <HeaderList>Contact Us</HeaderList>
            </ul>
        </div>
        <div className='flex w-1/5 h-full justify-end items-center '>
            <HeaderIcons iconName={faShoppingBag}>(2)</HeaderIcons>
            <HeaderIcons iconName={faUser}>Manohar V</HeaderIcons>
        </div>  
    </div>
  )
}
