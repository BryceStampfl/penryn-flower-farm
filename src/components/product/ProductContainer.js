import React from 'react'
import { API, Storage } from 'aws-amplify';
import { listProducts } from '../../graphql/queries';
import { Loader, Collection, View } from '@aws-amplify/ui-react';

import Product from './index';

const ProductContainer = () => {
    const [productData, setProductData] = React.useState(null);

    React.useEffect(() => {
        fetchProducts()
    }, [])


    async function fetchProducts() {
        const apiData = await API.graphql({ query: listProducts });
        const productsFromAPI = apiData.data.listProducts.items;
        await Promise.all(
            productsFromAPI.map(async (product) => {
                const url = await Storage.get(product.name);
                product.imageUrl = url;
                return product;
            })
        );
        console.log(productsFromAPI)
        setProductData(productsFromAPI);
    }


    if (productData === null) { return (<div><Loader size='large' /></div>) }
    else
        return (
            <View>
                <Collection
                    items={productData}
                    type='list'
                    direction={'column'}
                    justifyContent='space-between'
                    wrap={'wrap'}
                >
                    {(item, index) => (
                        <Product key={index} data={item} />
                    )}
                </Collection>

            </View>
        )
}
export default ProductContainer
