import React from 'react'
import Card from '../card'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";


const CardDisplay = () => {

    const [index, setIndex] = React.useState(0);

    let cards = [];
    for (let i = 0; i < 3; i++) {
        cards.push(<Card />)
    }

    const leftClick = () => {

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