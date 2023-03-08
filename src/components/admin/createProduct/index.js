import { API, Storage } from 'aws-amplify';
import React, { useState } from 'react'
import { Button, Image, TextField, View, } from '@aws-amplify/ui-react';
import { createProduct as createProductMutation } from "../../../graphql/mutations";


const CreateProduct = ({ fetchProducts }) => {

    const [img, setImg] = useState()
    const [imagePreview, setImagePreview] = useState()

    async function createProduct(event) {
        event.preventDefault();

        // Upload the image first to get the key 
        let key = '';
        try {
            key = await Storage.put('products/' + img.name, img, {
                contentType: "image/png"
            });
        } catch (error) {
            console.log("Error uploading file: ", error);
        } finally {
            // console.log(key)
        }

        // Upload the form data
        const form = new FormData(event.target);
        const data = {
            name: form.get("name"),
            price: form.get("price"),
            description: form.get("description"),
            imageKey: key.key,
        };
        // console.log(data)
        await API.graphql({
            query: createProductMutation,
            variables: { input: data },
            authMode: "AMAZON_COGNITO_USER_POOLS",
        });
        fetchProducts();
        event.target.reset();
        setImg('')
        setImagePreview('')
    }

    async function uploadImage(e) {
        setImagePreview(URL.createObjectURL(e.target.files[0]))
        setImg(e.target.files[0])
    }

    return (
        <View as="form" margin="3rem 0" onSubmit={createProduct}>
            <TextField
                name="name"
                placeholder="Product Name"
                label="Product Name"
                labelHidden
                variation="quiet"
                required
            />
            <TextField
                name="price"
                placeholder="Price: $"
                label="Product Price"
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

            <label>
                Image:
                <input type='file' accept="image/png, image/jpeg" alt='' onChange={uploadImage} />
            </label>
            <Image src={imagePreview} />
            <Button type="submit" variation="primary">
                Create Product
            </Button>
        </View>
    )
}
export default CreateProduct