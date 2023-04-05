import React from 'react'
import './style.css'
import { Image, Text, View } from '@aws-amplify/ui-react'
import { Link } from 'react-router-dom';


export const ImageTextOverlay = ({ imageUrl, text, path, textSize }) => {

    return (
        <View
            className="container"
            marginBottom='1rem'
        >
            <Image src={imageUrl} height='100%' width='100%' />
            <Link to={path}>
                <View class="text-block">
                    <Text className='text'
                        fontSize={textSize}
                    >
                        {text}
                    </Text>
                </View>
            </Link>

        </View>
    )
}
export default ImageTextOverlay