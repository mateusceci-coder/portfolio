import Avatar from '../../Components/Avatar'
import Paragrafo from '../../Components/Paragrafo'
import Titulo from '../../Components/Titulo'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Mateus Ceci</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        mateusceci-coder
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-end
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
