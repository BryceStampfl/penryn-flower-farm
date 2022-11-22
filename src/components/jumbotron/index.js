import React from 'react'
import  '../../styles.css'
import Garden from '../../images/shovel.jpg'

const Jumbotron = () => {
    return(
        <div className='jumbotron font'>
            <img src={Garden} />
        </div>
    )
}
export default Jumbotron