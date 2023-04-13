import React from 'react'

import { Routes, Route } from "react-router-dom";

import About from '../about';
import Login from '../login';
import Admin from '../admin'
import Subscription from '../subscription';
import Home from '../home';
import PhotoGallery from '../photo-gallery';
import Flowers from '../flowers';
import FlowerPage from '../flowers/FlowerPage';
import Purchase from '../purchase';


const NavigationRoutes = () => {
    const [cart, setCart] = React.useState([])

    const addToCart = (data) => {
        setCart([...cart, data])
        console.log(cart)
    }

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Flowers" element={<Flowers />} />
            <Route path="/Flowers/:id" element={<FlowerPage addToCart={addToCart} />} />
            <Route path="/Purchase/" element={<Purchase cart={cart} />} />
            <Route path="/Subscription" element={<Subscription />} />
            <Route path="/GiftCards" element={<Subscription />} />
            <Route path="/About" element={<About />} />
            <Route path="/Gallery" element={<PhotoGallery />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Admin" element={<Admin />} />
        </Routes>
    )
}
export default NavigationRoutes