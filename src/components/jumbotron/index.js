import React from 'react'
import '../../styles.css'
import Garden from '../../images/new/jumbo.jpg'

import { View, Image } from '@aws-amplify/ui-react'

const Jumbotron = () => {
    return (
        <Jumbotron2 />
        // <div className=''>
        //     <Image src={Garden} className='jumbotron' />
        // </div>
    )
}
export default Jumbotron


const Jumbotron2 = () => {
    //   direction = {{ base: 'column', medium: 'row' }
    return (
        <View
            textAlign="center"
            maxWidth={{ base: '', large: '1680px' }}
            margin={{ large: '0 auto 0 auto' }}

        >
            <Image
                textAlign="center"

                src={Garden}
                // className='jumbotron'
                maxHeight='100%'
                maxWidth='100%'
            />
        </View>
    )
}