import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Banner from '../assets/contactBanner.png'
import Image from '../components/Image'
import { IoLocationOutline, IoMailOutline } from 'react-icons/io5'
import { FaPhoneVolume } from 'react-icons/fa'
import Title from '../components/Title'
import Button from '../components/Button'

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
              <input type="text" placeholder='Your Name ' className='px-5 py-4 border border-black/30 w-91.5 outline-none'/>
              <input type="email" placeholder='Your Email ' className='px-5 py-4 border border-black/30 w-91.5 outline-none'/>
            </div>
            <input type="email" placeholder='Number Phone' className='px-5 py-4 border border-black/30 w-190.75  outline-none my-6'/>
            <textarea placeholder='Your Message' className='px-5 py-4  border border-black/30 w-190.75 h-58 outline-none'></textarea>

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
