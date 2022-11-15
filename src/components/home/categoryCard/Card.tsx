import React, { FC } from 'react'

interface ICard {
    title: string
    icon: string
}

const Card: FC<ICard> = ({ title, icon }) => {
    return (
        <div className="home__card">
            <img className="home__card__icon" src={icon} alt="Cake" />
            <p>{title}</p>
        </div>
    )
}

export default Card
