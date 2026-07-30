import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/Button'
import Image from '../components/Image'
import { removeItem } from '../slices/addToCartSlice'
import {
  FaCheck,
  FaTruck,
  FaShieldAlt,
  FaLeaf,
  FaLock,
  FaCreditCard,
  FaArrowLeft,
} from 'react-icons/fa'
import { HiChevronDown } from 'react-icons/hi'
import Input from '../components/Input'

const inputClass =
  'w-full border border-offwhite rounded-xl px-4 py-3.5 text-primary text-sm font-karla outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/10 transition-all duration-300 bg-white placeholder:text-offblack'

const labelClass =
  'block text-primary text-xs font-karla font-bold mb-1.5 uppercase tracking-wide'

const Checkout = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.value)

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  const shipping = total > 50 ? 0 : 5.99
  const tax = total * 0.08
  const grandTotal = total + shipping + tax

  return (
    <section className="min-h-screen bg-white pb-24">
      {/* Breadcrumb */}
      <div className="bg-offwhite py-5">
        <Container>
          <div className="flex items-center gap-2 font-karla text-sm">
            <Link
              to="/"
              className="text-offblack hover:text-secondary transition-colors duration-300"
            >
              Home
            </Link>
            <span className="text-offblack">/</span>
            <Link
              to="/cart"
              className="text-offblack hover:text-secondary transition-colors duration-300"
            >
              Cart
            </Link>
            <span className="text-offblack">/</span>
            <span className="text-primary font-semibold">Checkout</span>
          </div>
        </Container>
      </div>

      <Container>
        {/* Page Header */}
        <div className="flex items-center justify-between pt-12 pb-20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
              <FaLock className="text-secondary text-lg" />
            </div>
            <div>
              <h1 className="text-3xl font-bold font-karla text-primary">
                Secure Checkout
              </h1>
              <p className="text-offblack text-sm font-karla mt-0.5">
                SSL encrypted & secure payment
              </p>
            </div>
          </div>
          <Link
            to="/cart"
            className="flex items-center gap-2 text-secondary text-sm font-karla font-semibold hover:text-green-900 transition-colors duration-300"
          >
            <FaArrowLeft className="text-xs" />
            Back to Cart
          </Link>
        </div>

        <Flex className="gap-10 items-start">
          {/* ─── Left: Forms ─── */}
          <div className="flex-1">
            <div className="animate-[fadeIn_0.4s_ease-out]">
              <h2 className="text-xl font-bold font-karla text-primary mb-6">
                Shipping Information
              </h2>

              <div className="flex flex-col gap-5">
                <Flex className="gap-4">
                  <div className="flex-1">
                    <label className={labelClass}>First Name</label>
                    <Input type="text" placeholder="John" />
                  </div>
                  <div className="flex-1">
                    <label className={labelClass}>Last Name</label>
                    <Input type="text" placeholder="Doe" />
                  </div>
                </Flex>

                <div>
                  <label className={labelClass}>Email Address</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>

                <div>
                  <label className={labelClass}>Phone Number</label>
                  <Input type="tel" placeholder="+1 (555) 000-0000" />
                </div>

                <div>
                  <label className={labelClass}>Street Address</label>
                  <Input type="text" placeholder="123 Main Street, Apt 4B" />
                </div>

                <Flex className="gap-4">
                  <div className="flex-1">
                    <label className={labelClass}>City</label>
                    <Input type="text" placeholder="New York" />
                  </div>
                  <div className="flex-1">
                    <label className={labelClass}>State / Province</label>
                    <Input type="text" placeholder="NY" />
                  </div>
                  <div className="w-32">
                    <label className={labelClass}>ZIP Code</label>
                    <Input type="text" placeholder="10001" />
                  </div>
                </Flex>
              </div>

              <div className="mt-8">
                <Button
                  text="Continue to Payment →"
                  className="w-full justify-center text-center"
                />
              </div>
            </div>
          </div>

          {/* ─── Right: Order Summary ─── */}
          <div className="w-88 shrink-0">
            <div className="bg-offwhite rounded-2xl p-7 sticky top-8">
              <h2 className="text-lg font-bold font-karla text-primary mb-5 pb-4 border-b border-white">
                Order Summary ({cartItems.length} items)
              </h2>

              {/* Cart Items Mini List */}
              <div className="flex flex-col gap-4 mb-6 max-h-64 overflow-y-auto pr-1">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 overflow-hidden p-1 border border-white shadow-sm">
                      <Image
                        src={item.image}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-primary text-xs font-karla font-semibold truncate">
                        {item.title}
                      </p>
                      <p className="text-offblack text-[11px] font-karla">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="text-primary text-xs font-karla font-bold shrink-0">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 mb-4 pt-4 border-t border-white">
                <div className="flex justify-between">
                  <span className="text-offblack text-sm font-karla">
                    Subtotal
                  </span>
                  <span className="text-primary text-sm font-karla font-semibold">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-offblack text-sm font-karla">
                    Shipping
                  </span>
                  <span
                    className={`text-sm font-karla font-semibold ${shipping === 0 ? 'text-secondary' : 'text-primary'}`}
                  >
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-offblack text-sm font-karla">
                    Tax (8%)
                  </span>
                  <span className="text-primary text-sm font-karla font-semibold">
                    ${tax.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="flex justify-between py-4 border-t border-white">
                <span className="text-primary text-base font-karla font-bold">
                  Total
                </span>
                <span className="text-yellow text-2xl font-bold font-karla">
                  ${grandTotal.toFixed(2)}
                </span>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-col gap-3 mt-5 pt-5 border-t border-white">
                {[
                  { icon: <FaShieldAlt />, text: 'SSL Secure Payment' },
                  { icon: <FaTruck />, text: 'Fast Delivery' },
                  { icon: <FaLeaf />, text: '100% Organic Certified' },
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary text-[10px] shrink-0">
                      {b.icon}
                    </div>
                    <p className="text-primary text-xs font-karla font-medium">
                      {b.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Checkout
