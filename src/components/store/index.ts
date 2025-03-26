import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'
import favoritesReducer from './reducers/favorites'
import apiReducer from '../services/api'
import { useDispatch } from 'react-redux'

const store = configureStore({
  reducer: {
    api: apiReducer,
    carrinho: carrinhoReducer,
    favorites: favoritesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch
export type AppDispatch = typeof store.dispatch
export default store
