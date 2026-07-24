import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import FLogo from '../assets/footerLogo.png'
import { IoLogoTiktok } from 'react-icons/io5'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoIosSend } from 'react-icons/io'

const Footer = () => {
  return (
    <section className="py-20 bg-[#F8F8F8] ">
      <Container>
        <Flex className="justify-between">
          <div>
            <Image src={FLogo} />
            <p className="text-black/60 text-sm font-karla font-medium max-w-74 pt-7 pb-10">
              We are committed to quality throughout the entire process. From
              organic, sustainable farming practices to respect for our grower
              partners, we conduct our business with integrity.
            </p>
            <div className="flex items-center gap-x-4">
              <p className="text-lg text-primary font-medium font-karla">
                Follow In:
              </p>

              <div className="flex gap-2.5">
                <div className="h-10 w-10 bg-[#ECEDEC] shadow-2xl rounded-full flex justify-center items-center">
                  <FaFacebookF />
                </div>
                <div className="h-10 w-10 bg-[#ECEDEC] rounded-full flex justify-center items-center">
                  <FaXTwitter />
                </div>
                <div className="h-10 w-10 bg-[#ECEDEC] rounded-full flex justify-center items-center">
                  <FaWhatsapp />
                </div>
                <div className="h-10 w-10 bg-[#ECEDEC] rounded-full flex justify-center items-center">
                  <FaInstagram />
                </div>
                <div className="h-10 w-10 bg-[#ECEDEC] rounded-full flex justify-center items-center">
                  <IoLogoTiktok />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-primary text-lg font-medium font-serif pb-7 text-center">
              Subscribe Our Newsletter
            </h3>
            <p className="text-black/60 text-sm font-karla font-medium max-w-106 text-center  pb-12">
              Get 15% off your first purchaxse! Plus, be the first to know about
              sales, new product launches and exclusive offers!
            </p>
            <div className="w-106 bg-offwhite rounded-full border border-black/30 border-dotted flex p-2">
              <input
                className="flex-1 pl-4 outline-none"
                type="email"
                placeholder="Email address"
              />
              <div className="w-10 h-10 rounded-full border border-dotted bg-offwhite flex justify-center items-center">
                <IoIosSend  className="text-black text-2xl" />
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-lg text-primary font-bold font-serif pb-7'>About Us</h3>
            <p className="text-black/60 text-sm font-karla font-medium  pb-5">
              FAQs
            </p>
            <p className="text-black/60 text-sm font-karla font-medium  pb-5">
              Shipping
            </p>
            <p className="text-black/60 text-sm font-karla font-medium  pb-5">
              Returns
            </p>
            <p className="text-black/60 text-sm font-karla font-medium  pb-5">
              Size Guides
            </p>
            <p className="text-black/60 text-sm font-karla font-medium  pb-5">
              Materials & Care
            </p>
            <p className="text-black/60 text-sm font-karla font-medium  pb-5">
              Sale
            </p>
          </div>



        </Flex>
      </Container>
    </section>
  )
}

export default Footer
