import React from 'react'
import { API, Storage } from 'aws-amplify';
import { Button, Flex, Image, Text, TextField, View, } from '@aws-amplify/ui-react';



const Listing = ({ product, deleteProduct }) => {
    const [imageUrl, setImageUrl] = React.useState('')

    React.useEffect(() => {
        async function getImageUrl() {
            console.log("product is ", product)
            console.log("image key is ", product.key)
            const url = await Storage.get(product.imageKey)
            console.log("Image Url is ", url)
            setImageUrl(url)
        }
        if (imageUrl == '') {
            getImageUrl()
        }
    }, [])



    return (
        <Flex
            key={product.id || product.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Image src={imageUrl} />
            <Text as="strong" fontWeight={700}>
                Name: {product.name}
            </Text>
            <Text as="span">Description: {product.description}</Text>
            <Text as="span">Price: {product.price}</Text>
            <Button variation="link" onClick={() => deleteProduct(product)}>
                Delete product
            </Button>

        </Flex>

    )
}

export default Listing;