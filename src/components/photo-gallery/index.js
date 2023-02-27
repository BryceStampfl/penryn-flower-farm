import React from 'react'
import { Storage } from 'aws-amplify';
import { View } from '@aws-amplify/ui-react';
import Gallery from "react-photo-gallery";

const PhotoGallery = () => {
    const [gallery, setGallery] = React.useState()

    React.useEffect(() => {
        async function fetchGallery() {
            let list = await Storage.list('gallery/')
            list = list.results
            list.shift()

            let urlList = []
            list.map((element => {
                Storage.get(element.key).then((data) => urlList.push(
                    { width: 3, height: 4, 'src': data }
                ))
            }))
            setGallery(urlList)
        }
        fetchGallery();
    }, [])

    if (gallery == undefined) return (<div>loading</div>)
    return (
        <View>
            <Gallery photos={gallery} />
        </View>
    )
}
export default PhotoGallery