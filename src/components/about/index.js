import React, { useEffect } from 'react'
import '../../styles.css'
import Garden from '../../images/Garden.jpg'
import Buffer from 'buffer'

const About = () => {
    const [images, setImages] = React.useState([])


    useEffect(() => {
        fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/resources/image`, {
            headers: {
                Authorization: `Basic ${(process.env.REACT_APP_CLOUDINARY_API_KEY + ':' + process.env.REACT_APP_CLOUDINARY_API_SECRET).toString('base64')}`
            }
        })
            .then(r => r.json())
            .then(data => setImages(data))
            .then(data => console.log(data))
    }, []);

    return (
        <div className='jumbotron'>
            <img src={Garden} />
        </div>
    )
}
export default About