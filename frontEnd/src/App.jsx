import { BrowserRouter, Route, Routes } from "react-router-dom"
import Collection from "./pages/Collection"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Search from "./pages/Search"
import Profile from "./pages/Profile"
import Orders from "./pages/Order"
import ContextProvider from "./Context/ContextProvider"
import ScrollToTop from "./components/ScrollToTop"
import Product from "./pages/Product"
import Checkout from "./pages/Checkout"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Collection/:type" element={<Collection />}></Route>
            <Route path="/Product/:productID" element={<Product />}></Route>
            <Route path="/Search" element={<Search />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
            <Route path="/Profile" element={<Profile />}></Route>
            <Route path="/Orders" element={<Orders />}></Route>
            <Route path="/Checkout" element={<Checkout />}></Route>
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </>

  )
}
export default App