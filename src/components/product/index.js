import React from 'react'
import { Storage } from 'aws-amplify';

import {
    Card,
    Button,
    Flex,
    Heading,
    Image,
    Text,
    View,
    Divider
} from '@aws-amplify/ui-react';

const Product = ({ data }) => {
    const [imageUrl, setImageUrl] = React.useState('')


    React.useEffect(() => {
        async function getImageUrl() {
            const url = await Storage.get(data.imageKey)
            setImageUrl(url)
        }
        if (imageUrl == '') {
            getImageUrl()
        }
    }, [])

    return (
        <View>
            <Card>
                <Flex direction={{ base: 'column', medium: 'row' }} alignItems={{ base: 'center', medium: 'flex-start' }}>
                    <Image
                        src={imageUrl}
                        width={{ base: '50%', medium: '100%' }}
                    />
                    <Flex
                        direction="column"
                        justifyContent='center'
                        alignItems='center'
                    >
                        <Heading level={5}>
                            {data.name}
                        </Heading>
                        <Text as="span" textAlign='left'>
                            {data.description}
                        </Text>
                        <Text>Price: ${data.price}</Text>
                        <Button variation='primary'>Purchase</Button>
                    </Flex>
                </Flex>
            </Card>
            <Divider
                orientation="horizontal" />
        </View>
    )
}
export default Product