import React from 'react';

import Logo from '../../images/logo-white.png'

const Banner = () => {
    return (
        <div id='banner' className='banner white'>
            <img src={Logo} className='logo' />
        </div>
    )
}
export default Banner