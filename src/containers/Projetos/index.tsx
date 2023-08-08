import Projeto from '../../Components/Projeto'
import Titulo from '../../Components/Titulo'
import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projeto Lista de Tarefas</Titulo>
    <Lista>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
    </Lista>
  </section>
)
export default Projetos
