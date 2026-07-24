import React from 'react'
import Image from './Image'

const AbCard = ({src,title,text}) => {
  return (
    <div className='w-62'>
      <div className='w-full h-77.5 rounded-md'>
        <Image src={src}/>
      </div>
      <h2 className='pt-6 text-lg text-primary font-normal font-serif text-center'>{title}</h2>
      <p className='text-[15px] text-offblack font-karla font-normal text-center'>{text}</p>
    </div>
  )
}

export default AbCard
