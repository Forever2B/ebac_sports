import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  favoritos: Produto[]
}

const initialState: FavoritosState = {
  favoritos: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar(state, action: PayloadAction<Produto>) {
      state.favoritos.find((p) => p.id === action.payload.id)
        ? (state.favoritos = state.favoritos.filter(
            (p) => p.id !== action.payload.id
          ))
        : state.favoritos.push(action.payload)
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
