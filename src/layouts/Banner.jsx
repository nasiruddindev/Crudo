import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import BannerImg from '../assets/banner.png'

const Banner = () => {
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    setShowText(true)
  }, [])

  return (
    <section className="w-full">
      <Container>
        <div className="relative overflow-hidden">
          <Image src={BannerImg} alt="Banner" className="w-full h-auto" />


          <div
            className={`absolute top-1/2 left-8 sm:left-12 -translate-y-1/2  transition-all duration-1000 ease-out flex flex-col items-start text-left ${
              showText
                ? 'opacity-100 translate-y-[-50%]'
                : 'opacity-0 translate-y-[-40%]'
            }`}
          >
            {/* Top Subtitle */}
            <span
              className={`text-xs sm:text-sm font-semibold text-primary uppercase mb-2 tracking-wider transition-all duration-700 delay-200 ${
                showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Freshly Organic
            </span>

            {/* Main Heading */}
            <h1
              className={`font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-snug mb-3 transition-all duration-700 delay-400 ${
                showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="text-secondary block">
                Naturally Fresh. Naturally
              </span>
              <span className="text-yellow block mt-1">Better</span>
            </h1>

            {/* Description Paragraph */}
            <p
              className={`text-xs sm:text-sm md:text-base text-gray-700 font-medium max-w-sm sm:max-w-md transition-all duration-700 delay-600 ${
                showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              It Is Grown And Processed Without The Use Of Synthetic
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Banner
