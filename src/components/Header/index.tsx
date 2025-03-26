import { useSelector } from 'react-redux'

import * as S from './styles'
import cesta from '../../assets/cesta.png'

import { paraReal } from '../Produto'

import { RootReducer } from '../../store'

const Header = () => {
  const produtosNoCarrinho = useSelector(
    (state: RootReducer) => state.carrinho.produtos
  )

  const produtosFavoritos = useSelector(
    (state: RootReducer) => state.favorito.favoritos
  )

  const valorTotal = produtosNoCarrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{produtosFavoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {produtosNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
