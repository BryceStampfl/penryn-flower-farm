import { Flex, View } from '@aws-amplify/ui-react';
import React from 'react';
import Jumbotron from '../jumbotron';
import ImageTextOverlay from '../imageTextOverlay';

import { Image } from '@aws-amplify/ui-react';

import Woodbox from '../../images/new/jpg/IMG_0171.jpg'
import Patch from '../../images/new/jpg/IMG_0167.jpg'
import Duck from '../../images/new/jpg/IMG_0192.jpg'

import Sandra from '../../images/new/jpg/IMG_0196.jpg'
import John from '../../images/new/jpg/IMG_0164.jpg'
import Flower from '../../images/new/jpg/IMG_0149.jpg'


const Home = () => {

    return (
        <View id='home'>
            <Jumbotron />
            <View
            // margin={{ medium: '0 auto 0 auto' }}
            >
                <Flex
                    direction={{ base: 'column', medium: 'row' }}
                    gap={{ base: '0px', small: '1em' }}
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