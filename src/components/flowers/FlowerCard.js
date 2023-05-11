import React from 'react'
import { View, Card, Flex, Image, Text } from '@aws-amplify/ui-react'
import { Link } from 'react-router-dom';

export const FlowerCard = ({ data }) => {
    return (
        <Card
            fontFamily='GentiumBasic'
            margin='0 auto 0 auto'
        >
            <Link
                to={'/Flowers/' + data.name}
                state={{ data: data }}
                style={{ textDecoration: 'none' }}>
                <View>
                    <Image
                        objectFit='fill'
                        src={data.imageUrl}
                        // maxWidth='100%'
                        height={{ base: '20rem', medium: '13rem', large: '20rem', xl: '25rem' }}
                        width={{ base: '20rem', medium: '13rem', large: '20rem', xl: '25rem' }}
                    />
                    <View
                        padding='0.25rem'
                        width={{ base: '20rem', medium: '13rem', large: '20rem', xl: '25rem' }}

                    >
                        <Flex direction='column' alignItems='center'>
                            <Text textAlign='center' fontSize='1.5rem' fontWeight='100' display='inline' color='#333333'
                                style={{ wordWrap: 'break-word', width: '75%' }}
                            >{data.name}</Text>
                            <Text fontSize='1.25rem' textAlign='center' fontWeight='300' >${data.price}</Text>
                        </Flex>
                    </View>
                </View>
            </Link>
        </Card >
    )
}
export default FlowerCard