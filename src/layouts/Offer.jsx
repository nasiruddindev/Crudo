import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoLogoTiktok } from 'react-icons/io5'

const Offer = () => {
  return (
    <div className='bg-[#EEFDF2]  py-3'>
      <Container>
        <Flex className="justify-between">
          <div>
            <p className='font-medium font-karla text-sm text-primary'>Free shipping worldwide. Orders over $200 <span className='underline pl-2'>Shop Now</span></p>
          </div>


          <div className='flex items-center gap-x-4'>
            <p className='text-sm text-primary font-medium font-karla'>Follow In:</p>

            <div className='flex gap-2.5'>

              <div className='h-8 w-8 bg-white rounded-full flex justify-center items-center'>
                <FaFacebookF />

              </div>
              <div className='h-8 w-8 bg-white rounded-full flex justify-center items-center'>
                <FaXTwitter />


              </div>
              <div className='h-8 w-8 bg-white rounded-full flex justify-center items-center'>
                <FaWhatsapp />


              </div>
              <div className='h-8 w-8 bg-white rounded-full flex justify-center items-center'>
                <FaInstagram />


              </div>
              <div className='h-8 w-8 bg-white rounded-full flex justify-center items-center'>
                <IoLogoTiktok />


              </div>

            </div>
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Offer
