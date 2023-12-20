import React, { FC } from 'react'
import { BsFillStarFill, BsFillStopwatchFill } from 'react-icons/bs'

import './RecipeCard.css'

export interface IRecipeCard {
    title: string
    diff: string
    time: string
    _id?: string
    img: string
}

const RecipeCard: FC<IRecipeCard> = ({ time, diff, title, img }) => {
    return (
        <>
            <div className="recipe__card">
                <div className="recipe__card__img">
                    <img className="cover" src={img} alt={title} />
                </div>

                <span className="recipe__card__info">
                    <BsFillStopwatchFill className="recipe__card__icon" />
                    {time}
                    <span className="recipe__card__stars">
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                    </span>
                </span>
                <p className="recipe__card__title"> {title} </p>
            </div>
        </>
    )
}

export default RecipeCard
