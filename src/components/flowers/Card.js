import React from 'react'
import { View, Card, Heading, Image, Text, Flex } from '@aws-amplify/ui-react'
import { Link } from 'react-router-dom';

export const MyCard = ({ data }) => {

    return (
        <View
            boxShadow='1px 1px 1px 1px gray'


            // border='1px solid black'
            width='fit-content'
            margin='0 auto 0 auto'
            // boxShadow='1px 1px 1px 1px gray'
            maxWidth='30rem'
        >
            <Link
                to={'/Flowers/' + data.name}
                state={{ data: data }}
                style={{ textDecoration: 'none' }}>

                <View
                    // border='1px solid green'
                    width={{ large: '24vh' }}
                    height={{ medium: '26vh', large: '32vh' }}
                >
                    <Image
                        objectFit='scale-down'
                        src={data.imageUrl}
                        maxHeight='100%'
                        maxWidth='100%'
                    />
                </View>
                <View
                    // border='1px solid blue'
                    boxShadow='2px 2px 2px 2px gray'

                >
                    <Flex

                        justifyContent='space-between'
                        alignItems='center'
                        padding='0 0.5rem 0 0.5rem'
                    >
                        <Text fontSize={'1.25em'} fontWeight='380' fontStyle='italic' display='inline' >{data.name}</Text>
                        <Text textAlign='center' fontWeight='350' fontStyle='italic' display='inline'>${data.price}</Text>
                    </Flex>
                </View>



            </Link >
        </View >
    )

}
export default MyCard