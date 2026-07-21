import React from 'react'
import Image from './Image'
import { FaRegHeart, FaShoppingCart } from 'react-icons/fa'
import { RiArrowLeftRightFill } from 'react-icons/ri'
import { IoMdSearch } from 'react-icons/io'

const Card = ({ src, cetegory, title, salePrice, regularPrice }) => {
  return (
    <div className={`relative group w-66 cursor-pointer`}>
      <div className="relative w-full h-75 bg-offwhite flex justify-center items-center overflow-hidden">
        <Image src={src} />

        <div className="flex gap-4 absolute left-1/2 transform -translate-x-1/2 transition-all  -bottom-10 opacity-0 group-hover:opacity-100 duration-300 ease-out">
          <div className="h-12 w-12 rounded-full border bg-white shadow-md border-offwhite flex justify-center items-center group-hover:-translate-y-20 duration-300 delay-75 ">
            <FaRegHeart className="text-black/70 text-2xl" />
          </div>

          <div className="h-12 w-12 rounded-full border bg-white shadow-md  border-offwhite flex justify-center items-center  group-hover:-translate-y-20 duration-300 delay-150">
            <RiArrowLeftRightFill className="text-2xl" />
          </div>

          <div className="h-12 w-12 rounded-full border bg-white shadow-md  border-offwhite flex justify-center items-center  group-hover:-translate-y-20 duration-300 delay-200">
            <IoMdSearch className="text-2xl" />
          </div>
        </div>
      </div>

      <div>
        <p className="text-secondary text-center text-sm font-medium font-karla pt-3">
          {cetegory}
        </p>
        <h3 className="text-primary text-xl text-center font-bold font-karla pt-2 pb-3">
          {title}
        </h3>

        <div className="absolute left-1/2 transition-all -translate-x-1/2 -bottom-10 z-50 opacity-100 translate-y-0 group-hover:translate-y-4 duration-500 group-hover:opacity-0">
          <p className="text-lg text-yellow font-bold font-karla">
            $255 <span className="text-black/60">{regularPrice}</span>
          </p>
        </div>

        <div className="absolute -bottom-8 left-0  w-full bg-offwhite rounded-full opacity-0 group-hover:opacity-100  transition-all group-hover:translate-y-5 duration-500 flex justify-center items-center gap-x-3 hover:shadow-xl">
          <p className=" text-sm text-primary font-karla font-bold text-center py-3">
            Add To Cart
          </p>
          <FaShoppingCart className="text-black/70 text-2xl" />
        </div>
      </div>
    </div>
  )
}

export default Card
