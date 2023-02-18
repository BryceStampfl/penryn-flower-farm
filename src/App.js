import React from 'react'
import './styles.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { View } from '@aws-amplify/ui-react';

import Banner from './components/banner';
import ProductContainer from './components/product/ProductContainer';
import Navbar from './components/navbar';
import About from './components/about';
import Login from './components/login';
import Admin from './components/admin'
import Subscription from './components/subscription';
import Home from './components/home';

const App = () => {
  return (
    <View id='ApplicationContainer'>
      <Banner />
      <Navbar />
      <View textAlign='center'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Flowers" element={<ProductContainer />} />
          <Route path="/Subscription" element={<Subscription />} />
          <Route path="/GiftCards" element={<Subscription />} />
          <Route path="/About" element={<About />} />

          <Route path="/Login" element={<Login />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
      </View>
    </View>
  )

}

export default App;
