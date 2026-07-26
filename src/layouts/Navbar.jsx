import React, { useEffect, useRef, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { IoMdSearch } from 'react-icons/io'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import { MdOutlineManageAccounts } from 'react-icons/md'
import { FaRegHeart, FaShoppingCart } from 'react-icons/fa'
import ListItem from '../components/ListItem'
import { Link } from 'react-router-dom'
import { RxCross2 } from 'react-icons/rx'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, removeItem } from '../slices/addToCartSlice'

const Navbar = () => {
  const [alldata, setAlldata] = useState([])

  // search box funtionallity

  let [input, setInput] = useState([])
  let [search, setSearch] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setAlldata(data.products))
  }, [])

  const handleSearch = (e) => {
    setInput(e.target.value)
    const search = alldata.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    )
    setSearch(search)
  }

  const searchRef = useRef(null)
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    let handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target.value)) {
        setShowSearch(false)
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [])


  // Add To cart Functionallity

  const [cartOpen,setCartOpen] = useState(false)
  let data = useSelector((state)=>state.cart.value)

  const dispatch = useDispatch()

  const handleIncrement = (item) => {
    dispatch(increment(item))
  }
  const handleDecrement = (item) => {
    dispatch(decrement(item))
  }

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item))
  }

  let [total,setTotal] = useState(0)
  useEffect(()=>{
    let total=0;
    data.map((item)=>{
      total+=item.price*item.quantity
    })
    setTotal(total)
  },[data])


  return (
    <nav>
      <Container>
        <Flex className=" items-center py-8 border-b border-offwhite">
          <div className="relative w-4/12">
            <div className=" w-90 bg-offwhite rounded-full flex p-2">
              <input
                value={input}
                className="flex-1 pl-4 outline-none"
                type="text"
                placeholder="Search Product"
                onChange={handleSearch}
                onFocus={() => setShowSearch(true)}
              />
              <div className="w-10 h-10 rounded-full bg-secondary flex justify-center items-center">
                <IoMdSearch className="text-white text-2xl" />
              </div>

              {search.length > 0 && input.length > 0 && showSearch && (
                <div
                  ref={searchRef}
                  className="absolute top-18 left-0 w-full bg-white/80 backdrop-blur-md rounded-lg py-3 px-2 z-10 shadow-xl border border-offwhite"
                >
                  {search.map((item, index) => (
                    <ul>
                      <Link
                        to={`/details/${item.id}`}
                        onClick={() => {
                          setInput(item.title)
                          setSearch([])
                        }}
                      >
                        <li className="text-primary text-lg font-semibold py-3 px-5 rounded-lg hover:bg-secondary/10 hover:text-secondary duration-300 cursor-pointer">
                          {item.title}
                        </li>
                      </Link>
                    </ul>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="w-4/12 flex justify-center">
            <Image src={Logo} />
          </div>

          <div className="relative w-4/12 flex gap-5 justify-end">
            <div className="h-12 w-12 rounded-full border border-offwhite flex justify-center items-center">
              <MdOutlineManageAccounts className="text-black/70 text-2xl" />
            </div>
            <div className="h-12 w-12 rounded-full border border-offwhite flex justify-center items-center">
              <FaRegHeart className="text-black/70 text-2xl" />
            </div>

            {/* Cart Functionallity start */}
            <div
             onClick={()=>setCartOpen(!cartOpen)}
             className="relative h-12 w-12 rounded-full border border-offwhite flex justify-center items-center cursor-pointer">
              <FaShoppingCart className="text-black/70 text-2xl" />

              <div className='absolute top-0 right-0 h-4 w-4 bg-secondary rounded-full text-white flex justify-center items-center'><p className='text-xs'>{data.length}</p></div>
            </div>

            {
              cartOpen &&
              <div className="absolute top-3 left-0 z-50 w-full my-10 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden font-pop">
              {/* 1. Header Section */}
              <header className="bg-linear-to-r from-sky-100 via-purple-100 to-pink-100 p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold pb-1 text-slate-800 tracking-tight">
                    Your Cart
                  </h2>
                  <p className="text-xs font-medium text-slate-500">
                    {`${data.length} items in your cart`}
                  </p>
                </div>

                <button
                onClick={()=>setCartOpen(!cartOpen)}
                className="w-9 h-9 rounded-full bg-white/60 hover:bg-white cursor-pointer  flex items-center justify-center transition-colors shadow-sm">
                  <RxCross2 className="text-3xl text-black/60" />
                </button>
              </header>
              {/* 2. Scrollable Cart Items List */}
              <div className="max-h-125 overflow-y-auto divide-y divide-slate-100 px-3 py-2 custom-scrollbar">
                {/* Item 1 */}

                {
                  data.map((item,index)=>(
                    <div key={index} className="py-5 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 shrink-0 overflow-hidden p-1">
                    <Image src={item.image} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-slate-800 truncate">
                      {item.title}
                    </h3>
                    <span className="text-sm font-semibold text-slate-900">
                      ${item.price}
                    </span>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2">
                      {/* Quantity Selector */}
                      <div className="flex items-center bg-slate-100 rounded-xl px-2 py-1 cursor-pointer">
                        <button
                         onClick={()=>handleDecrement(item)}
                         className="text-slate-500  px-1 font-medium text-base">
                          -
                        </button>
                        <span className="text-base font-bold text-slate-800 px-2">{item.quantity}</span>
                        <button
                         onClick={()=>handleIncrement(item)}
                         className="text-slate-500  px-1 font-medium text-base cursor-pointer">
                          +
                        </button>
                      </div>

                      {/* Trash Button */}
                      <button onClick={()=>handleRemoveItem(item)} className="text-slate-600 text-xl cursor-pointer hover:text-rose-500 p-1 transition-colors">
                        <RiDeleteBinLine />
                      </button>
                    </div>
                    <p className="text-base text-slate-500 font-medium ">
                      ${(item.price*item.quantity).toFixed(2)}
                      <span className="font-bold text-slate-700 pl-2"></span>
                    </p>
                  </div>
                </div>
                  ))
                }
              </div>
              {/* 3. Footer Section (Modified Layout & Soft Light Aesthetic) */}
              {
                data.length> 0?
                <footer className="py-6 px-2 bg-slate-50 border-t border-slate-100 flex flex-col gap-4">
                {/* Total Price Display */}
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    Total
                  </span>
                  <span className="text-2xl font-black text-slate-900 tracking-tight">
                    ${total.toFixed(2)}
                  </span>
                </div>

                {/* Action Buttons arranged side-by-side */}
                <div className="flex justify-between mt-5">
                  <Link to="/cart">
                    <button className="py-4 px-5 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-bold text-base uppercase tracking-wider rounded-xl shadow-sm transition-all text-center cursor-pointer">
                      View Cart
                    </button>
                  </Link>

                  <Link to="/checkout">
                    <button className=" py-4 px-5 bg-linear-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold text-base uppercase rounded-xl shadow-md  transition-all text-center cursor-pointer ">
                      <span>Proceed to Checkout</span>
                    </button>
                  </Link>
                </div>
              </footer>:

              <p className="text-3xl font-pop text-black text-center py-6 font-semibold">
                Your Cart is Empty
              </p>
              }

            </div>
            }
          </div>
        </Flex>

        <ul className="flex justify-center gap-x-25 py-6 ">
          <Link to="/">
            <ListItem text="Home" />
          </Link>
          <Link to="/about">
            <ListItem text="About" />
          </Link>
          <Link to="/contact">
            <ListItem text="Contact" />
          </Link>
          <ListItem text="Blog" />
        </ul>
      </Container>
    </nav>
  )
}

export default Navbar
