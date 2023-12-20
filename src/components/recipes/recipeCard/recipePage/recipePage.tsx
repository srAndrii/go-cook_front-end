import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetRecipesByIdQuery } from '../../../../redux/recipesApi'
import { BsFillStarFill, BsFillStopwatchFill } from 'react-icons/bs'

import './recipePage.css'

export interface IIngredients {
    name: string
    qty: string
    _id: string
}

const RecipePage = () => {
    const { res } = useParams()
    const { data } = useGetRecipesByIdQuery(res)
    console.log(data)
    return (
        <div className="recipe__wrapper">
            <div className="recipe__title">{data?.title}</div>
            <div className="recipe__photo">
                <img src={data?.img} alt="c" />
            </div>
            <div className="recipe__info">
                <div>
                    <BsFillStopwatchFill className="recipe__icon" />{' '}
                    {data?.time}
                </div>

                <div className="recipe__stars">
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                </div>
            </div>
            <div className="recipe__ingredients">
                <span>Необхідні інгредієнти</span>

                {data?.ingredients?.map((item: IIngredients) => (
                    <div className="recipe__ingredients__items" key={item._id}>
                        <div> {item?.name} </div>
                        <div>{item?.qty}</div>
                    </div>
                ))}
            </div>
            <div className="recipe__instruction">{data?.instruction}</div>
        </div>
    )
}

export default RecipePage
