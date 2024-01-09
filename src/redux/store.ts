import { configureStore } from '@reduxjs/toolkit'
import { categoriesApi } from './categoriesApi'
import { recipesApi } from './recipesApi'
import { reducer as userReducer } from './user/user.slice'

export const store = configureStore({
    reducer: {
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [recipesApi.reducerPath]: recipesApi.reducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            categoriesApi.middleware,
            recipesApi.middleware
        ),
    devTools: true,
})

export type TypeRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
