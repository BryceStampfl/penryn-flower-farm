import React from 'react'
import { View, Card, Flex, Image, Text } from '@aws-amplify/ui-react'
import { Link } from 'react-router-dom';

export const FlowerCard = ({ data }) => {
    return (
        <Card
            fontFamily='GentiumBasic'
            margin='0 auto 0 auto'
            width={{ base: '13rem', small: '50vw', medium: '30vw', large: '30vw', xl: '25rem' }}
        >
            <Link
                to={'/Flowers/' + data.name}
                state={{ data: data }}
                style={{ textDecoration: 'none' }}>
                <View
                    border='1px solid #D3D3D3'
                    borderRadius="0.5rem"

                    margin='0 auto 0 auto'
                    width={{ base: 'auto', small: '35vw', medium: '25vw', large: '18vw', xxl: '16vw' }}
                // height='50vh'
                >
                    <Image
                        objectFit='cover'
                        src={data.imageUrl}
                        maxHeight='100%'
                        maxWidth='100%'
                    />

                    <View
                        // margin='0 auto 0 auto'
                        padding='0.25rem'
                    >
                        <Flex
                            justifyContent='space-between'
                            alignItems='center'
                        >
                            <Text textAlign='left' fontSize='1.5rem' fontWeight='100' display='inline' color='#333333'
                                style={{ wordWrap: 'break-word', width: '75%' }}
                            >{data.name}</Text>
                            <Text fontSize='1.25rem' textAlign='center' fontWeight='300' >${data.price}</Text>

                        </Flex>

                    </View>
                </View>

            </Link>
        </Card >
    )
}
export default FlowerCard



// Cards fit all sizes but are longer, issue with horizontal or longer images cutting text off even thought i want all pictures same size,
// also resizing makes leftmost elements size down due to size of longer image

//     < Card
// id = 'card container'
// margin = '0 auto 0 auto'
// maxWidth = {{ base: '15rem', small: 'auto', medium: '25rem' }}
// width = {{ small: '30rem', medium: 'auto' }}  //needed so text sits and doesnt overflow and each box is same size
//         // maxHeight={{ base: '', small: '25rem', medium: '', large: '' }}
//         >
//     <Link
//         id='link'
//         to={'/Flowers/' + data.name}
//         state={{ data: data }}
//         style={{ textDecoration: 'none' }}>
//         <View
//             id='image container'
//             maxWidth={{ base: '15rem', small: 'auto', medium: '25rem' }}
//             maxHeight={{ medium: '50rem' }}


//         >
//             <Image
//                 objectFit={{ small: 'scale-down' }}
//                 src={data.imageUrl}
//                 maxHeight='100%'
//                 maxWidth='100%'

//             // maxWidth={{ base: 'auto', small: '15rem', medium: '20rem', large: '25rem' }}

//             />
//         </View>

//         <Heading fontSize={'1.25em'} fontWeight='380' fontStyle='italic'>{data.name}</Heading>
//         <Text style={{ textAlign: 'center', fontWeight: '350', fontStyle: 'italic' }}>${data.price}</Text>

//         <Text
//             overflow='hidden'
//             style={{ textAlign: 'left', fontWeight: '350' }}
//             width={{ small: 'auto', }}

//         >
//             {data.description.length > 80 ? data.description.substring(0, 80) + "..." : data.description}
//         </Text>
//     </Link>
//         </Card >