import React from 'react'

export const Footer = () => {
  return (
    <div className='flex w-full h-52 bg-slate-800 justify-center '>
        <div className='flex w-1/6 justify-center mt-10'>
            <ul>
                <li className='text-white font-bold'>Get to Know Us</li>
                <li className='text-white mt-2'>About Us</li>
                <li className='text-white'>Contact Us</li>
            </ul>
        </div>
        <div className='flex w-1/6 justify-center mt-10'>
            <ul>
                <li className='text-white font-bold'>Connect with Us</li>
                <li className='text-white mt-2'>Instagram</li>
                <li className='text-white'>Facebook</li>
                <li className='text-white'>Twitter</li>
                <li className='text-white'>Youtube</li>
            </ul>
        </div>
        <div className='flex w-1/6 justify-center mt-10'>
            <ul>
                <li className='text-white font-bold'>Enquiry</li>
                <li className='text-white mt-2'>FAQ</li>
                <li className='text-white'>Help</li>
            </ul>
        </div>
    </div>
  )
}
