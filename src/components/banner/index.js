import React from 'react';
import { Image, View } from '@aws-amplify/ui-react';

const Banner = () => {
    return (
        <View id='banner' backgroundColor='#ededed'
        >
            <View
                maxWidth={{ base: '200px', small: '300px', medium: '350px', large: '500px', xl: '600px', xxl: '800px' }}
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