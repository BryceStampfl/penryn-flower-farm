import React from 'react'
import { View, Image, Text } from '@aws-amplify/ui-react'

import './style.css'
import basket from '../../images/basket.jpg'

const Subscription = () => {

    return (
        <View
            maxWidth='1540px'
            position='relative'
            className='container'
        >
            <Image src={basket} />
            <View className='text-block'>
                <Text backgroundColor='#F7F7F7' className='text'>Get flowers delivered monthly!  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </Text>

            </View>
        </View>
    )
}
export default Subscription