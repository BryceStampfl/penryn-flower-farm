import React from 'react'
import { Storage } from 'aws-amplify';
import { View, Card, Heading, Image, Text } from '@aws-amplify/ui-react'
import { Link } from 'react-router-dom';

import Subscription from '../subscription';
import Home from '../home';


export const FlowerCard = ({ data }) => {
    const [imageUrl, setImageUrl] = React.useState('')

    React.useEffect(() => {
        async function getImageUrl() {
            const url = await Storage.get(data.imageKey)
            setImageUrl(url)
        }
        if (imageUrl == '') { getImageUrl() }
    }, [])

    return (
        <View
            margin='auto'
        >
            <Card
                maxWidth={{ base: 'auto', small: '20rem', large: '30rem' }}
            >
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <Image
                        src={imageUrl}
                        maxHeight='100%'
                        maxWidth='100%'
                    />
                    <Heading fontSize={'1.25em'} fontWeight='380' fontStyle='italic'>{data.name}</Heading>
                    <Text style={{ textAlign: 'left', fontWeight: '350' }}>{data.description}</Text>
                    <Text style={{ textAlign: 'left', fontWeight: '350', fontStyle: 'italic' }}>price: ${data.price}</Text>
                </Link>
            </Card>
        </View >
    )
}
export default FlowerCard