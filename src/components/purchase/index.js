import React from 'react'
import { useLocation, Link } from "react-router-dom";
import { View, Card, Flex, Image, Heading, Divider, Text, StepperField } from '@aws-amplify/ui-react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";




export const Purchase = ({ cart }) => {
    console.log(cart)
    // const location = useLocation()
    // const data = location.state.data

    const total = () => {
        let result;
        cart.map((cartItem) => {
            result += cartItem.quantity * cartItem.product.data.price
        })
        return result;
    }

    const cartCards = (
        cart.map((cartItem) => {
            return (
                <FlowerCard flower={cartItem} />
            )
        })
    )

    return (
        <View>
            <Heading level={1}>Cart</Heading>
            <Divider />

            {cartCards}
            <Divider />
            <Text fontSize='2rem'>Total is: ${total}</Text>

            <PayPalScriptProvider options={{ "client-id": "test" }}>
                <PayPalButtons style={{ layout: "horizontal" }} />
            </PayPalScriptProvider>

        </View>
    )
}
export default Purchase

const FlowerCard = ({ flower }) => {

    return (
        <View>
            <Card>
                <Flex direction="row" alignItems="flex-start">
                    <Image src={flower.product.data.imageUrl} width='33%' />

                    <Flex
                        direction="column"
                        alignItems="flex-start"
                    >
                        <Flex direction='column' alignItems='flex-start'>
                            <View>
                                <Heading level={5}>{flower.product.data.name}</Heading>
                                <Text>{flower.product.data.description}</Text>
                            </View>
                            <View>
                                <Text fontSize='1.25rem'>Quantity</Text>

                                <StepperField
                                    max={100}
                                    min={0}
                                    step={1}
                                    defaultValue={flower.quantity.value}
                                    size='medium'
                                />

                            </View>

                        </Flex>

                    </Flex>
                </Flex>
            </Card>
        </View>
    )

}