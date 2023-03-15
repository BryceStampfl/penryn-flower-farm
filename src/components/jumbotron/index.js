import React from 'react'
import Garden from '../../images/new/jumbo2.jpg'
import { View, Image } from '@aws-amplify/ui-react'

const Jumbotron = () => {
    return (
        <View
            textAlign="center"
            margin={{ base: '0 auto 1rem auto', small: '0 auto 0.5rem auto' }}
        >
            <Image
                textAlign="center"
                src={Garden}

                maxHeight='100%'

                maxWidth='100%'
            />
        </View>
    )
}
export default Jumbotron