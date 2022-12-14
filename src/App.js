import React from 'react'
import './styles.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Banner from './components/banner';
import CardDisplay from './components/card-display'
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';


const App = () => {
  return (
    <div id='ApplicationContainer' className='container  '>
      <Banner />
      <Navbar />
      <div className='content-container white '>
        <Routes>
          <Route path="/" element={<Jumbotron />} />
          <Route path="/Flowers" element={<CardDisplay />} />
          <Route path="/Subscription" element={<CardDisplay />} />
        </Routes>

      </div>



    </div>
  )

}

export default App;
