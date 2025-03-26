import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'

import store from './components/store'

function App() {
  // -------------------------------------------------------------

  return (
    <>
      <GlobalStyle />
      <div className="container">
        {/* <Header /> */}
        <Produtos />
      </div>
    </>
  )
}

export default App
