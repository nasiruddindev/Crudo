import React from 'react'
import Container from '../components/Container'
import SpCard from '../components/SpCard'
import Flex from '../components/Flex'
import Title from '../components/Title'

const SpecialProducts = ({products}) => {
  return (
    <section className="bg-[url('./assets/specialBanner.png')] w-full bg-center bg-no-repeat bg-cover py-24 ">
      <Container>
        <Title text="Special Products" className="pb-9"/>
        <Flex className="justify-between">

          {
            products.slice(24,26).map((item,index)=>(

              <SpCard key={index} src={item.thumbnail} title={item.title} salePrice={item.price} regularPrice={item.discountPercentage} description={item.description}/>

            ))
          }

        </Flex>
      </Container>
    </section>
  )
}

export default SpecialProducts
