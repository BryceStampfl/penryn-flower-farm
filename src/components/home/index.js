import { Flex, View } from '@aws-amplify/ui-react';
import React from 'react';
import Jumbotron from '../jumbotron';
import ImageTextOverlay from '../imageTextOverlay';

import Garden from '../../images/Garden.jpg'
import Dad from '../../images/Dad.jpg'
const Home = () => {

    return (
        <div id='home'>
            <Jumbotron />

            <Flex
                direction={{ base: 'column', medium: 'row' }}
                gap='0'
            >
                <ImageTextOverlay imageUrl={Garden} text="Purchase Flowers " opacity={0.5} />
                <ImageTextOverlay imageUrl={Garden} text="Subscription" />
                <ImageTextOverlay imageUrl={Garden} text="Gift Cards" />

            </Flex>

            <Flex
                direction={{ base: 'column', medium: 'row' }}
            >
                <ImageTextOverlay imageUrl={Dad} text="Text 1 " />
                <View>
                    <ImageTextOverlay imageUrl={Garden} text="Text 1 " />

                </View>

            </Flex>
        </div>
    )
}
export default Home;