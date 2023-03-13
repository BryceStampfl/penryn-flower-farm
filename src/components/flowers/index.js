import React from 'react';
import { API, Storage } from 'aws-amplify';
import { listProducts } from '../../graphql/queries';
import { Loader, Collection, View, Flex, Text, SearchField, Card } from '@aws-amplify/ui-react';
import FlowerCard from './FlowerCard';
import MyCard from './Card'

export const Flowers = () => {
    const [productData, setProductData] = React.useState(null);

    React.useEffect(() => {
        fetchProducts()
    }, [])

    async function fetchProducts() {
        const apiData = await API.graphql({ query: listProducts });
        const productsFromAPI = apiData.data.listProducts.items;
        await Promise.all(
            productsFromAPI.map(async (product) => {
                const url = await Storage.get(product.imageKey);
                return product.imageUrl = url;
            })
        );
        setProductData(productsFromAPI);
    }

    if (productData === null) { return (<div><Loader size='large' /></div>) }
    return (
        <View
            maxWidth='1580px'
        // border='1px dashed green'
        >
            <Collection
                margin='0 auto 0 auto'
                items={productData}
                type='grid'
                columnGap="0.5rem"
                rowGap="0.5rem"

                isSearchable
                searchPlaceholder="Type to search..."
                searchNoResultsFound={
                    <Flex justifyContent="center">
                        <Text color="black" fontSize="1rem">
                            Nothing found, please try again
                        </Text>
                    </Flex>
                }
                isPaginated
                itemsPerPage={6}

                templateColumns={{ base: '1fr', small: '1fr 1fr', medium: '1fr 1fr 1fr' }}
            >
                {(item, index) => (
                    <View
                    // border='1px red solid'
                    // backgroundColor='gray'
                    >

                        <MyCard key={index} data={item} />
                    </View>


                )}
            </Collection>
        </View >
    )
}
export default Flowers

