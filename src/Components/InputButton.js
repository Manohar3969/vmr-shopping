import React from 'react'

export const InputButton = ({children, buttonType, buttonStyles}) => {
  return (
    <div className="flex justify-center">
        <button className={buttonStyles} type={buttonType}>{children}</button>
      </div>
  )
}
