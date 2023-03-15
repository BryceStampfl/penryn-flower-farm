import React from 'react';
import { Image, View } from '@aws-amplify/ui-react';

const Banner = () => {
    return (
        // <View id='banner' backgroundColor='#ededed' paddingTop='0.5rem'>
        <View id='banner' backgroundColor='#F7F7F7' paddingTop='0.5rem'>

            <View
                maxWidth={{ base: '200px', small: '300px', medium: '300px' }}
                textAlign='center'
                padding='auto'
                margin='auto'
            >
                <Image src='/logo-large.png' />
            </View>
        </View>
    )
}
export default Banner