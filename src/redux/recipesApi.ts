import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const recipesApi = createApi({
    reducerPath: 'recipesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    endpoints: (build) => ({
        getRecipesByCategory: build.query({
            query: (id) => `recipes/by-category/${id}`,
        }),
        getRecipesById: build.query({
            query: (id) => `recipes/${id}`,
        }),
    }),
})

export const { useGetRecipesByCategoryQuery, useGetRecipesByIdQuery } =
    recipesApi
