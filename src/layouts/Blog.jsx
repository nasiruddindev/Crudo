import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import BlogCard from '../components/BlogCard'
import Title from '../components/Title'
import { Link } from 'react-router-dom'

const Blog = ({products}) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return 'Jan 01, 2024'
    return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })
  }

  return (
    <section className='pb-20'>
      <Container>
        <Title text="Our Blog" className="text-center pb-2"/>
        <p className='text-base text-primary font-medium font-karla text-center max-w-98 mx-auto'>Natural Food Is Taken From The World's Most Modern Farms With Strict</p>
        <Flex className="justify-between pt-10">
          {
            products.slice(15,18).map((item,index)=>(
              <Link key={index} to={`/blog/${item.id}`} className="block">
                <BlogCard src={item.thumbnail} date={formatDate(item.meta?.createdAt || item.reviews?.[0]?.date)} title={item.title} />
              </Link>
            ))
          }
        </Flex>
      </Container>
    </section>
  )
}

export default Blog
