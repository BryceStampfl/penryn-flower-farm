import { API } from 'aws-amplify';
import React, { useState, useEffect } from 'react'
import { Heading, Tabs, TabItem, View, } from '@aws-amplify/ui-react';
import { listProducts } from "../../graphql/queries";
import {
    createProduct as createProductMutation,
    deleteProduct as deleteProductMutation,
} from "../../graphql/mutations";
import Listing from './listing/Listing';
import CreateProduct from './createProduct';

const Admin = () => {
    const [index, setIndex] = React.useState(0)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts() {
        const apiData = await API.graphql({ query: listProducts });
        const productsFromAPI = apiData.data.listProducts.items;
        setProducts(productsFromAPI);
    }

    async function deleteProduct(id) {
        const newProducts = products.filter((product) => product.id !== id);
        setProducts(newProducts);
        await API.graphql({
            query: deleteProductMutation,
            variables: { input: { id } },
            authMode: "AMAZON_COGNITO_USER_POOLS",

        });
    }

    return (
        <View
            margin='4em'
        >
            <Tabs
                currentIndex={index}
                onChange={(i) => setIndex(i)}
                justifyContent="flex-start">
                <TabItem title="Create Products">
                    <CreateProduct fetchProducts={fetchProducts} />
                </TabItem>
                <TabItem title="Listings">
                    <Heading level={2}>Current Products</Heading>
                    <View margin="3rem 0">
                        {products.map((product) => (
                            <Listing product={product} deleteProduct={deleteProduct} />

                        ))}
                    </View>
                </TabItem>
            </Tabs>


        </View>
    )
}
export default Admin