import React from 'react'
import SunFlowers from '../../images/SunFlowers.png'

const Card = () => {
    return (
        <div className='card-container'>
            <div className='card-header font'>
                <p>Sunflower</p>
            </div>

            <div className='overlay'>
                <div className='card-text font'>
                    <p>$10</p>
                </div>
                <img src={SunFlowers} className='card-image image' />
            </div>
        </div>
    )
}
export default Card

