import { configureStore } from '@reduxjs/toolkit'
import { categoriesApi } from './categoriesApi'
import { recipesApi } from './recipesApi'

export const store = configureStore({
    reducer: {
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [recipesApi.reducerPath]: recipesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            categoriesApi.middleware,
            recipesApi.middleware
        ),
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
