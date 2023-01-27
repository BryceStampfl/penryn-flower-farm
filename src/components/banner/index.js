import React from 'react';

import Logo from '../../images/logo-text-3.png'


import { Image } from '@aws-amplify/ui-react';

const Banner = () => {
    return (
        <div id='banner' className='banner white'>
            {/* <Image src={Logo}
                objectFit='cover'
                objectPosition='50% 50%'
                height="40%" /> */}
            <img src={Logo} className='logo image' />
            {/* <p className='text-logo'>Penryn Flower Farm</p> */}

        </div>
    )
}
export default Banner