import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Title from '../components/Title'
import Button from '../components/Button'
import Input from '../components/Input'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import { IoMdSearch } from 'react-icons/io'
import { FaTag, FaCalendarAlt, FaFire, FaArrowRight } from 'react-icons/fa'

const POSTS_PER_PAGE = 6

const BlogPage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products)
        setLoading(false)
      })
  }, [])

  // Derive unique categories from product categories
  const allCategories = ['All', ...new Set(products.map((p) => p.category))]

  // Filter by category and search
  const filtered = products.filter((p) => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCat && matchSearch
  })

  // Pagination
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE)
  const paginated = filtered.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat)
    setCurrentPage(1)
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  // Popular / Recent posts for sidebar
  const recentPosts = products.slice(0, 5)
  const popularPosts = products.slice(5, 10)

  const formatDate = (dateStr) => {
    if (!dateStr) return 'Jan 01, 2024'
    const d = new Date(dateStr)
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })
  }

  return (
    <div>
      {/* Hero Banner */}
      <section
        className="relative py-28 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A1F1D 0%, #256A34 100%)' }}
      >
        <div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-10"
          style={{ background: '#e0a238' }}
        />
        <div
          className="absolute -bottom-16 -right-24 w-80 h-80 rounded-full opacity-10"
          style={{ background: '#256A34' }}
        />

        <Container>
          <div className="text-center relative z-10">
            <span
              className="inline-block text-sm font-karla font-semibold uppercase tracking-widest px-4 py-1 rounded-full mb-5"
              style={{ background: 'rgba(224,162,56,0.18)', color: '#e0a238' }}
            >
              Our Journal
            </span>
            <h1 className="text-5xl font-serif font-bold text-white leading-tight mb-5">
              Fresh Stories &amp; <br />
              <span style={{ color: '#e0a238' }}>Farm Insights</span>
            </h1>
            <p className="text-white/60 font-karla text-base max-w-xl mx-auto">
              Discover tips, recipes, and stories straight from nature's finest farms. Stay
              nourished, stay inspired.
            </p>

            {/* Hero search */}
            <div className="mt-10 max-w-lg mx-auto relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search blog posts…"
                className="w-full pl-6 pr-14 py-4 rounded-full font-karla text-sm outline-none shadow-xl"
                style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}
              />
              <div
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex justify-center items-center"
                style={{ background: '#e0a238' }}
              >
                <IoMdSearch className="text-white text-xl" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Category Pills */}
      <section className="py-8 border-b border-offwhite sticky top-0 z-30 bg-white shadow-sm">
        <Container>
          <div className="flex gap-3 overflow-x-auto pb-1">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`shrink-0 px-5 py-2 rounded-full font-karla text-sm font-semibold capitalize transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'text-white shadow-md'
                    : 'text-primary bg-offwhite hover:bg-secondary/10 hover:text-secondary'
                }`}
                style={activeCategory === cat ? { background: '#256A34' } : {}}
              >
                {cat}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Main Content + Sidebar */}
      <section className="py-16">
        <Container>
          <Flex className="gap-10 items-start">
            {/* Blog Grid */}
            <div className="flex-1">
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="animate-pulse">
                      <div className="w-full h-56 rounded-xl bg-offwhite mb-4" />
                      <div className="h-4 bg-offwhite rounded w-1/3 mb-3" />
                      <div className="h-5 bg-offwhite rounded w-3/4 mb-2" />
                      <div className="h-4 bg-offwhite rounded w-1/2" />
                    </div>
                  ))}
                </div>
              ) : paginated.length === 0 ? (
                <div className="text-center py-24">
                  <p className="text-3xl font-serif text-offblack mb-3">No posts found</p>
                  <p className="text-sm font-karla text-offblack">
                    Try a different category or search term.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {paginated.map((item) => (
                    <Link key={item.id} to={`/blog/${item.id}`} className="group block">
                      <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white border border-offwhite">
                        {/* Thumbnail */}
                        <div className="relative h-56 overflow-hidden bg-offwhite flex justify-center items-center">
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <span
                            className="absolute top-4 left-4 text-xs font-karla font-bold uppercase px-3 py-1 rounded-full text-white"
                            style={{ background: '#256A34' }}
                          >
                            {item.category}
                          </span>
                        </div>

                        {/* Body */}
                        <div className="p-6">
                          <p
                            className="text-sm font-karla font-semibold pb-2 flex items-center gap-2"
                            style={{ color: '#e0a238' }}
                          >
                            <FaCalendarAlt className="text-xs" />
                            {formatDate(item.meta?.createdAt || item.reviews?.[0]?.date)}
                          </p>
                          <h3 className="text-xl font-serif font-semibold text-primary leading-snug pb-3 group-hover:text-secondary transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-sm font-karla text-offblack leading-relaxed pb-5 line-clamp-2">
                            {item.description}
                          </p>
                          <span
                            className="inline-flex items-center gap-2 text-sm font-karla font-semibold"
                            style={{ color: '#256A34' }}
                          >
                            Read More <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1 duration-300" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {!loading && totalPages > 1 && (
                <div className="flex justify-center gap-3 mt-14">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-5 py-2 rounded-full font-karla text-sm font-semibold border border-offwhite text-primary hover:border-secondary hover:text-secondary transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    ← Prev
                  </button>

                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-10 h-10 rounded-full font-karla text-sm font-semibold transition-all duration-300 cursor-pointer ${
                        currentPage === i + 1
                          ? 'text-white shadow-md'
                          : 'border border-offwhite text-primary hover:border-secondary hover:text-secondary'
                      }`}
                      style={currentPage === i + 1 ? { background: '#256A34' } : {}}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-5 py-2 rounded-full font-karla text-sm font-semibold border border-offwhite text-primary hover:border-secondary hover:text-secondary transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    Next →
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="w-80 shrink-0 space-y-8 sticky top-28">
              {/* Search */}
              <div className="bg-offwhite rounded-2xl p-6">
                <h4 className="text-lg font-serif font-semibold text-primary mb-4">Search</h4>
                <div className="relative">
                  <Input type="text" placeholder="Search posts…" onChange={handleSearch} />
                  <IoMdSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-offblack text-xl" />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-offwhite rounded-2xl p-6">
                <h4 className="text-lg font-serif font-semibold text-primary mb-4 flex items-center gap-2">
                  <FaTag className="text-secondary text-sm" /> Categories
                </h4>
                <ul className="space-y-2">
                  {allCategories.slice(0, 10).map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => handleCategoryChange(cat)}
                        className={`w-full text-left px-4 py-2 rounded-lg font-karla text-sm font-medium capitalize transition-all duration-300 cursor-pointer ${
                          activeCategory === cat
                            ? 'text-white'
                            : 'text-primary hover:text-secondary hover:bg-secondary/10'
                        }`}
                        style={activeCategory === cat ? { background: '#256A34' } : {}}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-offwhite rounded-2xl p-6">
                <h4 className="text-lg font-serif font-semibold text-primary mb-4 flex items-center gap-2">
                  <FaCalendarAlt className="text-secondary text-sm" /> Recent Posts
                </h4>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <Link key={post.id} to={`/blog/${post.id}`} className="flex gap-3 group items-center">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-white shrink-0">
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-karla text-offblack">
                          {formatDate(post.meta?.createdAt || post.reviews?.[0]?.date)}
                        </p>
                        <p className="text-sm font-karla font-semibold text-primary leading-snug group-hover:text-secondary transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Posts */}
              <div className="bg-offwhite rounded-2xl p-6">
                <h4 className="text-lg font-serif font-semibold text-primary mb-4 flex items-center gap-2">
                  <FaFire className="text-yellow text-sm" /> Popular Posts
                </h4>
                <div className="space-y-4">
                  {popularPosts.map((post, i) => (
                    <Link key={post.id} to={`/blog/${post.id}`} className="flex gap-3 group items-start">
                      <span
                        className="text-2xl font-serif font-bold shrink-0 leading-none"
                        style={{ color: i === 0 ? '#e0a238' : '#95959560' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-sm font-karla font-semibold text-primary leading-snug group-hover:text-secondary transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

             
            </aside>
          </Flex>
        </Container>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20" style={{ background: '#F5F5F5' }}>
        <Container>
          <div className="text-center">
            <Title text="Explore More Stories" className="pb-3" />
            <p className="text-base text-offblack font-karla font-medium max-w-lg mx-auto pb-8">
              From farm to table — read our latest guides, recipes and sustainability news.
            </p>
            <Button text="View All Posts" />
          </div>
        </Container>
      </section>
    </div>
  )
}

export default BlogPage
