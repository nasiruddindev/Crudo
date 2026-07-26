import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`text-base text-white font-karla font-semibold bg-secondary px-7.5 py-3.5 rounded-full hover:bg-green-900 duration-300 cursor-pointer ${className}`}>{text}</button>
  )
}

export default Button
