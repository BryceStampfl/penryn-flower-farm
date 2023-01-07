import { API, Storage } from 'aws-amplify';
import React, { useState, useEffect } from 'react'
import {
    Button,
    Flex,
    Heading,
    Image,
    Text,
    TextField,
    View,
    withAuthenticator,
} from '@aws-amplify/ui-react';
import { listProducts } from "../../graphql/queries";
import {
    createProduct as createProductMutation,
    deleteProduct as deleteProductMutation,
} from "../../graphql/mutations";


const Admin = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts() {
        const apiData = await API.graphql({ query: listProducts });
        const productsFromAPI = apiData.data.listProducts.items;
        setProducts(productsFromAPI);
    }

    async function createProduct(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        const data = {
            name: form.get("name"),
            description: form.get("description"),
        };
        await API.graphql({
            query: createProductMutation,
            variables: { input: data },
        });
        fetchProducts();
        event.target.reset();
    }

    async function deleteProduct({ id }) {
        const newProducts = products.filter((product) => product.id !== id);
        setProducts(newProducts);
        await API.graphql({
            query: deleteProductMutation,
            variables: { input: { id } },
        });
    }


    const [productData, setProductData] = useState({
        name: '',
        price: '',
        description: '',
    })

    const handleChange = (event) => {
        setProductData({ ...productData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(productData)
        setProductData({ name: '', price: '', description: '' })
    };

    return (
        <div id='ApplicationContainer' className='container'>

            <View as="form" margin="3rem 0" onSubmit={createProduct}>
                <Flex direction="row" justifyContent="center">
                    <TextField
                        name="name"
                        placeholder="Product Name"
                        label="Product Name"
                        labelHidden
                        variation="quiet"
                        required
                    />
                    <TextField
                        name="description"
                        placeholder="Product Description"
                        label="Product Description"
                        labelHidden
                        variation="quiet"
                        required
                    />
                    <Button type="submit" variation="primary">
                        Create Product
                    </Button>
                </Flex>
            </View>
            <Heading level={2}>Current Products</Heading>
            <View margin="3rem 0">
                {products.map((product) => (
                    <Flex
                        key={product.id || product.name}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Text as="strong" fontWeight={700}>
                            {product.name}
                        </Text>
                        <Text as="span">{product.description}</Text>
                        <Button variation="link" onClick={() => deleteProduct(product)}>
                            Delete product
                        </Button>
                    </Flex>
                ))}
            </View>
            <Button>Sign Out</Button>



            <div className='content-container white '>

                <h1>Create Product</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" onChange={handleChange} />
                    </label>
                    <label>
                        Price:
                        <input type="text" name="price" onChange={handleChange} />
                    </label>
                    <label>
                        Description:
                        <input type="text" name="description" onChange={handleChange} />
                    </label>

                    <div>
                        <button onSubmit={handleSubmit}>Submit Product</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
export default Admin
