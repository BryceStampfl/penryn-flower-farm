import React from 'react'
import '../../styles.css'
import Garden from '../../images/shovel.jpg'

const Jumbotron = () => {
    return (
        <div className='jumbotron '>
            <img src={Garden} className='image' />
        </div>

    )
}
export default Jumbotron