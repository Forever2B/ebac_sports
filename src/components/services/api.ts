import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

export const fetchProdutos = createAsyncThunk('produtos/fetch', async () => {
  const response = await fetch(
    'https://fake-api-tau.vercel.app/api/ebac_sports'
  )
  return (await response.json()) as Produto[]
})

const produtosSlice = createSlice({
  name: 'produtos',
  initialState: {
    produtos: [] as Produto[],
    carregando: false,
    erro: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProdutos.pending, (state) => {
        state.carregando = true
      })
      .addCase(fetchProdutos.fulfilled, (state, action) => {
        state.produtos = action.payload
        state.carregando = false
      })
      .addCase(fetchProdutos.rejected, (state) => {
        state.erro = 'Erro ao carregar produtos'
        state.carregando = false
      })
  }
})

export default produtosSlice.reducer
