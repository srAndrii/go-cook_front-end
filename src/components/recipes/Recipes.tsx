import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetRecipesByCategoryQuery } from '../../redux/recipesApi'
import RecipeCard, { IRecipeCard } from './recipeCard/RecipeCard'
import { NextPageAuth } from '../../services/auth/auth.types'

const Recipes: NextPageAuth = () => {
    const { id } = useParams()
    const { data } = useGetRecipesByCategoryQuery(id)

    console.log(id, data)

    return (
        <div className="recipe__wrapper">
            {data?.map((item: IRecipeCard) => (
                <Link
                    to={`/recipe/${item._id}`}
                    style={{ textDecoration: 'none' }}
                    key={item._id}
                >
                    <RecipeCard
                        title={item.title}
                        diff={item.diff}
                        time={item.time}
                        img={item.img}
                        key={item._id}
                    />
                </Link>
            ))}
        </div>
    )
}

Recipes.isOnlyUser = false

export default Recipes
