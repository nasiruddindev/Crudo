
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Home from './pages/Home'
import RootLayout from './layouts/RootLayout'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductDetailsPage from './pages/ProductDetailsPage'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="contact" element={<Contact />}></Route>
      <Route path="details/:id" element={<ProductDetailsPage />}></Route>
      <Route path="cart" element={<Cart />}></Route>
      <Route path="checkout" element={<Checkout />}></Route>
    </Route>
  )
)

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
