import React from 'react'

const Title = ({text,className}) => {
  return (
    <h2 className={`text-[32px] text-secondary font-medium font-serif ${className}`}>{text}</h2>
  )
}

export default Title
