import React from 'react'
import Card from '../card'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";


const CardDisplay = () => {

    const [index, setIndex] = React.useState(0);

    let cards = [];
    for (let i = 0; i < 6; i++) {
        cards.push(<Card />)
    }



    return (
        <div className='card-displayContainer'>
            <div>
                <AiOutlineArrowLeft />
            </div>
            <div className='card-display'>
                {cards}
            </div>
            <div>
                <AiOutlineArrowRight />
            </div>
        </div>

    )

}
export default CardDisplay