import { ThemeProvider } from 'styled-components'
import Sobre from './containers/Sobre'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'
import Projetos from './containers/Projetos'
import TemaDark from './Themes/dark'
import TemaLight from './Themes/light'
import { useState } from 'react'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? TemaDark : TemaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
