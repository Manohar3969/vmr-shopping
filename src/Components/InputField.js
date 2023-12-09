import React from 'react'

export const InputField = ({ inputStyles, inputType, inputPlaceHolder }) => {
  return (
    <div className="flex justify-center">
        <input className={inputStyles} type={inputType} placeholder={inputPlaceHolder} required/>
    </div>
  )
}
