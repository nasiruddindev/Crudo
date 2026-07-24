import React from 'react'
import Image from './Image'

const BlogCard = ({src,date,title}) => {
  return (
    <div className='w-111.75 '>
      <div className='w-full h-83.75 rounded-xl bg-offwhite flex justify-center items-center'>
        <div className='w-101.75 h-73.75 bg-white overflow-hidden flex justify-center items-center'>
          <Image src={src} className="transition-all scale-100 hover:scale-120 ease-in-out duration-300"/>
        </div>
      </div>



      <div className='pt-5'>
        <p className='text-lg text-yellow font-serif font-semibold pb-2'>{date}</p>
        <h3 className='text-2xl text-secondary font-karla font-medium pb-6'>{title}</h3>
        <button className='text-primary text-base font-karla font-semibold border border-dotted px-5 py-2 rounded'>
          READ MORE
        </button>
      </div>
    </div>
  )
}

export default BlogCard
