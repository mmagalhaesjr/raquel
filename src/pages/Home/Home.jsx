import Header from '../../components/Header/Header';
import { StyledHome } from './styled';
import raquel from "../../assets/raquel.png"



export default function Home() {
    return (
        <StyledHome>

            <Header />

            <section id='container'>

                <div id='cxTexto'>
                    <div id='texto'>
                        <h1>Raquel Timoteo</h1>
                        <p>
                            Desnaturalizar violências, ampliar o possível:
                            Onde há diversidade, há transformação.
                        </p>
                    </div>

                </div>



                <img id='fotoRaquel' src={raquel} alt="" />




            </section>


        </StyledHome>
    )
}