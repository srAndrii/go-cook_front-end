import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    endpoints: (build) => ({
        getCategories: build.query({
            query: () => 'categories',
        }),
    }),
})

export const { useGetCategoriesQuery } = categoriesApi
