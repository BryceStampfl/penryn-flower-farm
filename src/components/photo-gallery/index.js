import React from 'react'
import { Storage } from 'aws-amplify';


import '../../styles.css'
import Gallery from "react-photo-gallery";
import { View } from '@aws-amplify/ui-react';
import photos from './photos'


const PhotoGallery = () => {
    const [images, setImages] = React.useState(photos)
    const [gallery, setGallery] = React.useState()
    console.log('about')


    React.useEffect(() => {
        async function fetchGallery() {
            let list = Storage.list('gallery/')
                .then((result) => console.log(result.results))
                .catch((err) => console.log(err));
            console.log(list)
            // const apiData = await API.graphql({ query: listProducts });
            // const productsFromAPI = apiData.data.listProducts.items;
            // setProducts(productsFromAPI);
        }
        fetchGallery();
    }, []);




    React.useEffect(() => {
        async function getImageUrls() {
            console.log("Starting get")
            const urls = await Storage.list('gallery')
            console.log(urls)
            setImages(urls)
        }
        if (images === '') {
            getImageUrls()
        }
    }, [])

    if (images === '') { return <div><p>gallery</p></div> }
    else
        return (
            <View>
                <p>Gallery</p>
                <Gallery photos={photos} />

            </View>
        )
}
export default PhotoGallery