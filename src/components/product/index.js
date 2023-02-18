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
            const url = await Storage.get('products/' + data.imageKey)
            setImageUrl(url)
        }
        if (imageUrl == '') {
            getImageUrl()
        }
    }, [])

    return (
        <View>
            <Card            >
                <Flex direction={{ base: 'column', medium: 'row' }} alignItems={{ base: 'center', medium: 'flex-start' }}>
                    <View
                        // width of image for medium images
                        minWidth={{ base: '', medium: '300px' }}

                        //for mobile scales down image
                        height={{ base: '50vh', medium: '' }}
                    >
                        <Image
                            src={imageUrl}
                            maxHeight='100%'
                            maxWidth='100%'
                        />
                    </View>

                    <Flex
                        direction="column"
                        justifyContent='center'
                        alignItems='center'
                        margin='2em'
                    >
                        <Heading level={5}>
                            {data.name}
                        </Heading>
                        <View
                        // margin={{ base: '0', medium: 'auto' }}
                        >
                            <Text as="span" textAlign='left'>
                                {data.description}
                            </Text>
                        </View>
                        <Text>Price: ${data.price}</Text>
                        <Button variation='primary'>Purchase</Button>
                    </Flex>
                </Flex>
            </Card>
            <Divider
                orientation="horizontal" />
        </View >
    )
}
export default Product