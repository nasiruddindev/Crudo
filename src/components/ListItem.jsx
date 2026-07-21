import React from 'react'

const ListItem = ({text,className}) => {
  return (
    <li className={`relative text-base text-primary font-semibold font-karla hover:text-secondary duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-secondary hover:after:w-full after:duration-300 cursor-pointer ${className}`}>{text}</li>
  )
}

export default ListItem
