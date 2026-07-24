import React from 'react'
import Flex from './Flex'

const AbMeatCard = ({ title, text, icon }) => {
  return (
    <div className="w-110 bg-[#F9F9F9] shadow-md px-5 py-6">
      <Flex className="gap-x-5 items-center">
        <div className="min-h-17.5 min-w-17.5 bg-black/10 flex justify-center items-center rounded">
          {icon}
        </div>

        <div>
          <h3 className="text-xl text-primary font-serif font-bold">
            {title}
          </h3>
          <p className="font-base text-karla font-normal text-offblack">
            {text}
          </p>
        </div>
      </Flex>
    </div>
  )
}

export default AbMeatCard
