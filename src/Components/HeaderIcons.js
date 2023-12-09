import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HeaderIcons = ({iconName, children}) => {
  return (
    <div className='hover:text-red-500 cursor-pointer'>
        <FontAwesomeIcon icon={iconName} className="ml-5 text-xl"/>
        <span className="font-semibold ml-2 mr-5">{children}</span>
    </div>
  )
}
