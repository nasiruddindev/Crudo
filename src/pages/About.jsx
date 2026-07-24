import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Banner from '../assets/aboutBanner.png'
import Meat from '../assets/aboutBanner2.png'
import Title from '../components/Title'
import AbMeatCard from '../components/AbMeatCard'
import { FaRegHandPaper, FaStar } from 'react-icons/fa'
import {
  GiFruitBowl,
  GiProcessor,
  GiStumpRegrowth,
  GiSwallower,
} from 'react-icons/gi'
import AbCard from '../components/AbCard'
import AbImg1 from '../assets/abcard1.png'
import AbImg2 from '../assets/abcard2.png'
import AbImg3 from '../assets/abcard3.png'
import AbImg4 from '../assets/abcard4.png'
import AbImg5 from '../assets/abcard5.png'
import AbTest from '../assets/abtest.png'
import AbTest2 from '../assets/abtestab.png'
import { LuQuote } from 'react-icons/lu'
import Icon1 from '../assets/icon1.png'
import Icon2 from '../assets/icon2.png'
import Icon3 from '../assets/icon3.png'
import Icon4 from '../assets/icon4.png'
import PopularBrands from '../layouts/PopularBrands'

const About = () => {
  return (
    <>
      <section className="py-20">
        <Container>
          <Flex className=" items-center">
            <div className="w-5/12">
              <div className="max-w-xl p-6  ">
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
                  Our Unique Partnerships With Farmers And Producers Means We
                  Get First Dibs On The Best Stuff—And Get...
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
            <div className="w-7/12">
              <div className="group w-202 overflow-hidden">
                <Image
                  src={Banner}
                  className="w-full h-full object-cover scale-100 group-hover:scale-115 transition-transform duration-500 ease-in-out cursor-pointer"
                />
              </div>
            </div>
          </Flex>

          <Title
            text="Organic Meat Has Many Advantages"
            className="text-center pb-2 pt-20"
          />
          <p className="text-base text-primary font-medium font-karla text-center max-w-146 mx-auto">
            Organic Food Is Food Peoduced Using Methods That Adhere To The
            Standards Of Sustainable Organic Farmimg. Standards Vary Worldwide
          </p>

          <Flex className="justify-between items-center pt-20">
            <Flex className="flex-col gap-y-7.5">
              <AbMeatCard
                title="No Growth Hormones"
                text="Organic livestock and poultry are not given antibiotics or growth…"
                icon={<GiStumpRegrowth className="text-4xl text-yellow" />}
              />

              <AbMeatCard
                title="Safer"
                text="Organic meat is raised on organic feed (no pesticides, no synthetic…"
                icon={<FaRegHandPaper className="text-4xl text-yellow" />}
              />

              <AbMeatCard
                title="Higer Nutritional Vlaue"
                text="Some studies show that organic meat may: Contain more…"
                icon={<FaRegHandPaper className="text-4xl text-yellow" />}
              />
            </Flex>

            <div className="max-w-147">
              <Image src={Meat} />
            </div>

            <Flex className="flex-col gap-y-7.5">
              <AbMeatCard
                title="Natural Flavor"
                text="Free-range livestock with more activity often…"
                icon={<GiFruitBowl className="text-4xl text-yellow" />}
              />

              <AbMeatCard
                title="Better Animal Welfare"
                text="Animals are raised in natural environments, not in overcrowded…"
                icon={<GiSwallower className="text-4xl text-yellow" />}
              />

              <AbMeatCard
                title="Strict Control Process"
                text="Organic farming limits the use of chemicals and…"
                icon={<GiProcessor className="text-4xl text-yellow" />}
              />
            </Flex>
          </Flex>
        </Container>
      </section>

      <div className="py-20 bg-[#FFFAEC]">
        <Container>
          <Title text="Our Farm Land Farmers" className="pb-8" />

          <Flex className="justify-between">
            <AbCard src={AbImg1} title="Seraphina" text="Organic Farmer" />
            <AbCard
              src={AbImg2}
              title="Alistair"
              text="CEO/ Managing Director"
            />
            <AbCard src={AbImg3} title="Evangeline" text="Manager" />
            <AbCard src={AbImg4} title="Xavier" text="Agriculturist" />
            <AbCard src={AbImg5} title="Aurora" text="Farmer" />
          </Flex>
        </Container>
      </div>

      <section>
        <Container>
          <Flex className=" items-center pb-20 pt-40">
            <div className="w-6/12">
              <div className="w-155 h-115 relative">
                <Image src={AbTest} />
                <Image src={AbTest2} className="absolute -top-30 -left-20" />
              </div>
            </div>

            <div className="w-5/12">
              <Title text="Testimonial" />
              <LuQuote className="text-4xl text-yellow mt-6" />
              <ul className="flex gap-x-0.5 pt-3">
                <li>
                  <FaStar className="text-base text-yellow" />
                </li>
                <li>
                  <FaStar className="text-base text-yellow" />
                </li>
                <li>
                  <FaStar className="text-base text-yellow" />
                </li>
                <li>
                  <FaStar className="text-base text-yellow" />
                </li>
                <li>
                  <FaStar className="text-base text-yellow" />
                </li>
              </ul>
              <p className="text-base text-primary font-medium font-karla max-w-129 pt-5">
                “I’m really happy with my purchase from this organic store.The
                products are super fresh, high quality, and taste amazing.The
                staff was friendly and helpful, making the whole
                shoppingexperience smooth. I’ll definitely come back again!”
              </p>

              <div>
                <h2 className="pt-6 text-lg text-primary font-normal font-serif ">
                  Noah Anderson
                </h2>
                <p className="text-[15px] text-offblack font-karla font-normal ">
                  Software Engineer
                </p>
              </div>
            </div>

            <div className="w-1/12">

            <Flex className="flex-col gap-y-10">
              <div className='w-15 h-15 rounded-full'>
                <Image src={Icon1}/>
              </div>
              <div className='w-15 h-15 rounded-full'>
                <Image src={Icon1}/>
              </div>
              <div className='w-15 h-15 rounded-full'>
                <Image src={Icon1}/>
              </div>
              <div className='w-15 h-15 rounded-full'>
                <Image src={Icon1}/>
              </div>
            </Flex>

            </div>
          </Flex>

          <PopularBrands/>
        </Container>
      </section>
    </>
  )
}

export default About
