import React from 'react'
import { useLocation } from "react-router-dom";
import { View, Card, Heading, Image, Text, Button } from '@aws-amplify/ui-react'

export const FlowerPage = () => {
    const location = useLocation()
    const data = location.state.data

    return (
        <View margin='0 auto 0 auto' padding='auto' textAlign='center'>
            <Card textAlign='center'>
                <Image
                    margin='0 auto 0 auto'
                    src={data.imageUrl}
                    maxWidth='100%'
                    maxHeight='100%'
                />
                <Heading fontSize={'1.25em'} fontWeight='380' fontStyle='italic'>{data.name}</Heading>
                <Text style={{ textAlign: 'center', fontWeight: '350' }}>{data.description}</Text>
                <Text style={{ textAlign: 'cebter', fontWeight: '350', fontStyle: 'italic' }}>price: ${data.price}</Text>
                <Button variation='primary'>Purchase</Button>
            </Card>
        </View >
    )
}
export default FlowerPage