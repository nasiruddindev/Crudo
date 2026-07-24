import React, { useEffect, useState } from 'react'
import Navbar from '../layouts/Navbar'
import Offer from '../layouts/Offer'
import Banner from '../layouts/Banner'
import Category from '../layouts/Category'
import SpecialProducts from '../layouts/SpecialProducts'
import FeaturedProducts from '../layouts/FeaturedProducts'
import TopProducts from '../layouts/TopProducts'
import PopularBrands from '../layouts/PopularBrands'
import Blog from '../layouts/Blog'
import Footer from '../layouts/Footer'

const Home = () => {

  const [products,setProducts] = useState([])

  useEffect(()=>{
     fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
  },[])


  return (
    <div>
      <Offer/>
      <Navbar/>
      <Banner/>
      <Category/>
      <SpecialProducts products={products}/>
      <FeaturedProducts products={products}/>
      <TopProducts products={products}/>
      <PopularBrands/>
      <Blog products={products}/>
      <Footer/>
    </div>
  )
}

export default Home
