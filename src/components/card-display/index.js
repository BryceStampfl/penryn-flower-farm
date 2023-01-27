import React from 'react'
import Card from '../card'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";


import { API, Storage } from 'aws-amplify';
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

import { listProducts } from '../../graphql/queries';

const CardDisplay = () => {
    const [cardData, setCardData] = React.useState(null);







    React.useEffect(() => {
        fetchProducts()
    }, [])

    async function fetchProducts() {
        const apiData = await API.graphql({ query: listProducts });
        const productsFromAPI = apiData.data.listProducts.items;
        await Promise.all(
            productsFromAPI.map(async (product) => {
                if (product.image) {
                    const url = await Storage.get(product.name);
                    product.image = url;
                }
                return product;
            })
        );
        console.log(productsFromAPI,)
        setCardData(productsFromAPI);
    }

    if (cardData === null) {
        return (<div>loading</div>)
    }
    else
        return (
            <div className='card-displayContainer'>
                <div className='card-display'>
                    {cardData.map((data) => {
                        return <Card name={data.name}
                            price={data.price}
                            descripton={data.descripton}
                        />
                    })}
                </div>
            </div>

        )

}
export default CardDisplay