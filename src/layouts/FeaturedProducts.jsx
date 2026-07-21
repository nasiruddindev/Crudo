import React from 'react'
import Container from '../components/Container'
import Title from '../components/Title'
import Card from '../components/Card'
import Flex from '../components/Flex'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import Image from '../components/Image'
import Img1 from '../assets/SPImg1.png'
import Img2 from '../assets/SPImg2.png'
import Img3 from '../assets/SPImg3.png'

const FeaturedProducts = ({products}) => {
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
        {
          products.slice(25,31).map((item,index)=>(

            <Card src={item.thumbnail} cetegory={item.category} title={item.title}/>
          ))
        }
        </Flex>

        <Flex className="justify-between pt-30">
          <div className='w-118'>
            <Image src={Img1}/>
          </div>
          <div className='w-118'>
            <Image src={Img2}/>
          </div>
          <div className='w-118'>
            <Image src={Img3}/>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default FeaturedProducts
