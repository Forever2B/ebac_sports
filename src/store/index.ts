/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'
import favoritoRducer from './reducers/favoritos'
import api from '../services/api'

const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favorito: favoritoRducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export default store
export type RootReducer = ReturnType<typeof store.getState>
