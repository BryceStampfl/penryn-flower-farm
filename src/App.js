import React from 'react'
import './styles.css'
import { View } from '@aws-amplify/ui-react';
import { Toaster } from 'react-hot-toast';

import NavigationRoutes from './components/navigation-routes/'
import TopNavbar from './components/top-navbar';
import Banner from './components/banner'
import Navbar from './components/navbar'
import Contact from './components/contact';

const App = () => {
  const [itemsInCart, setItemsInCart] = React.useState(0)


  return (
    <View id='ApplicationContainer' marginBottom='3rem'>
      <TopNavbar />
      <Banner />
      <Navbar />
      <View
        textAlign='center'
        margin={{ base: '0 0 0 0', medium: '1em 1em 1em 1em', large: '1em auto 0 auto', xxl: '1em auto 0 auto', }}
        // maxWidth={{ medium: '1540px' }}
        maxWidth={{ medium: '1280px' }}

      >
        <NavigationRoutes />
        <Contact />


        <Toaster
          toastOptions={{
            style: {
              fontSize: '1.25rem'
            }
          }}

        />
      </View>
    </View>
  )

}

export default App;
