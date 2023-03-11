import React from 'react'
import { View, Card, Heading, Image, Text } from '@aws-amplify/ui-react'
import { Link } from 'react-router-dom';

export const FlowerCard = ({ data }) => {
    return (
        <Card
            margin='0 auto 0 auto'
            width={{ base: '15rem', small: '50vw', medium: '30vw', large: '30vw', xl: '25rem' }}
        >
            <Link
                to={'/Flowers/' + data.name}
                state={{ data: data }}
                style={{ textDecoration: 'none' }}>
                <View
                    margin='0 auto 0 auto'
                    width={{ base: 'auto', small: '30vw', medium: '15vw' }}
                    height={{ medium: '20vh', large: '22vh', xl: '25vh' }}
                >
                    <Image
                        src={data.imageUrl}
                        maxHeight='100%'
                        maxWidth='100%'
                    />
                </View>

                <Heading fontSize={'1.25em'} fontWeight='380' fontStyle='italic'>{data.name}</Heading>
                <Text style={{ textAlign: 'center', fontWeight: '350', fontStyle: 'italic' }}>${data.price}</Text>

                <Text
                    overflow='hidden'
                    style={{ textAlign: 'center', fontWeight: '350' }}
                    width={{ small: 'auto', }}

                >
                    {data.description.length > 160 ? data.description.substring(0, 160) + "..." : data.description}
                </Text>
            </Link>
        </Card>
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