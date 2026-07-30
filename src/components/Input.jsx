import React from 'react'

const Input = ({type,className,placeholder,onChange}) => {
  return (
    <input type={type} placeholder={placeholder} onChange={onChange} className={` w-full border border-offwhite rounded-xl px-4 py-3.5  text-sm font-karla outline-none  focus:ring-2 focus:ring-secondary/10 transition-all duration-300 bg-white placeholder:text-offblack ${className}`} />
  )
}

export default Input
