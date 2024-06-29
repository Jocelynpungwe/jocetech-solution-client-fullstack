import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {
  HomePage,
  AboutPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
  ProductsPage,
  SingleProductPage,
  RegistrationOrLoginPage,
  PaymentSuccessfullPage,
  SettingPage,
} from './pages'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationOrLoginPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:id" element={<SingleProductPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route
          path="payment-successfull"
          element={<PaymentSuccessfullPage />}
        />
        <Route path="setting" element={<SettingPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-center" />
    </BrowserRouter>
  )
}

export default App
