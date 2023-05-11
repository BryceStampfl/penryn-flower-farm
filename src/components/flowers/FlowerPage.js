import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { View, Flex, Heading, Image, Text, Button, StepperField } from '@aws-amplify/ui-react'
import toast, { Toaster } from 'react-hot-toast';


/*
247 - #F7F7F7
border - 211 211 211 #D3D3D3 
text heavy #666666
text light #hex 999999
*/
export const FlowerPage = ({ addToCart }) => {
    const [value, setValue] = React.useState(0);

    const location = useLocation()
    const data = location.state.data
    const navigate = useNavigate();
    console.log(data)

    const handleOnStepChange = (newValue) => {
        setValue(newValue);
    };

    const cartPressed = () => {
        if (value !== 0) {
            toast.success(`Added ${value} bundles to the cart!`, {
                position: 'top-center',
            })

            addToCart({
                product: { data },
                quantity: { value },
            })
            setValue(0)
        } else {
            toast.error(`Zero bundles selected!`)
        }
    }

    const purchasePressed = () => {
        cartPressed()
        navigate('/purchase')
    }



    return (
        <View
            fontFamily='GentiumBasic'
            textAlign='center'
        >
            <Flex
                justifyContent='center'
                alignItems={{ base: 'center', medium: 'flex-start' }}
                direction={{ base: 'column', medium: 'row' }}
                gap='2rem'
            >
                <View
                    height={{ base: '60vh', medium: '75vh' }}
                >
                    <Image
                        border='1px solid #CCCCCC'
                        borderRadius="0.5rem"
                        src={data.imageUrl}
                        maxWidth='100%'
                        maxHeight='100%'
                    />
                </View>
                <View
                    border='1px solid #CCCCCC'
                    margin='0'
                >
                    <Heading
                        padding='0.75rem'
                        fontSize={'2rem'}
                        fontWeight='350'
                        color='#666666'
                        style={{ wordWrap: 'break-word' }}
                    >{data.name}</Heading>
                    <View
                        backgroundColor='#F7F7F7'
                        style={{ borderTop: '1px solid #CCCCCC' }}
                    >
                        <Text style={{
                            textAlign: 'center', fontWeight: '350', fontSize: '2rem', color: '#666666'
                        }}>${data.price} per bundle</Text>

                        < Text style={{
                            borderTop: '1px solid #CCCCCC',
                            textAlign: 'center',
                            fontWeight: '350',
                            padding: '1rem',
                            wordWrap: 'break-word'
                        }}>{data.description}</Text>
                    </View>
                    <StepperField
                        value={value}
                        defaultValue={0}
                        onStepChange={handleOnStepChange}
                        size='large'
                    />
                    <Flex gap='0px' >
                        <Button fontSize='1.15rem' backgroundColor='#ffff7f' color='#36454F' isFullWidth={true} onClick={cartPressed}>Add to Cart</Button>
                        <Button fontSize='1.15rem' backgroundColor='#FFBF00' color='#36454F' isFullWidth={true} onClick={purchasePressed}>Purchase</Button>
                    </Flex>
                </View>
            </Flex >

        </View >
    )



}
export default FlowerPage