import React from 'react'
import '../../styles.css'
import Garden from '../../images/Zinea.jpg'

import { Image } from '@aws-amplify/ui-react';


const Jumbotron = () => {
    return (
        <div className='jumbotron '>
            {/* <img src={Garden} className='image' /> */}
            <Image src={Garden} height='70%' />
        </div>

    )
}
export default Jumbotron