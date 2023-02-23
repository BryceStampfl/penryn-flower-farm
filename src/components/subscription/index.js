import React from 'react'
import ImageTextOverlay from '../imageTextOverlay'
import shovel from '../../images/shovel.jpg'
import { View } from '@aws-amplify/ui-react'

const Subscription = () => {

    return (
        <View
            // className='container'
            minWidth='10px'
        >
            <ImageTextOverlay imageUrl={shovel} text="Looking to have flowers delivered monthly? Sign up for our subscription service and get flowers every month!" />
        </View>
    )
}
export default Subscription