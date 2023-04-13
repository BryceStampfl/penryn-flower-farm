import React from 'react'
import { View, Flex, Text } from '@aws-amplify/ui-react'

import { Link } from 'react-router-dom';
import { RxAvatar } from "react-icons/rx";



export const TopNavbar = ({ user }) => {
    return (
        <View
            backgroundColor='#F7F7F7'
        // border='solid 1px grey'
        >
            <Link to='/Login' style={{ textDecoration: 'none' }}>

                <Flex
                    padding='1rem 1rem 0 0'
                    height='3rem'
                    justifyContent='flex-end'
                    alignItems='center'
                >
                    <Text
                        margin='0 1rem 0 0 '
                    >Account</Text>
                    <h1><RxAvatar color='black' /> </h1>
                </Flex>
            </Link>


        </View>
    )

}
export default TopNavbar