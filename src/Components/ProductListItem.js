import React from 'react'

export const ProductListItem = ({productImage}) => {
  return (
    <div className='w-1/6 p-1 cursor-pointer float-left justify-center overflow-hidden'>
        <img className='w-full object-fill h-80 px-1' src={productImage} alt=''/>
        <span className='flex font-semibold pl-1' >HRX by Hrithik Roshan</span>
        <span className='flex pl-1 text-xs' >HRX T-Shirt</span>
        <span className='pl-1 font-semibold' >Rs. 999</span>
        <span className='pl-1 line-through text-xs' >Rs. 499</span>
        <span className='pl-1 text-xs text-red-600' >(50% Off)</span>
        <span className='flex pl-1 text-xs text-orange-600 font-bold pb-3'>Only Few Left !</span>
    </div>
  )
}
