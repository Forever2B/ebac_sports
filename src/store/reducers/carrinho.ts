import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  produtos: Produto[]
}

const initialState: CarrinhoState = {
  produtos: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar(state, action: PayloadAction<Produto>) {
      state.produtos.find((p) => p.id === action.payload.id)
        ? alert('Item já adicionado')
        : state.produtos.push(action.payload)
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
