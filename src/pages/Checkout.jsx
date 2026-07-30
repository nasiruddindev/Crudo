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

const STEPS = ['Cart', 'Information', 'Payment']

const inputClass =
  'w-full border border-offwhite rounded-xl px-4 py-3.5 text-primary text-sm font-karla outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/10 transition-all duration-300 bg-white placeholder:text-offblack'

const labelClass = 'block text-primary text-xs font-karla font-bold mb-1.5 uppercase tracking-wide'

const Checkout = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.value)

  const [step, setStep] = useState(1) // 1 = Info, 2 = Payment
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [loading, setLoading] = useState(false)

  const [info, setInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States',
  })

  const [payment, setPayment] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  })

  const [errors, setErrors] = useState({})

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = total > 50 ? 0 : 5.99
  const tax = total * 0.08
  const grandTotal = total + shipping + tax

  const handleInfoChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handlePaymentChange = (e) => {
    let { name, value } = e.target
    if (name === 'cardNumber') value = value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim()
    if (name === 'expiry') {
      value = value.replace(/\D/g, '').slice(0, 4)
      if (value.length > 2) value = value.slice(0, 2) + '/' + value.slice(2)
    }
    if (name === 'cvv') value = value.replace(/\D/g, '').slice(0, 4)
    setPayment({ ...payment, [name]: value })
    setErrors({ ...errors, [name]: '' })
  }

  const validateInfo = () => {
    const newErrors = {}
    if (!info.firstName.trim()) newErrors.firstName = 'Required'
    if (!info.lastName.trim()) newErrors.lastName = 'Required'
    if (!info.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email required'
    if (!info.phone.trim()) newErrors.phone = 'Required'
    if (!info.address.trim()) newErrors.address = 'Required'
    if (!info.city.trim()) newErrors.city = 'Required'
    if (!info.zip.trim()) newErrors.zip = 'Required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validatePayment = () => {
    const newErrors = {}
    if (!payment.cardName.trim()) newErrors.cardName = 'Required'
    if (payment.cardNumber.replace(/\s/g, '').length < 16) newErrors.cardNumber = 'Enter valid 16-digit card number'
    if (!payment.expiry.match(/^\d{2}\/\d{2}$/)) newErrors.expiry = 'Enter MM/YY'
    if (payment.cvv.length < 3) newErrors.cvv = 'Enter valid CVV'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleContinue = () => {
    if (validateInfo()) setStep(2)
  }

  const handlePlaceOrder = () => {
    if (!validatePayment()) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setOrderPlaced(true)
      cartItems.forEach((item) => dispatch(removeItem(item)))
    }, 2000)
  }

  if (orderPlaced) {
    return (
      <section className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-6 max-w-md text-center px-6">
          <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center shadow-xl shadow-secondary/20 animate-[scaleIn_0.5s_ease-out]">
            <FaCheck className="text-white text-4xl" />
          </div>
          <h1 className="text-3xl font-bold font-karla text-primary">Order Confirmed!</h1>
          <p className="text-offblack font-karla text-base leading-relaxed">
            Thank you, <span className="text-primary font-semibold">{info.firstName}</span>! Your order has been
            placed successfully. A confirmation email will be sent to{' '}
            <span className="text-secondary font-semibold">{info.email}</span>.
          </p>
          <div className="bg-offwhite rounded-2xl px-8 py-5 w-full">
            <p className="text-offblack text-sm font-karla mb-1">Order Total</p>
            <p className="text-yellow text-3xl font-bold font-karla">${grandTotal.toFixed(2)}</p>
          </div>
          <Link to="/">
            <Button text="Continue Shopping" />
          </Link>
        </div>
      </section>
    )
  }

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
            <Link to="/cart" className="text-offblack hover:text-secondary transition-colors duration-300">
              Cart
            </Link>
            <span className="text-offblack">/</span>
            <span className="text-primary font-semibold">Checkout</span>
          </div>
        </Container>
      </div>

      <Container>
        {/* Page Header */}
        <div className="flex items-center justify-between pt-12 pb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
              <FaLock className="text-secondary text-lg" />
            </div>
            <div>
              <h1 className="text-3xl font-bold font-karla text-primary">Secure Checkout</h1>
              <p className="text-offblack text-sm font-karla mt-0.5">SSL encrypted & secure payment</p>
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

        {/* Step Indicator */}
        <div className="flex items-center gap-0 mb-10 pb-8 border-b border-offwhite">
          {STEPS.map((s, i) => (
            <React.Fragment key={i}>
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-karla font-bold transition-all duration-300 ${
                    i === 0
                      ? 'bg-secondary text-white'
                      : i === 1 && step >= 1
                      ? 'bg-secondary text-white'
                      : i === 2 && step === 2
                      ? 'bg-secondary text-white'
                      : 'bg-offwhite text-offblack'
                  }`}
                >
                  {i < step || (i === 0) ? <FaCheck className="text-[10px]" /> : i + 1}
                </div>
                <span
                  className={`text-sm font-karla font-semibold transition-colors duration-300 ${
                    (i === 0) || (i === 1 && step >= 1) || (i === 2 && step === 2)
                      ? 'text-primary'
                      : 'text-offblack'
                  }`}
                >
                  {s}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className={`flex-1 mx-3 h-0.5 rounded-full transition-all duration-500 ${
                    (i === 0 && step >= 1) || (i === 1 && step === 2) ? 'bg-secondary' : 'bg-offwhite'
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <Flex className="gap-10 items-start">
          {/* ─── Left: Forms ─── */}
          <div className="flex-1">
            {/* ── Step 1: Shipping Information ── */}
            {step === 1 && (
              <div className="animate-[fadeIn_0.4s_ease-out]">
                <h2 className="text-xl font-bold font-karla text-primary mb-6">
                  Shipping Information
                </h2>

                <div className="flex flex-col gap-5">
                  <Flex className="gap-4">
                    <div className="flex-1">
                      <label className={labelClass}>First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={info.firstName}
                        onChange={handleInfoChange}
                        placeholder="John"
                        className={`${inputClass} ${errors.firstName ? 'border-red-400' : ''}`}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-[11px] font-karla mt-1">{errors.firstName}</p>
                      )}
                    </div>
                    <div className="flex-1">
                      <label className={labelClass}>Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={info.lastName}
                        onChange={handleInfoChange}
                        placeholder="Doe"
                        className={`${inputClass} ${errors.lastName ? 'border-red-400' : ''}`}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-[11px] font-karla mt-1">{errors.lastName}</p>
                      )}
                    </div>
                  </Flex>

                  <div>
                    <label className={labelClass}>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={info.email}
                      onChange={handleInfoChange}
                      placeholder="john@example.com"
                      className={`${inputClass} ${errors.email ? 'border-red-400' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-[11px] font-karla mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={info.phone}
                      onChange={handleInfoChange}
                      placeholder="+1 (555) 000-0000"
                      className={`${inputClass} ${errors.phone ? 'border-red-400' : ''}`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-[11px] font-karla mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>Street Address</label>
                    <input
                      type="text"
                      name="address"
                      value={info.address}
                      onChange={handleInfoChange}
                      placeholder="123 Main Street, Apt 4B"
                      className={`${inputClass} ${errors.address ? 'border-red-400' : ''}`}
                    />
                    {errors.address && (
                      <p className="text-red-500 text-[11px] font-karla mt-1">{errors.address}</p>
                    )}
                  </div>

                  <Flex className="gap-4">
                    <div className="flex-1">
                      <label className={labelClass}>City</label>
                      <input
                        type="text"
                        name="city"
                        value={info.city}
                        onChange={handleInfoChange}
                        placeholder="New York"
                        className={`${inputClass} ${errors.city ? 'border-red-400' : ''}`}
                      />
                      {errors.city && (
                        <p className="text-red-500 text-[11px] font-karla mt-1">{errors.city}</p>
                      )}
                    </div>
                    <div className="flex-1">
                      <label className={labelClass}>State / Province</label>
                      <input
                        type="text"
                        name="state"
                        value={info.state}
                        onChange={handleInfoChange}
                        placeholder="NY"
                        className={inputClass}
                      />
                    </div>
                    <div className="w-32">
                      <label className={labelClass}>ZIP Code</label>
                      <input
                        type="text"
                        name="zip"
                        value={info.zip}
                        onChange={handleInfoChange}
                        placeholder="10001"
                        className={`${inputClass} ${errors.zip ? 'border-red-400' : ''}`}
                      />
                      {errors.zip && (
                        <p className="text-red-500 text-[11px] font-karla mt-1">{errors.zip}</p>
                      )}
                    </div>
                  </Flex>

                  <div>
                    <label className={labelClass}>Country</label>
                    <div className="relative">
                      <select
                        name="country"
                        value={info.country}
                        onChange={handleInfoChange}
                        className={`${inputClass} appearance-none pr-10 cursor-pointer`}
                      >
                        {['United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France', 'Japan'].map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                      <HiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-offblack pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    text="Continue to Payment →"
                    className="w-full justify-center text-center"
                    onClick={handleContinue}
                  />
                </div>
              </div>
            )}

            {/* ── Step 2: Payment ── */}
            {step === 2 && (
              <div className="animate-[fadeIn_0.4s_ease-out]">
                <h2 className="text-xl font-bold font-karla text-primary mb-6">
                  Payment Details
                </h2>

                {/* Shipping Summary */}
                <div className="bg-offwhite rounded-2xl p-5 mb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs text-offblack font-karla font-bold uppercase tracking-wide mb-1">Ship to</p>
                      <p className="text-primary text-sm font-karla font-semibold">
                        {info.firstName} {info.lastName}
                      </p>
                      <p className="text-offblack text-xs font-karla">
                        {info.address}, {info.city}, {info.state} {info.zip}
                      </p>
                      <p className="text-offblack text-xs font-karla">{info.email}</p>
                    </div>
                    <button
                      onClick={() => setStep(1)}
                      className="text-secondary text-xs font-karla font-bold hover:text-green-900 transition-colors cursor-pointer"
                    >
                      Edit
                    </button>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-7 h-7 rounded-full bg-secondary/10 flex items-center justify-center">
                    <FaCreditCard className="text-secondary text-xs" />
                  </div>
                  <p className="text-primary text-sm font-karla font-bold">Credit / Debit Card</p>
                </div>

                <div className="flex flex-col gap-5">
                  <div>
                    <label className={labelClass}>Cardholder Name</label>
                    <input
                      type="text"
                      name="cardName"
                      value={payment.cardName}
                      onChange={handlePaymentChange}
                      placeholder="John Doe"
                      className={`${inputClass} ${errors.cardName ? 'border-red-400' : ''}`}
                    />
                    {errors.cardName && (
                      <p className="text-red-500 text-[11px] font-karla mt-1">{errors.cardName}</p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>Card Number</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="cardNumber"
                        value={payment.cardNumber}
                        onChange={handlePaymentChange}
                        placeholder="0000 0000 0000 0000"
                        className={`${inputClass} pl-12 ${errors.cardNumber ? 'border-red-400' : ''}`}
                      />
                      <FaCreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-offblack text-sm" />
                    </div>
                    {errors.cardNumber && (
                      <p className="text-red-500 text-[11px] font-karla mt-1">{errors.cardNumber}</p>
                    )}
                  </div>

                  <Flex className="gap-4">
                    <div className="flex-1">
                      <label className={labelClass}>Expiry Date</label>
                      <input
                        type="text"
                        name="expiry"
                        value={payment.expiry}
                        onChange={handlePaymentChange}
                        placeholder="MM/YY"
                        className={`${inputClass} ${errors.expiry ? 'border-red-400' : ''}`}
                      />
                      {errors.expiry && (
                        <p className="text-red-500 text-[11px] font-karla mt-1">{errors.expiry}</p>
                      )}
                    </div>
                    <div className="flex-1">
                      <label className={labelClass}>CVV</label>
                      <div className="relative">
                        <input
                          type="password"
                          name="cvv"
                          value={payment.cvv}
                          onChange={handlePaymentChange}
                          placeholder="•••"
                          className={`${inputClass} ${errors.cvv ? 'border-red-400' : ''}`}
                        />
                      </div>
                      {errors.cvv && (
                        <p className="text-red-500 text-[11px] font-karla mt-1">{errors.cvv}</p>
                      )}
                    </div>
                  </Flex>
                </div>

                {/* Secure Notice */}
                <div className="flex items-center gap-2 mt-5 mb-8 px-4 py-3 bg-secondary/5 rounded-xl border border-secondary/10">
                  <FaLock className="text-secondary text-xs shrink-0" />
                  <p className="text-primary text-xs font-karla">
                    Your payment information is encrypted and secure. We never store your card details.
                  </p>
                </div>

                <Flex className="gap-4">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 py-3.5 rounded-full border-2 border-offwhite text-primary text-sm font-karla font-bold hover:border-secondary hover:text-secondary transition-all duration-300 cursor-pointer"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    disabled={loading}
                    className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full text-white text-sm font-karla font-bold transition-all duration-300 cursor-pointer shadow-lg ${
                      loading
                        ? 'bg-secondary/60 shadow-none'
                        : 'bg-secondary hover:bg-green-900 shadow-secondary/20 hover:shadow-secondary/40'
                    }`}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <FaLock className="text-xs" />
                        Place Order — ${grandTotal.toFixed(2)}
                      </>
                    )}
                  </button>
                </Flex>
              </div>
            )}
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
                      <Image src={item.image} className="object-contain w-full h-full" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-primary text-xs font-karla font-semibold truncate">{item.title}</p>
                      <p className="text-offblack text-[11px] font-karla">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-primary text-xs font-karla font-bold shrink-0">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 mb-4 pt-4 border-t border-white">
                <div className="flex justify-between">
                  <span className="text-offblack text-sm font-karla">Subtotal</span>
                  <span className="text-primary text-sm font-karla font-semibold">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-offblack text-sm font-karla">Shipping</span>
                  <span className={`text-sm font-karla font-semibold ${shipping === 0 ? 'text-secondary' : 'text-primary'}`}>
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-offblack text-sm font-karla">Tax (8%)</span>
                  <span className="text-primary text-sm font-karla font-semibold">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between py-4 border-t border-white">
                <span className="text-primary text-base font-karla font-bold">Total</span>
                <span className="text-yellow text-2xl font-bold font-karla">${grandTotal.toFixed(2)}</span>
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
                    <p className="text-primary text-xs font-karla font-medium">{b.text}</p>
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
