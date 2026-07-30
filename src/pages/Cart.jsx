import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, removeItem } from '../slices/addToCartSlice'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/Button'
import Image from '../components/Image'
import { RiDeleteBinLine } from 'react-icons/ri'
import { FaShoppingCart, FaArrowLeft, FaTruck, FaShieldAlt, FaLeaf } from 'react-icons/fa'
import { HiMinus, HiPlus } from 'react-icons/hi'

const Cart = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.value)

  const [total, setTotal] = useState(0)

  useEffect(() => {
    let sum = 0
    cartItems.forEach((item) => {
      sum += item.price * item.quantity
    })
    setTotal(sum)
  }, [cartItems])

  const handleIncrement = (item) => dispatch(increment(item))
  const handleDecrement = (item) => dispatch(decrement(item))
  const handleRemove = (item) => dispatch(removeItem(item))

  const shipping = total > 50 ? 0 : 5.99
  const tax = total * 0.08
  const grandTotal = total + shipping + tax

  return (
    <section className="min-h-screen bg-white pb-24">
      {/* Breadcrumb */}
      <div className="bg-offwhite py-5">
        <Container>
          <div className="flex items-center gap-2 font-karla text-sm">
            <Link to="/" className="text-offblack hover:text-secondary transition-colors duration-300">
              Home
            </Link>
            <span className="text-offblack">/</span>
            <span className="text-primary font-semibold">Cart</span>
          </div>
        </Container>
      </div>

      <Container>
        {/* Page Header */}
        <Flex className="flex items-center justify-between pt-12 pb-8 border-b border-offwhite">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
              <FaShoppingCart className="text-secondary text-xl" />
            </div>
            <div>
              <h1 className="text-3xl font-bold font-karla text-primary">Shopping Cart</h1>
              <p className="text-offblack text-sm font-karla mt-0.5">
                {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
              </p>
            </div>
          </div>
          <Link
            to="/"
            className="flex items-center gap-2 text-secondary text-sm font-karla font-semibold hover:text-green-900 transition-colors duration-300"
          >
            <FaArrowLeft className="text-xs" />
            Continue Shopping
          </Link>
        </Flex>

        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <div className="flex flex-col items-center justify-center py-28 gap-6">
            <div className="w-28 h-28 rounded-full bg-offwhite flex items-center justify-center">
              <FaShoppingCart className="text-offblack text-5xl" />
            </div>
            <h2 className="text-2xl font-bold font-karla text-primary">Your cart is empty</h2>
            <p className="text-offblack font-karla text-base text-center max-w-sm">
              Looks like you haven't added anything yet. Browse our fresh products and fill up your cart!
            </p>
            <Link to="/">
              <Button text="Start Shopping" />
            </Link>
          </div>
        ) : (
          <Flex className="gap-10 pt-10 items-start">
            {/* ─── Left: Cart Items ─── */}
            <div className="flex-1">
              <div className="flex flex-col gap-5">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-6 bg-white border border-offwhite rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 group"
                  >
                    {/* Product Image */}
                    <div className="w-24 h-24 rounded-xl bg-offwhite flex items-center justify-center shrink-0 overflow-hidden p-2 group-hover:bg-secondary/5 transition-colors duration-300">
                      <Image src={item.image} className="object-contain w-full h-full" />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-primary text-base font-bold font-karla truncate mb-1">
                        {item.title}
                      </h3>
                      <p className="text-yellow text-lg font-bold font-karla">${item.price}</p>
                      <p className="text-offblack text-xs font-karla mt-1">
                        Subtotal:{' '}
                        <span className="text-primary font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center border-2 border-offwhite rounded-full overflow-hidden shrink-0">
                      <button
                        onClick={() => handleDecrement(item)}
                        className="w-10 h-10 flex items-center justify-center text-primary hover:bg-offwhite transition-colors duration-300 cursor-pointer"
                      >
                        <HiMinus className="text-sm" />
                      </button>
                      <span className="w-10 text-center text-sm font-karla font-bold text-primary">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleIncrement(item)}
                        className="w-10 h-10 flex items-center justify-center text-primary hover:bg-offwhite transition-colors duration-300 cursor-pointer"
                      >
                        <HiPlus className="text-sm" />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => handleRemove(item)}
                      className="w-10 h-10 rounded-full border border-offwhite flex items-center justify-center text-offblack hover:border-red-300 hover:text-red-500 hover:bg-red-50 transition-all duration-300 cursor-pointer shrink-0"
                    >
                      <RiDeleteBinLine className="text-base" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="flex gap-6 mt-10 pt-8 border-t border-offwhite">
                {[
                  { icon: <FaLeaf />, label: '100% Organic', sub: 'Certified Fresh' },
                  { icon: <FaTruck />, label: 'Free Delivery', sub: 'Orders over $50' },
                  { icon: <FaShieldAlt />, label: 'Quality Assured', sub: 'Satisfaction Guaranteed' },
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary text-sm shrink-0">
                      {badge.icon}
                    </div>
                    <div>
                      <p className="text-primary text-xs font-karla font-bold">{badge.label}</p>
                      <p className="text-offblack text-[10px] font-karla">{badge.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ─── Right: Order Summary ─── */}
            <div className="w-88 shrink-0">
              <div className="bg-offwhite rounded-2xl p-7 sticky top-8">
                <h2 className="text-xl font-bold font-karla text-primary mb-6 pb-4 border-b border-white">
                  Order Summary
                </h2>

                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-offblack text-sm font-karla">
                      Subtotal ({cartItems.length} items)
                    </span>
                    <span className="text-primary text-sm font-karla font-semibold">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-offblack text-sm font-karla">Shipping</span>
                    <span className={`text-sm font-karla font-semibold ${shipping === 0 ? 'text-secondary' : 'text-primary'}`}>
                      {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-offblack text-sm font-karla">Tax (8%)</span>
                    <span className="text-primary text-sm font-karla font-semibold">
                      ${tax.toFixed(2)}
                    </span>
                  </div>
                </div>

                {total < 50 && (
                  <div className="bg-yellow/10 border border-yellow/30 rounded-xl px-4 py-3 mb-5">
                    <p className="text-primary text-xs font-karla font-medium">
                      Add{' '}
                      <span className="text-yellow font-bold">${(50 - total).toFixed(2)}</span>{' '}
                      more for free shipping!
                    </p>
                    <div className="mt-2 h-1.5 bg-white rounded-full overflow-hidden">
                      <div
                        className="h-full bg-secondary rounded-full transition-all duration-500"
                        style={{ width: `${Math.min((total / 50) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                )}

                <div className="flex justify-between py-4 border-t border-white mb-6">
                  <span className="text-primary text-base font-karla font-bold">Total</span>
                  <span className="text-yellow text-2xl font-bold font-karla">
                    ${grandTotal.toFixed(2)}
                  </span>
                </div>

                <Link to="/checkout">
                  <Button text="Proceed to Checkout" className="w-full justify-center text-center" />
                </Link>

                <p className="text-offblack text-[11px] font-karla text-center mt-4 leading-relaxed">
                  Secure checkout • SSL encrypted • 30-day returns
                </p>
              </div>
            </div>
          </Flex>
        )}
      </Container>
    </section>
  )
}

export default Cart
