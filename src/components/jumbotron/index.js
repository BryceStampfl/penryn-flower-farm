import React from 'react'
import '../../styles.css'
import Garden from '../../images/Garden.jpg'

import { Image } from '@aws-amplify/ui-react'

const Jumbotron = () => {
    return (
        <div className=''>
            <Image src={Garden} className='jumbotron' />
        </div>
    )
}
export default Jumbotron