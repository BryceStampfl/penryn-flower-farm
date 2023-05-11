import React from 'react'
import { View, Image, Text, Button, Flex, Grid, Heading, Divider } from '@aws-amplify/ui-react'
import { useLocation, useNavigate } from "react-router-dom";

import './style.css'
import basket from '../../images/bouquet.jpg'

const Subscription = ({ addToCart }) => {
    const [imageUrl, setImageUrl] = React.useState(null);

    const navigate = useNavigate();

    React.useEffect(() => {
        async function getImageUrl() {
            const url = await Storage.get("products/bouquet.jpg")
            setImageUrl(url)
            console.log(url)
        }
        if (imageUrl == '') {
            getImageUrl()
        }
    }, [])

    const purchasePressed = () => {
        addToCart({
            product: {
                data: {
                    id: '1',
                    name: 'Bouquet Subscription',
                    description: "Flower Bouquets delivered monthly!",
                    imageKey: "products/bouquet.jpg",
                    price: 40,
                    imageUrl: "//penrynflowerfarmbucket195050-staging/public/products/bouquet.jpg",
                }
            },
            quantity: {
                value: 1
            }

        })
        navigate('/purchase')
    }

    return (
        <View
            maxWidth='1540px'
            position='relative'
        >
            <View backgroundColor='#f7f7f7' >
                <Heading level={1} fontSize={50} marginBottom='1rem' fontStyle='italic'>Bouquet Subscription</Heading>

                <Flex direction={{ base: 'column', medium: 'row' }}>
                    <Image src={basket} width={{ base: 'auto', medium: '50%' }} />
                    <View
                        backgroundColor='#f7f7f7'
                    >
                        <Flex>
                            <Text fontSize={20}>
                                Experience the beauty of fresh flowers in your home every month with our stunning flower bouquet subscription service! Imagine receiving a gorgeous bouquet of hand-selected, seasonal blooms delivered straight to your doorstep on a regular basis. Whether you're looking to treat yourself or surprise a loved one with a thoughtful and meaningful gift, our flower bouquet subscription is the perfect way to add some color and cheer to your life.
                            </Text>
                        </Flex>
                        <Button backgroundColor='white' onClick={purchasePressed} >Sign up!</Button>

                    </View>
                </Flex>
            </View>

        </View >
    )
}
export default Subscription