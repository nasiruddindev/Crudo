import React, { useState } from 'react'
import Container from '../components/Container'
import Input from '../components/Input'
import Button from '../components/Button'
import Title from '../components/Title'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'
import Logo from '../assets/logo.png'
import Image from '../components/Image'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // handle login logic
  }

  return (
    <section className="min-h-screen bg-offwhite flex items-center justify-center py-16">
      <Container>
        <div className="flex min-h-[80vh] rounded-3xl overflow-hidden shadow-2xl bg-white">

          {/* Left decorative panel */}
          <div
            className="hidden lg:flex w-5/12 flex-col justify-between p-12 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #256A34 0%, #1A1F1D 60%, #256A34 100%)',
            }}
          >
            {/* Decorative circles */}
            <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-white/5"></div>
            <div className="absolute -bottom-20 -left-10 w-80 h-80 rounded-full bg-white/5"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-white/5"></div>

            <div className="relative z-10 w-36">
              <Image src={Logo} />
            </div>

            <div className="relative z-10">
              <h1 className="text-4xl font-serif text-white font-semibold leading-snug mb-4">
                Welcome <br />
                <span className="text-yellow-400">Back!</span>
              </h1>
              <p className="text-white/70 font-karla text-base leading-relaxed">
                Sign in to access your orders, wishlist, and exclusive member benefits tailored just for you.
              </p>
            </div>

            <div className="relative z-10 flex gap-3">
              <div className="w-3 h-3 rounded-full bg-secondary"></div>
              <div className="w-3 h-3 rounded-full bg-white/40"></div>
              <div className="w-3 h-3 rounded-full bg-white/40"></div>
            </div>
          </div>

          {/* Right form panel */}
          <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-12">
            {/* Mobile logo */}
            <div className="lg:hidden w-28 mb-8 mx-auto">
              <Image src={Logo} />
            </div>

            <div className="mb-8">
              <Title text="Sign In" className="text-start" />
              <p className="text-offblack font-karla text-sm mt-2">
                Don&apos;t have an account?{' '}
                <Link
                  to="/signup"
                  className="text-secondary font-semibold hover:underline transition-all duration-200"
                >
                  Create one
                </Link>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              {/* Email */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-offblack text-base pointer-events-none">
                  <FaEnvelope />
                </span>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="pl-10!"
                  onChange={handleChange}
                />
              </div>

              {/* Password */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-offblack text-base pointer-events-none">
                  <FaLock />
                </span>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  className="pl-10! pr-12!"
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-offblack hover:text-secondary transition-colors duration-200 cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* Remember me & Forgot password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-secondary cursor-pointer"
                  />
                  <span className="text-sm text-offblack font-karla">Remember me</span>
                </label>
                <span className="text-sm text-secondary font-karla font-semibold hover:underline cursor-pointer transition-all duration-200">
                  Forgot Password?
                </span>
              </div>

              <Button text="SIGN IN" className="w-full mt-2 justify-center text-center" />

              {/* Divider */}
              <div className="flex items-center gap-4 my-1">
                <div className="flex-1 h-px bg-offwhite"></div>
                <span className="text-offblack text-xs font-karla">or continue with</span>
                <div className="flex-1 h-px bg-offwhite"></div>
              </div>

              {/* Social buttons */}
              <div className="flex gap-4">
                <button
                  type="button"
                  className="flex-1 flex items-center justify-center gap-2 border border-offwhite rounded-full py-3 text-sm font-karla font-semibold text-primary hover:bg-offwhite transition-all duration-300 cursor-pointer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google
                </button>
                <button
                  type="button"
                  className="flex-1 flex items-center justify-center gap-2 border border-offwhite rounded-full py-3 text-sm font-karla font-semibold text-primary hover:bg-offwhite transition-all duration-300 cursor-pointer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </button>
              </div>

            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Login
