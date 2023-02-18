import React from 'react'
import '../../styles.css'
import Gallery from "react-photo-gallery";
import { View } from '@aws-amplify/ui-react';
import photos from './photos'


const About = () => {
    const [images, setImages] = React.useState(photos)

    console.log('about')


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
export default About