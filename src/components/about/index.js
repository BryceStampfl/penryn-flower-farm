import React from 'react'
import '../../styles.css'
import Garden from '../../images/Garden.jpg'

const About = () => {

    results = "";
    async function getResults() {
        const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`, {
            headers: {
                Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
            }
        }).then(r => console.log(r.json()));
    }
    getResults();

    return (
        <div className='jumbotron'>
            <img src={Garden} />
        </div>
    )
}
export default About