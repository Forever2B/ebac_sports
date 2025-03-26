import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Game = {
  id: number
  nome: string
  preco: number
  imagem: string
}

type CarrinhoState = {
  items: Game[]
}

const initialState: CarrinhoState = { items: [] }

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload

      if (state.items.find((game) => game.id === jogo.id)) {
        alert('Uma cópia do item já está no carrinho!')
      } else {
        state.items.push(jogo)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
