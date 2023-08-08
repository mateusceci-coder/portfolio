import Titulo from '../../Components/Titulo'
import Paragrafo from '../../Components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis minima
      cum ipsam, commodi, expedita odit nam quaerat nihil exercitationem eaque
      mollitia sit. Suscipit adipisci facere expedita eveniet odit. Dolorem,
      sapiente.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=mateusceci-coder&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=mateusceci-coder&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
