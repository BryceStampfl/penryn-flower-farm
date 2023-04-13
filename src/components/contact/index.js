import React from 'react'
import { View, Flex, Heading, Text, Button } from '@aws-amplify/ui-react'
import { SocialIcon } from 'react-social-icons';

const Contact = () => {

    return (
        <View
            marginTop='1rem'
            paddingBottom='1rem'
            backgroundColor='#F7F7F7'
        >
            <Flex
                direction='column'
                alignItems="center"
            >

                <Heading level={1}>Contact Us!</Heading>
                <Flex>
                    <SocialIcon url='https://www.instagram.com/penrynflowerfarm/' />
                    <SocialIcon url='mailto:PenrynFlowerFarm@Gmail.com' />
                    <SocialIcon url='https://www.facebook.com/sandra.weidel.737' />

                </Flex>
                <Text>PenrynFlowerFarms@gmail.com</Text>


            </Flex>
        </View>
    )
}

export default Contact