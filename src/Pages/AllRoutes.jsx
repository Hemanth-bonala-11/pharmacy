import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import AllCatagory from './AllCatagory'
import Cart from './Cart'
import Home from './Home'
import IndivisualProduct from './IndivisualProduct'
import Products from './Products'
import ErrorComponents from '../Components/ErrorComponents'
import UploadSlider from '../Components/NavbarComponents/UploadSlider'
import Login from '../Components/NavbarComponents/LoginIndivisualSlider'
import Navigation from '../Components/Navigation/Navigation'
import AboutUs from '../Components/Navigation/AboutUs'

const AllRoutes = () => {
  return (
    <div>
        <Navigation/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route path="/healthcare" element={<AllCatagory/>}/>
            <Route path="/upload" element={<UploadSlider/>}/>
            <Route path="/healthcare/products" element={<Products/>}/>
            <Route path="/healthcare/products/:id" element={<IndivisualProduct/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/categories/:category" element={<AllCatagory/>}/>
            <Route  path="*" element={<ErrorComponents />} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default AllRoutes