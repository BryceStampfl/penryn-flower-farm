import React from 'react'
import '../../styles.css'
import Garden from '../../images/Garden.jpg'
import Buffer from 'buffer'

const About = () => {
    const [images, setImages] = React.useState([])


    const results = "";
    async function getResults() {
        const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/resources/image`, {
            headers: {
                Authorization: `Basic ${Buffer.from(process.env.REACT_APP_CLOUDINARY_API_KEY + ':' + process.env.REACT_APP_CLOUDINARY_API_SECRET).toString('base64')}`
            }
        }).then(r => setImages(r.json()));

    }
    getResults();
    console.log(images)

    return (
        <div className='jumbotron'>
            <img src={Garden} />
        </div>
    )
}
export default About