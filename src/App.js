import React from 'react'
import './styles.css'

import {
  Routes,
  Route,
} from "react-router-dom";

import { View } from '@aws-amplify/ui-react';

import Banner from './components/banner';
import Navbar from './components/navbar';
import About from './components/about';
import Login from './components/login';
import Admin from './components/admin'
import Subscription from './components/subscription';
import Home from './components/home';
import PhotoGallery from './components/photo-gallery';
import Flowers from './components/flowers';
import FlowerPage from './components/flowers/FlowerPage';
import Purchase from './components/purchase';

const App = () => {
  return (
    <View id='ApplicationContainer' marginBottom='3rem'>
      <Banner />
      <Navbar />
      <View
        textAlign='center'
        margin={{ base: '1rem 0 0 0', medium: '1em 1em 1em 1em', large: '1em auto 0 auto', xxl: '1em auto 0 auto', }}
        maxWidth={{ medium: '1280px' }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Flowers" element={<Flowers />} />
          <Route path="/Flowers/:id" element={<FlowerPage />} />

          <Route path="/Purchase/" element={<Purchase />} />


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
