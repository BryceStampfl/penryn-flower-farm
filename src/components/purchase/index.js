import React from 'react'
import { useLocation, Link } from "react-router-dom";
import { View } from '@aws-amplify/ui-react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


export const Purchase = () => {
    const location = useLocation()
    const data = location.state.data

    return (
        <View>
            <PayPalScriptProvider options={{ "client-id": "test" }}>
                <PayPalButtons style={{ layout: "horizontal" }} />
            </PayPalScriptProvider>


        </View>
    )
}
export default Purchase