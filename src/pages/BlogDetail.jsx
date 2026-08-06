import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Container from '../components/Container'
import Title from '../components/Title'
import Button from '../components/Button'
import Flex from '../components/Flex'
import BlogCard from '../components/BlogCard'
import { FaCalendarAlt, FaStar, FaArrowLeft, FaUser, FaTag, FaArrowRight } from 'react-icons/fa'
import { IoMdShare } from 'react-icons/io'

const BlogDetail = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    Promise.all([
      fetch(`https://dummyjson.com/products/${id}`).then((r) => r.json()),
      fetch('https://dummyjson.com/products?limit=100').then((r) => r.json()),
    ]).then(([product, allData]) => {
      setPost(product)
      const rel = allData.products
        .filter((p) => p.id !== product.id && p.category === product.category)
        .slice(0, 3)
      setRelated(rel)
      setLoading(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }, [id])

  const formatDate = (dateStr) => {
    if (!dateStr) return 'Jan 01, 2024'
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    })
  }

  if (loading) {
    return (
      <div className="py-32">
        <Container>
          <div className="animate-pulse max-w-3xl mx-auto">
            <div className="h-8 bg-offwhite rounded w-3/4 mb-6" />
            <div className="h-80 bg-offwhite rounded-2xl mb-8" />
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-4 bg-offwhite rounded w-full" />
              ))}
            </div>
          </div>
        </Container>
      </div>
    )
  }

  if (!post) return null

  return (
    <div>
      {/* Hero */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#1A1F1D 0%,#256A34 100%)' }}
      >
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
          style={{ background: '#e0a238' }}
        />
        <Container>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-white/50 font-karla text-sm mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/80 truncate max-w-xs">{post.title}</span>
            </div>

            {/* Category badge */}
            <span
              className="inline-block text-xs font-karla font-bold uppercase px-4 py-1 rounded-full mb-5"
              style={{ background: 'rgba(224,162,56,0.2)', color: '#e0a238' }}
            >
              {post.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center justify-center gap-6 text-white/60 font-karla text-sm">
              <span className="flex items-center gap-2">
                <FaCalendarAlt className="text-xs" />
                {formatDate(post.meta?.createdAt || post.reviews?.[0]?.date)}
              </span>
              <span className="flex items-center gap-2">
                <FaUser className="text-xs" />
                {post.reviews?.[0]?.reviewerName || 'Crudo Team'}
              </span>
              <span className="flex items-center gap-2">
                <FaTag className="text-xs" />
                {post.brand || post.category}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Article Body */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Flex className="gap-12 items-start">
              {/* Main Article */}
              <article className="flex-1">
                {/* Featured Image */}
                <div className="rounded-3xl overflow-hidden mb-10 shadow-lg">
                  <img
                    src={post.images?.[0] || post.thumbnail}
                    alt={post.title}
                    className="w-full h-96 object-cover"
                  />
                </div>

                {/* Stats bar */}
                <div className="flex items-center gap-6 mb-8 pb-8 border-b border-offwhite">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className="text-sm"
                          style={{ color: i < Math.round(post.rating) ? '#e0a238' : '#d1d5db' }}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-karla text-offblack">
                      {post.rating} ({post.reviews?.length || 0} reviews)
                    </span>
                  </div>
                  <span className="text-sm font-karla text-offblack">
                    Stock: {post.stock} units
                  </span>
                  <button className="ml-auto flex items-center gap-2 text-sm font-karla font-semibold text-secondary hover:text-primary transition-colors cursor-pointer">
                    <IoMdShare /> Share
                  </button>
                </div>

                {/* Article content */}
                <div className="prose max-w-none">
                  <p className="text-lg font-karla text-primary/80 leading-relaxed mb-6">
                    {post.description}
                  </p>

                  <div
                    className="rounded-2xl p-6 mb-8"
                    style={{ background: 'linear-gradient(135deg,rgba(37,106,52,0.06),rgba(224,162,56,0.06))' }}
                  >
                    <h2 className="text-2xl font-serif font-semibold text-secondary mb-3">
                      Why This Matters
                    </h2>
                    <p className="font-karla text-primary/70 leading-relaxed">
                      {post.title} is one of the most sought-after products in the{' '}
                      <strong className="text-secondary">{post.category}</strong> category.
                      Sourced from trusted suppliers, every detail of this product has been
                      carefully considered to ensure the highest quality for our customers.
                    </p>
                  </div>

                  <h2 className="text-2xl font-serif font-semibold text-primary mb-4">
                    Product Highlights
                  </h2>
                  <ul className="space-y-3 mb-8">
                    {[
                      `Brand: ${post.brand || 'Crudo Organics'}`,
                      `Category: ${post.category}`,
                      `Warranty: ${post.warrantyInformation || 'Standard warranty'}`,
                      `Shipping: ${post.shippingInformation || 'Ships in 3-5 days'}`,
                      `Return Policy: ${post.returnPolicy || '30-day returns'}`,
                      `Availability: ${post.availabilityStatus || 'In Stock'}`,
                    ].map((point, i) => (
                      <li key={i} className="flex items-start gap-3 font-karla text-primary/75">
                        <span
                          className="mt-1 w-2 h-2 rounded-full shrink-0"
                          style={{ background: '#256A34' }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Image gallery */}
                  {post.images?.length > 1 && (
                    <div className="grid grid-cols-2 gap-4 mb-10">
                      {post.images.slice(1, 3).map((img, i) => (
                        <div key={i} className="rounded-2xl overflow-hidden h-52">
                          <img src={img} alt={`view-${i}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                      ))}
                    </div>
                  )}

                  <h2 className="text-2xl font-serif font-semibold text-primary mb-4">
                    Customer Reviews
                  </h2>
                  <div className="space-y-5 mb-10">
                    {post.reviews?.map((review, i) => (
                      <div
                        key={i}
                        className="rounded-2xl p-5 border border-offwhite bg-offwhite/50"
                      >
                        <Flex className="items-center gap-3 mb-2">
                          <div
                            className="w-10 h-10 rounded-full flex justify-center items-center text-white font-karla font-bold text-sm"
                            style={{ background: '#256A34' }}
                          >
                            {review.reviewerName?.[0] || 'U'}
                          </div>
                          <div>
                            <p className="font-karla font-semibold text-primary text-sm">
                              {review.reviewerName}
                            </p>
                            <p className="font-karla text-offblack text-xs">
                              {formatDate(review.date)}
                            </p>
                          </div>
                          <div className="ml-auto flex">
                            {[...Array(5)].map((_, s) => (
                              <FaStar
                                key={s}
                                className="text-xs"
                                style={{ color: s < review.rating ? '#e0a238' : '#d1d5db' }}
                              />
                            ))}
                          </div>
                        </Flex>
                        <p className="font-karla text-primary/70 text-sm leading-relaxed">
                          {review.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation buttons */}
                <Flex className="justify-between pt-8 border-t border-offwhite">
                  <Link to="/blog">
                    <button className="flex items-center gap-2 text-sm font-karla font-semibold text-primary border border-offwhite px-5 py-3 rounded-full hover:border-secondary hover:text-secondary transition-all duration-300 cursor-pointer">
                      <FaArrowLeft className="text-xs" /> Back to Blog
                    </button>
                  </Link>
                  {related[0] && (
                    <Link to={`/blog/${related[0].id}`}>
                      <button className="flex items-center gap-2 text-sm font-karla font-semibold text-white px-5 py-3 rounded-full transition-all duration-300 cursor-pointer" style={{ background: '#256A34' }}>
                        Next Post <FaArrowRight className="text-xs" />
                      </button>
                    </Link>
                  )}
                </Flex>
              </article>
            </Flex>
          </div>
        </Container>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="pb-20" style={{ background: '#F5F5F5' }}>
          <Container>
            <div className="pt-16 pb-8 text-center">
              <Title text="Related Posts" className="pb-2" />
              <p className="text-sm font-karla text-offblack">More from the {post.category} category</p>
            </div>
            <Flex className="justify-center gap-8">
              {related.map((item) => (
                <Link key={item.id} to={`/blog/${item.id}`} className="group block">
                  <BlogCard
                    src={item.thumbnail}
                    date={formatDate(item.meta?.createdAt || item.reviews?.[0]?.date)}
                    title={item.title}
                  />
                </Link>
              ))}
            </Flex>
          </Container>
        </section>
      )}
    </div>
  )
}

export default BlogDetail
