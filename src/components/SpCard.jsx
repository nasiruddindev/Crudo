import React from 'react'
import Flex from './Flex'
import Image from './Image'
import { FaRegHeart, FaShoppingCart } from 'react-icons/fa'

const SpCard = ({src,title,description,salePrice}) => {
  return (
    <div className='w-174 bg-white rounded-md p-5 '>
      <Flex className="items-center justify-between">
        <div className='h-78 w-78 flex justify-center items-center cursor-pointer bg-offwhite'>
          <Image src={src}/>
        </div>
        <div className='cursor-pointer'>
          <h3 className='text-xl text-primary font-bold font-serif'>{title}</h3>
           <p className='text-primary text-base font-normal font-karla pt-3 max-w-70'>{description}</p>
          <p className='text-yellow text-lg font-normal font-karla py-5'>${salePrice}</p>


          <div className='flex items-center gap-x-3'>
            <div className='group w-60 bg-offwhite rounded-full flex items-center justify-center gap-x-2 hover:bg-secondary duration-500'>
              <p className='text-sm text-primary group-hover:text-white font-karla font-bold text-center py-3 duration-500'>Add To Cart</p>
              <FaShoppingCart className="text-black/70 text-2xl group-hover:text-white duration-500" />
            </div>
            <div className='w-12 h-12 rounded-full bg-offwhite flex justify-center items-center '>
              <FaRegHeart className="text-black/70 text-2xl" />
            </div>
          </div>
        </div>
      </Flex>
    </div>
  )
}

export default SpCard
