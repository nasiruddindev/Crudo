import React from 'react'
import Image from './Image'

const PopBrands = ({src}) => {
  return (
    <div className='w-66 h-37.5 bg-offwhite flex items-center justify-center'>
      <Image src={src}/>
    </div>
  )
}

export default PopBrands
