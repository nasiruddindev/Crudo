import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Button from '../components/Button'
import ProductImg from '../assets/productSalmon.png'
import {
  FaRegHeart,
  FaShoppingCart,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaLeaf,
  FaTruck,
  FaShieldAlt,
  FaCheck,
} from 'react-icons/fa'
import { RiArrowLeftRightFill } from 'react-icons/ri'
import { IoMdSearch } from 'react-icons/io'
import { HiMinus, HiPlus } from 'react-icons/hi'
import { Link, useParams } from 'react-router-dom'
import Title from '../components/Title'
import Card from '../components/Card'

const ProductDetailsPage = () => {

  useEffect(()=>{
    window.scrollTo({top:0})

  },[])


  const [alldata,setAlldata] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)

  const handleAddToCart = () => {
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const renderStars = (rating) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-yellow" />)
      } else if (i - rating < 1 && i - rating > 0) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow" />)
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow" />)
      }
    }
    return stars
  }

  // Releted Products Show Api

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then((res)=>res.json())
    .then((data)=>setAlldata(data.products))

  },[])

  // product details functionallity

  const params = useParams()
  const [products,setProducts] = useState([])

  useEffect(()=>{
    fetch(`https://dummyjson.com/products/${params.id}`)
    .then((res=>res.json()))
    .then((data)=>setProducts(data))

  },[params.id])

  console.log(params)
  console.log(products)


  return (
    <section className="pb-20">
      {/* Breadcrumb */}
      <div className="bg-[#F8F8F8] py-5">
        <Container>
          <div className="flex items-center gap-2 font-karla text-sm">
            <Link
              to="/"
              className="text-offblack hover:text-secondary transition-colors duration-300"
            >
              Home
            </Link>
            <span className="text-offblack">/</span>
            <span className="text-offblack">Shop</span>
            <span className="text-offblack">/</span>
            <span className="text-primary font-semibold">
              Organic Salmon Fillet
            </span>
          </div>
        </Container>
      </div>

      {/* Product Section */}
      <Container>
        <div className="flex gap-16  py-20">
          <div className="w-6/12">
            {/* Main Image */}
            <div className="w-150 h-170 mx-auto bg-offwhite rounded-2xl flex justify-center items-center p-8 relative overflow-hidden group">
              {/* Organic Badge */}
              <div className="absolute top-5 left-5 z-10">
                <div className="bg-secondary text-white text-xs font-karla font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                  <FaLeaf className="text-xs" />
                  100% Organic
                </div>
              </div>
              {/* Discount Badge */}
              <div className="absolute top-5 right-5 z-10">
                <div className="bg-yellow text-white text-xs font-karla font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                  -20%
                </div>
              </div>
              <Image
                src={products.thumbnail}
                alt="Organic Salmon Fillet"
                className="max-h-105 object-contain transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-6/12 pt-2">
            {/* Category */}
            <p className="text-secondary text-sm font-karla font-semibold uppercase tracking-widest mb-3">
              Fresh Seafood
            </p>

            {/* Title */}
            <Title text={products.title} className="pb-4"/>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">{renderStars(4.5)}</div>
              <span className="text-offblack text-sm font-karla">(4.5)</span>
              <span className="text-offblack text-sm font-karla">•</span>
              <span className="text-secondary text-sm font-karla font-medium">
                128 Reviews
              </span>
            </div>

            {/* Price */}
            <div className="mb-5">
              <span className="text-yellow text-4xl font-bold font-karla">
                ${products.price}
              </span>


            </div>

            {/* Short Description */}
            <p className="text-primary/70 text-base font-karla leading-relaxed mb-8 max-w-lg">
              {products.description}
            </p>

            {/* Divider */}
            <div className="border-t border-offwhite mb-8"></div>

            {/* Weight Options */}
            <div className="mb-8">
              <p className="text-primary text-sm font-karla font-bold mb-3">
                Weight
              </p>
              <div className="flex gap-3">
                {['250g', '500g', '1kg', '2kg'].map((weight, index) => (
                  <button
                    key={index}
                    className={`px-6 py-2.5 rounded-full text-sm font-karla font-semibold border-2 transition-all duration-300 cursor-pointer ${
                      index === 1
                        ? 'bg-secondary text-white border-secondary shadow-md shadow-secondary/20'
                        : 'bg-white text-primary border-offwhite hover:border-secondary hover:text-secondary'
                    }`}
                  >
                    {weight}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-5 mb-8">
              {/* Quantity Selector */}
              <div className="flex items-center border-2 border-offwhite rounded-full overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center text-primary hover:bg-offwhite transition-colors duration-300 cursor-pointer"
                >
                  <HiMinus />
                </button>
                <span className="w-14 text-center text-lg font-karla font-bold text-primary">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center text-primary hover:bg-offwhite transition-colors duration-300 cursor-pointer"
                >
                  <HiPlus />
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-3 py-3.5 rounded-full text-base font-karla font-bold transition-all duration-500 cursor-pointer shadow-lg ${
                  addedToCart
                    ? 'bg-secondary text-white shadow-secondary/30'
                    : 'bg-secondary text-white hover:bg-green-900 shadow-secondary/20 hover:shadow-secondary/40'
                }`}
              >
                {addedToCart ? (
                  <>
                    <FaCheck className="text-lg" />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <FaShoppingCart className="text-lg" />
                    Add To Cart
                  </>
                )}
              </button>

              {/* Wishlist */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 cursor-pointer ${
                  isWishlisted
                    ? 'bg-red-50 border-red-400 text-red-500 shadow-md shadow-red-100'
                    : 'border-offwhite text-offblack hover:border-secondary hover:text-secondary'
                }`}
              >
                <FaRegHeart className="text-xl" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex gap-8 pt-6 border-t border-offwhite">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <FaLeaf className="text-secondary text-sm" />
                </div>
                <div>
                  <p className="text-primary text-xs font-karla font-bold">
                    100% Organic
                  </p>
                  <p className="text-offblack text-[10px] font-karla">
                    Certified Fresh
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <FaTruck className="text-secondary text-sm" />
                </div>
                <div>
                  <p className="text-primary text-xs font-karla font-bold">
                    Free Delivery
                  </p>
                  <p className="text-offblack text-[10px] font-karla">
                    Orders over $50
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <FaShieldAlt className="text-secondary text-sm" />
                </div>
                <div>
                  <p className="text-primary text-xs font-karla font-bold">
                    Quality Assured
                  </p>
                  <p className="text-offblack text-[10px] font-karla">
                    Satisfaction Guaranteed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="border-t border-offwhite">
          {/* Tab Buttons */}
          <div className="flex gap-0">
            {[
              { id: 'description', label: 'Description' },
              { id: 'nutrition', label: 'Nutrition Facts' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-10 py-5 text-base font-karla font-bold border-b-3 transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? 'text-secondary border-secondary'
                    : 'text-offblack border-transparent hover:text-primary hover:border-offblack/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="py-10">
            {/* Description Tab */}
            {activeTab === 'description' && (
              <div className="max-w-4xl animate-[fadeIn_0.5s_ease-out]">
                <h3 className="text-primary text-2xl font-bold font-serif mb-5">
                  About This Product
                </h3>
                <p className="text-primary/70 text-base font-karla leading-relaxed mb-6">
                  Our Organic Salmon Fillet is sourced from the cleanest, most
                  pristine waters of the North Atlantic. Each fillet is
                  hand-selected for quality and freshness, ensuring you receive
                  only the finest cuts. Our sustainable farming practices
                  guarantee that every piece of salmon is free from antibiotics,
                  growth hormones, and artificial preservatives.
                </p>
                <p className="text-primary/70 text-base font-karla leading-relaxed mb-8">
                  Rich in essential Omega-3 fatty acids, our organic salmon
                  supports heart health, brain function, and overall wellbeing.
                  The delicate, buttery flavor and tender texture make it
                  perfect for grilling, baking, or pan-searing. Whether you're
                  preparing a gourmet dinner or a quick weeknight meal, our
                  premium salmon delivers restaurant-quality results every time.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    'Wild-caught from sustainable fisheries',
                    'No artificial colors or preservatives',
                    'Rich in Omega-3 & protein',
                    'Vacuum-sealed for maximum freshness',
                    'Hand-filleted by expert artisans',
                    'USDA Organic Certified',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0">
                        <FaCheck className="text-white text-[10px]" />
                      </div>
                      <span className="text-primary text-sm font-karla font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Nutrition Tab */}
            {activeTab === 'nutrition' && (
              <div className="max-w-2xl animate-[fadeIn_0.5s_ease-out]">
                <h3 className="text-primary text-2xl font-bold font-serif mb-5">
                  Nutrition Information
                </h3>
                <p className="text-offblack text-sm font-karla mb-6">
                  Per 100g serving
                </p>
                <div className="border border-offwhite rounded-xl overflow-hidden">
                  {[
                    { label: 'Calories', value: '208 kcal' },
                    { label: 'Total Fat', value: '13g' },
                    { label: 'Saturated Fat', value: '3.1g' },
                    { label: 'Protein', value: '20g' },
                    { label: 'Omega-3 Fatty Acids', value: '2.3g' },
                    { label: 'Cholesterol', value: '55mg' },
                    { label: 'Sodium', value: '59mg' },
                    { label: 'Vitamin D', value: '11μg' },
                    { label: 'Vitamin B12', value: '3.2μg' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center px-6 py-4 ${
                        index % 2 === 0 ? 'bg-white' : 'bg-offwhite/50'
                      }`}
                    >
                      <span className="text-primary text-sm font-karla font-medium">
                        {item.label}
                      </span>
                      <span className="text-primary text-sm font-karla font-bold">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="pt-10 border-t border-offwhite">
          <div className="flex items-center justify-between mb-10">
            <Title text="You May Also Like This " />
            <Link
              to="/"
              className="text-secondary text-sm font-karla font-bold hover:text-green-900 transition-colors duration-300 underline underline-offset-4"
            >
              View All Products →
            </Link>
          </div>

          <Flex className="justify-between">
            {
              alldata.slice(15,20).map((item,index)=>(
                <Card key={index} id={item.id} src={item.thumbnail} category={item.category} title={item.title} salePrice={item.price}/>
              ))
            }
          </Flex>
        </div>
      </Container>
    </section>
  )
}

export default ProductDetailsPage
