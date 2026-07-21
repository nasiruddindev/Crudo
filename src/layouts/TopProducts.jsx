import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Title from '../components/Title'
import { FaRegHeart, FaShoppingCart } from 'react-icons/fa'
import Card from '../components/Card'
import Image from '../components/Image'
import Banner from '../assets/topbanner.png'

const TopProducts = ({
  products,
  targetDate = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
}) => {
  const calculateTimeLeft = () => {
    // বর্তমান সময় এবং টার্গেট সময়ের পার্থক্য বের করা (milliseconds)
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    // প্রতি ১ সেকেন্ড পরপর সময় গণনা আপডেট করা
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  console.log(products)

  return (
    <section className="pb-100">
      <Container>
        <Flex className="items-center justify-between">
          <p className="w-4/12 text-lg text-primary font-karla font-medium">
            Special Offer Of The Day!
          </p>
          <Title text="Shop Top Products" className="w-4/12 text-center" />
          <ul className="w-4/12 flex gap-x-7 items-center cursor-pointer justify-end">
            <li className="text-base text-black/60 font-karla font-semibold">
              Fish
            </li>
            <li className="text-base text-black/60 font-karla font-semibold">
              Vegetable
            </li>
            <li className="text-base text-black/60 font-karla font-semibold">
              Meat
            </li>
            <li className="text-base text-black/60 font-karla font-semibold">
              Milk
            </li>
            <li className="text-base text-black/60 font-karla font-semibold">
              Fruits
            </li>
          </ul>
        </Flex>

        <Flex className="gap-x-6 pt-7">
          <div className="w-140 ">
            {products.slice(15, 16).map((item, index) => (
              <div>
                <div className="w-full h-129 flex justify-center items-center ">
                  <Image src={item.thumbnail} className="w-full"/>
                </div>
                <div>
                  <p className="text-secondary text-center text-lg font-medium font-karla pt-3">
                    {item.category}
                  </p>
                  <h3 className="text-primary text-3xl text-center font-bold font-karla py-5">
                    {item.title}
                  </h3>

                  <p className="text-lg text-yellow text-center font-bold font-karla pb-4">
                    ${item.price}{' '}
                    <span className="text-black/60">{item.regularPrice}</span>
                  </p>
                  <div className="flex items-center justify-center w-8/12 mx-auto mb-10 mt-5 bg-[#236835] text-white px-8 py-3 rounded-full font-medium shadow-sm">
                    <span className="text-base font-serif md:text-xl font-semibold tracking-wide">
                      End In : {timeLeft.days}d : {timeLeft.hours}h :
                      {timeLeft.minutes}m : {timeLeft.seconds}s
                    </span>
                  </div>

                  <div className="flex justify-center items-center gap-x-4">
                    <div className=" bg-offwhite rounded-full  flex justify-center items-center gap-x-3 hover:shadow-xl px-15">
                      <p className=" text-sm text-primary font-karla font-bold text-center py-3">
                        Add To Cart
                      </p>
                      <FaShoppingCart className="text-black/70 text-2xl" />
                    </div>
                    <div className="bg-offwhite h-12 w-12 rounded-full flex justify-center items-center">
                      <FaRegHeart className="text-black/70 text-2xl" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Flex className="w-214  flex-wrap gap-x-6 gap-y-20">
            {products.slice(18, 24).map((item, index) => (
              <Card
                key={index}
                src={item.thumbnail}
                category={item.category}
                title={item.title}
                salePrice={item.price}
              />
            ))}
          </Flex>
        </Flex>

        <Flex className="pt-30 items-center">
          <div className="w-7/12">
            <div className='group w-202 overflow-hidden'>
              <Image src={Banner} className="w-full h-full object-cover scale-100 group-hover:scale-115 transition-transform duration-500 ease-in-out cursor-pointer"/>
            </div>
          </div>

          <div className="w-5/12">
            <div className="max-w-xl p-6 md:p-10 ">
              {/* Subtitle / Category */}
              <span className="text-xs md:text-sm font-semibold font-karla tracking-wider text-gray-700 uppercase block mb-3">
                NATURALLY BETTER
              </span>

              {/* Main Heading */}
              <h1 className="text-3xl md:text-5xl font-medium leading-tight mb-4 font-karla">
                <span className="text-secondary">Organic </span>
                <span className="text-yellow">Salmon & Avocado </span>
                <span className="text-secondary block">Garden Elegance</span>
              </h1>

              {/* Description Paragraph */}
              <p className="text-primary text-sm md:text-base font-karla font-normal leading-relaxed mb-6 max-w-lg">
                Our Unique Partnerships With Farmers And Producers Means We Get
                First Dibs On The Best Stuff—And Get...
              </p>

              {/* Call to Action Button */}
              <button
                type="button"
                className="bg-[#236835] hover:bg-[#1b5229] text-white text-xs md:text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded-full transition-colors duration-300 shadow-sm"
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default TopProducts
