import React, { useEffect } from 'react'
import '../../styles.css'
import axios from "axios";
import photos from './photos'
import Gallery from "react-photo-gallery";

const About = () => {
    const [images, setImages] = React.useState()


    useEffect(() => {
        let shouldCancel = false;

        const call = async () => {
            const response = await axios.get(
                "https://photos.app.goo.gl/WQiLgMZrQ5rWvSKt6"
            );
            console.log(response)
            if (!shouldCancel && response.data && response.data.length > 0) {
                setImages(response.data.map((image => ({
                    src: image,
                    height: 3,
                    width: 4
                }))));
                setImages(photos)
                console.log(response.data)
            }
        };
        call();
        return () => (shouldCancel = true);
    }, []);

    return (
        images ? (<Gallery photos={photos} />) : null
    )
}
export default About