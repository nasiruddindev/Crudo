import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { IoMdSearch } from 'react-icons/io'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import { MdOutlineManageAccounts } from 'react-icons/md'
import { FaRegHeart, FaShoppingCart } from 'react-icons/fa'
import ListItem from '../components/ListItem'

const Navbar = () => {
  return (
    <nav>
      <Container>
        <Flex className="justify-between items-center py-8 border-b border-offwhite">
          <div className="w-90 bg-offwhite rounded-full flex p-2">
            <input
              className="flex-1 pl-4"
              type="text"
              placeholder="Search Product"
            />
            <div className="w-10 h-10 rounded-full bg-secondary flex justify-center items-center">
              <IoMdSearch className="text-white text-2xl" />
            </div>
          </div>

          <div>
            <Image src={Logo} />
          </div>

          <div className="flex gap-5">
            <div className="h-12 w-12 rounded-full border border-offwhite flex justify-center items-center">
              <MdOutlineManageAccounts className="text-black/70 text-2xl" />
            </div>
            <div className="h-12 w-12 rounded-full border border-offwhite flex justify-center items-center">
              <FaRegHeart className="text-black/70 text-2xl" />
            </div>
            <div className="h-12 w-12 rounded-full border border-offwhite flex justify-center items-center">
              <FaShoppingCart className="text-black/70 text-2xl" />
            </div>
          </div>
        </Flex>



        <ul className='flex justify-center gap-x-25 py-6 '>
          <ListItem text="Home"/>
          <ListItem text="About"/>
          <ListItem text="Contact"/>
          <ListItem text="Blog"/>
        </ul>



      </Container>
    </nav>
  )
}

export default Navbar
