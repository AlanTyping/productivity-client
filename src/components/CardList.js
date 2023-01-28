import React, { useState } from 'react';
import Card from './Card';

const CardList = ({ card, setCard, cards, setListUpdated}) => {
    return (
        <div className='h-[80%] w-[100%] flex justify-start flex-wrap flex-col items-center'>
            {cards.map(item => (
                <Card
                    key={item.id}
                    id={item.id}
                    cardObj={item}
                    card={card}
                    setCard={setCard}
                    setListUpdated={setListUpdated}
                />
            ))}
        </div>
    );
}

export default CardList;