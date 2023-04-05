import React from 'react';
import { API, Storage } from 'aws-amplify';
import { listProducts } from '../../graphql/queries';
import { Loader, Collection, View, Flex, Text, Divider, Image } from '@aws-amplify/ui-react';
import FlowerCard from './FlowerCard';


import subscription from '../../images/basketSub.jpg'
import giftcard from '../../images/giftcard.jpg'


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
        // border='1px solid gray'
        >
            <View  >
                <Flex justifyContent='space-around' maxWidth={{ medium: '1540px' }}
                // backgroundColor='#F7F7F7'
                >
                    <div style={{ width: 'auto', margin: '0 auto 0 auto' }}>
                        <Image src={subscription} />
                    </div>

                    <div style={{ width: 'auto', margin: '0 auto 0 auto' }}>
                        <Image src={giftcard} />
                    </div>
                </Flex>
            </View>



            <View>

                <View
                    margin='0.5rem 2rem 0 2rem'

                >
                    <Divider
                        size="small"
                        orientation="horizontal" />
                </View>

                <Text
                    fontFamily='Cormorant'
                    fontSize='2.5rem'
                >Browse Selection</Text>

                <Collection
                    items={productData}
                    type='grid'
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
                    templateRows='1fr'
                    templateColumns={{ base: '1fr', medium: '1fr 1fr 1fr ' }}
                >
                    {(item, index) => (

                        <FlowerCard key={index} data={item} />
                    )}
                </Collection>
            </View>

        </View >
    )
}
export default Flowers

