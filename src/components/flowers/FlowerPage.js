import React from 'react'
import { useLocation, Link } from "react-router-dom";
import { View, Flex, Heading, Image, Text, Button } from '@aws-amplify/ui-react'



/*
247 - #F7F7F7
border - 211 211 211 #D3D3D3 
text heavy #666666
text light #hex 999999
*/
export const FlowerPage = () => {
    const location = useLocation()
    const data = location.state.data

    return (
        <View
            fontFamily='GentiumBasic'
            textAlign='center'
        >
            <Flex
                justifyContent='center'
                alignItems={{ base: 'center', medium: 'flex-start' }}
                direction={{ base: 'column', medium: 'row' }}
                gap='2rem'
            >
                <View
                    height={{ base: '60vh', medium: '75vh' }}
                >
                    <Image
                        border='1px solid #CCCCCC'
                        borderRadius="0.5rem"
                        src={data.imageUrl}
                        maxWidth='100%'
                        maxHeight='100%'
                    />
                </View>
                <View
                    width='30rem'
                >
                    <View
                        border='1px solid #CCCCCC'
                        margin='0'
                    >
                        <Heading
                            padding='0.75rem'
                            fontSize={'2rem'}
                            fontWeight='350'
                            color='#666666'
                            style={{ wordWrap: 'break-word' }}
                        >{data.name}</Heading>
                        <View
                            backgroundColor='#F7F7F7'
                            style={{ borderTop: '1px solid #CCCCCC' }}
                        >
                            <Text style={{
                                textAlign: 'center', fontWeight: '350', fontSize: '2rem', color: '#666666'
                            }}>${data.price}</Text>

                            < Text style={{
                                borderTop: '1px solid #CCCCCC',
                                textAlign: 'center',
                                fontWeight: '350',
                                padding: '1rem',
                                wordWrap: 'break-word'
                            }}>{data.description}</Text>
                        </View>

                        <Link
                            to={'/Purchase/'}
                            state={{ data: data }}
                            style={{ textDecoration: 'none' }}>
                            <Button backgroundColor='green' color='white' isFullWidth={true}
                            >Purchase</Button>
                        </Link>
                    </View>


                </View>
            </Flex >

        </View >
    )



}
export default FlowerPage