import React from 'react'
import { API, Storage } from 'aws-amplify';
import { Button, Flex, Image, Text, Divider, View, } from '@aws-amplify/ui-react';



const Listing = ({ product, deleteProduct }) => {
    const [imageUrl, setImageUrl] = React.useState('')

    React.useEffect(() => {
        async function getImageUrl() {
            const url = await Storage.get('products/' + product.imageKey)
            setImageUrl(url)
        }
        if (imageUrl == '') {
            getImageUrl()
        }
    }, [])



    return (
        <View        >
            <Flex
                key={product.id || product.name}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Image
                    maxHeight='50vh'
                    src={imageUrl} />
                <Text as="strong" fontWeight={700}>
                    Name: {product.name}
                </Text>
                <Text as="span">Description: {product.description}</Text>
                <Text as="span">Price: {product.price}</Text>
                <Button variation="link" onClick={() => deleteProduct(product.id)}>
                    Delete product
                </Button>

            </Flex>
            <Divider orientation="horizontal" />
        </View>

    )
}

export default Listing;