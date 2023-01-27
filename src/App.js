import React from 'react'
import './styles.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Banner from './components/banner';
import ProductContainer from './components/product/ProductContainer';
// import CardDisplay from './components/card-display'
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
import About from './components/about';
import Login from './components/login';
import Admin from './components/admin'

const App = () => {
  return (
    <div id='ApplicationContainer'>
      <Banner />
      <Navbar />
      <div className='container white '>
        <Routes>
          <Route path="/" element={<Jumbotron />} />
          <Route path="/Flowers" element={<ProductContainer />} />
          {/* <Route path="/Subscription" element={<CardDisplay />} /> */}
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
      </div>
    </div>
  )

}

export default App;
