import { Flex, View } from '@aws-amplify/ui-react';
import React from 'react';
import Jumbotron from '../jumbotron';
import ImageTextOverlay from '../imageTextOverlay';

import { Image } from '@aws-amplify/ui-react';

import Garden from '../../images/Garden.jpg'
import Woodbox from '../../images/new/IMG_0171.jpeg'
import Patch from '../../images/new/IMG_0167.jpeg'
import Duck from '../../images/new/IMG_0192.jpeg'

// import John from '../../images/Dad.jpg'
import Sandra from '../../images/new/IMG_0196.JPG'
import John from '../../images/new/IMG_0164.jpeg'
import Flower from '../../images/new/IMG_0149.jpeg'


const Home = () => {

    return (
        <View id='home'>
            <Jumbotron />
            <View
            // margin={{ medium: '0 auto 0 auto' }}
            >
                <Flex
                    direction={{ base: 'column', medium: 'row' }}
                    gap='1em'
                    justifyContent={'space-between'}
                >
                    <ImageTextOverlay imageUrl={Patch} text="Purchase Flowers" path="/flowers" />
                    <ImageTextOverlay imageUrl={Woodbox} text="Subscription" path="/subscription" />
                    <ImageTextOverlay imageUrl={Duck} text="Gift Cards" path="/giftcards" />
                </Flex>
            </View>

            <View
            >
                <Flex
                    direction={{ base: 'column', medium: 'row' }}
                    justifyContent={'space-between'}
                >
                    <Image src={John} minWidth='0' width='100%' height='100%' />
                    <Image src={Flower} minWidth='0' width='100%' height='100%' />
                    <Image src={Sandra} minWidth='0' width='100%' height='100%' />


                </Flex>
            </View>
        </View>
    )
}
export default Home;