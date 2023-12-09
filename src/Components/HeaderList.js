import React from 'react'

export const HeaderList = ({children}) => {
  return (
    <>
    <li className="flex hover:text-red-500 px-5 cursor-pointer font-semibold">{children}</li>
    </>
  )
}
