import React from 'react'
import Container from '../components/Container'
import Title from '../components/Title'
import Flex from '../components/Flex'
import CategoryItem from '../components/CategoryItem'
import Fish from '../assets/fish.png'
import Fruits from '../assets/fruits.png'
import Meat from '../assets/meat.png'
import Milk from '../assets/milk.png'
import Veg from '../assets/veg.png'

const Category = () => {
  return (
    <section className='py-20'>
      <Container>
        <Title text="Shop By Category" className="text-center pb-3"/>

        <Flex className="justify-between py-5">

          <CategoryItem text="Fish" src={Fish}/>
          <CategoryItem text="Fruits" src={Fruits}/>
          <CategoryItem text="Meat" src={Meat}/>
          <CategoryItem text="Milk" src={Milk}/>
          <CategoryItem text="Vegetable" src={Veg}/>



        </Flex>

      </Container>
    </section>
  )
}

export default Category
