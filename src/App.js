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
import PhotoGallery from './components/photo-gallery';

const App = () => {
  return (
    <View id='ApplicationContainer'>
      <Banner />
      <Navbar />
      <View
        textAlign='center'
        margin={{ base: '0 0 0 0', medium: '1em 1em 0 1em', xxl: '1em auto 0 auto', }}
        maxWidth={{ medium: '1680px' }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Flowers" element={<ProductContainer />} />
          <Route path="/Subscription" element={<Subscription />} />
          <Route path="/GiftCards" element={<Subscription />} />
          <Route path="/About" element={<About />} />
          <Route path="/Gallery" element={<PhotoGallery />} />

          <Route path="/Login" element={<Login />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
      </View>
    </View>
  )

}

export default App;
