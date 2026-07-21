import React from 'react'
import Image from './Image'

const CategoryItem = ({ src, text }) => {
  return (
    <div>
      <div className="group h-60 w-60 rounded-full flex justify-center items-center overflow-hidden">
        <Image
          src={src}
          className="w-full h-full object-cover scale-100 group-hover:scale-115 transition-transform duration-300 ease-in-out cursor-pointer"
        />
      </div>

      <p className="text-black text-lg font-medium font-serif text-center pt-5">
        {text}
      </p>
    </div>
  )
}

export default CategoryItem
