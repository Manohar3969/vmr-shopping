import React from 'react'

export const OffersBanner = ({imagePath}) => {
  return (
    <div className='relative w-full mt-1 mb-1'>
        <img src={imagePath} className='w-full object-fill h-96' alt="" />
    </div>
  )
}
