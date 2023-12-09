import React from 'react'

export const SmallBanners = ({imagePath}) => {
  return (
    <div className='w-1/6 py-1 float-left cursor-pointer'>
        <img src={imagePath} className='w-full object-fill h-96 px-1' alt="Product Image Not Available" />
    </div>
  )
}
