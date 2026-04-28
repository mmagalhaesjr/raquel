import Header from '../../components/Header/Header';
import { StyledHome } from './styled';
import Capa from '../Capa/Capa';
import Sobre from '../Sobre/Sobre';
import Palestras from '../Palestras/Palestras';
import Treinamentos from '../Treinamentos/Treinamentos';
import Contato from '../Contato/Contato';
import Teste from '../../components/Teste/Teste';





export default function Home() {
    return (
        <StyledHome>

           <Header />
          

            <Capa/>
            <Sobre />
            <Palestras />
            <Treinamentos />
            <Contato />
          


        </StyledHome>
    )
}