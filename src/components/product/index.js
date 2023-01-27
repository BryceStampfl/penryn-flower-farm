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
                    {/* <Image src={imageUrl} /> */}

                    <Image
                        src={imageUrl}
                        width={{ base: '50%', medium: '50%' }}
                    />
                    <Flex
                        direction="column"
                        justifyContent='center'
                        alignItems='center'
                    >

                        <Heading level={5}>
                            {/* New Zealand White Water Outdoor Adventure */}
                            {data.name}
                        </Heading>

                        <Text as="span">
                            {data.description} <br></br>
                            Join us on this beautiful outdoor adventure through the glittering
                            rivers through the snowy peaks on New Zealand.
                        </Text>
                        <Text>{data.price}</Text>
                        {/* <Button variation="primary">Book it</Button> */}
                    </Flex>
                </Flex>
            </Card>
        </View>
    )
}
export default Product