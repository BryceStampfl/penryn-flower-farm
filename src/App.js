import React from 'react'
import './styles.css'
import Jumbotron from './components/jumbotron';
import CardDisplay from './components/card-display';
import Navbar from './components/navbar';
import About from './components/about'

const App = () => {
  return (
    <div id='ApplicationContainer'>

      <div id='MainContentContainer' className='container'>
        <Navbar />
      </div>
        <Jumbotron />
        <div id='MainContentContainer' className='container'>
        <CardDisplay />
        </div>
        <About />

    </div>
  )

}

export default App;
