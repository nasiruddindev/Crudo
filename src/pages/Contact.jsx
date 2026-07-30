import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Banner from '../assets/contactBanner.png'
import Image from '../components/Image'
import { IoLocationOutline, IoMailOutline } from 'react-icons/io5'
import { FaPhoneVolume } from 'react-icons/fa'
import Title from '../components/Title'
import Button from '../components/Button'
import Input from '../components/Input'

const Contact = () => {
  return (
    <section className="py-20">
      <Container>
        <Flex className="justify-between items-center">
          <div className="w-84">
            <Image src={Banner} />
          </div>

          <div className='w-7/12 px-10'>
            <Title text="Send Us An Message" className="text-start"/>

            <div className='pt-7.5 flex gap-x-7.5'>
              <Input type="text" placeholder='Your Name' />
              <Input type="email" placeholder='Your Email' />
            </div>
            <Input type="tel" placeholder='Phone Number' className='my-6' />
            <textarea
              placeholder='Your Message'
              className='w-full border border-offwhite rounded-xl px-4 py-3.5 text-sm font-karla outline-none focus:ring-2 focus:ring-secondary/10 transition-all duration-300 bg-white placeholder:text-offblack h-44 resize-none'
            ></textarea>

            <Button text="SENT MESSAGE" className="mt-8"/>
          </div>

          <Flex className="flex-col gap-y-5">
            <div className="w-62 bg-[#F8F8F8] shadow-2xl rounded-br-3xl rounded-tl-3xl px-9 py-5">
              <div className="h-13 w-13 bg-offwhite rounded-full flex justify-center items-center">
                <IoLocationOutline className="text-2xl" />
              </div>
              <h2 className="pt-2 text-lg text-black font-normal font-serif ">
                Address:
              </h2>
              <p className="text-[15px] text-primary font-karla font-normal ">
                Tower Hill, London EC#N WAB, United Kingdom
              </p>
            </div>

            <div className="w-62 bg-[#F8F8F8] shadow-2xl rounded-br-3xl rounded-tl-3xl px-9 py-5">
              <div className="h-13 w-13 bg-offwhite rounded-full flex justify-center items-center">
                <IoMailOutline className="text-2xl" />
              </div>
              <h2 className="pt-2 text-lg text-black font-normal font-serif ">
                Email:
              </h2>
              <p className="text-[15px] text-primary font-karla font-normal ">
                Crudoshop@gmail.com
              </p>
            </div>
            <div className="w-62 bg-[#F8F8F8] shadow-2xl rounded-br-3xl rounded-tl-3xl px-9 py-5">
              <div className="h-13 w-13 bg-offwhite rounded-full flex justify-center items-center">
                <FaPhoneVolume className="text-2xl" />
              </div>
              <h2 className="pt-2 text-lg text-black font-normal font-serif ">
                Call Us:
              </h2>
              <p className="text-[15px] text-primary font-karla font-normal ">
                +44 7000 123456 <br /> (+089) 19918989
              </p>
            </div>
          </Flex>
        </Flex>
      </Container>
    </section>
  )
}

export default Contact
