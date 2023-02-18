import React from 'react'
import './style.css'
import { Image, Text, View } from '@aws-amplify/ui-react'

export const ImageTextOverlay = ({ imageUrl, text }) => {

    return (
        <View
            className="container"
            margin={{ base: 'auto', medium: '1rem' }}

        >

            <Image className='image' src={imageUrl} />
            <View class="text-block">
                <Text className='text'>
                    {text}
                </Text>
            </View>

        </View>
    )
}
export default ImageTextOverlay