import React from 'react'
import Container from '../components/Container'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import Title from '../components/Title'
import Flex from '../components/Flex'
import PopBrands from '../components/PopBrands'
import PbImg1 from '../assets/pb1.png'
import PbImg2 from '../assets/pb2.png'
import PbImg3 from '../assets/pb3.png'
import PbImg4 from '../assets/pb4.png'
import PbImg5 from '../assets/pb5.png'

const PopularBrands = () => {
  return (
    <section className='py-20'>
      <Container>
        <div className="pb-9 flex justify-between items-center">
          <Title text="Featured Products" />
          <div className='flex items-center gap-x-2 cursor-pointer'>
            <p className='text-sm text-primary font-karla font-bold uppercase'>view all</p>
            <MdKeyboardDoubleArrowRight />
          </div>
        </div>

        <Flex className="justify-between">
          <PopBrands src={PbImg1}/>
          <PopBrands src={PbImg2}/>
          <PopBrands src={PbImg3}/>
          <PopBrands src={PbImg4}/>
          <PopBrands src={PbImg5}/>
        </Flex>



      </Container>
    </section>
  )
}

export default PopularBrands
