import React from 'react'
import '../../styles.css'
import Garden from '../../images/Zinea.jpg'

import { Image } from '@aws-amplify/ui-react';


const Jumbotron = () => {
    return (
        <Image src={Garden} />

    )
}
export default Jumbotron