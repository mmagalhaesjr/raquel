import raquel from '../../assets/raquel.png';
import { StyledHome } from './styled';
import Header from '../../components/Header/Header';
import Capa from '../Capa/Capa';
import Sobre from '../Sobre/Sobre';
import Palestras from '../Palestras/Palestras';
import Contato from '../Contato/Contato';
import Depoimento from '../Depoimento/Depoimento';
export default function Home() {
    return (
        <StyledHome>

            <Header />

            <section className="blocoSticky">

                <div className="textos">
                    <Capa />
                    <Sobre />
                </div>

                   <div className="imagem">
                    <img src={raquel} alt="" />
                </div>

            </section>

            <Palestras />
            <Depoimento />
            <Contato />

        </StyledHome>
    )
}