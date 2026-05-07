
import { StyledCapa } from './styled';
import raquel from '../../assets/raquel.png';





export default function Capa() {
    return (
        <StyledCapa id='home'>


            <section id='container'>

                <div id='cxTexto'>
                    <div id='texto'>
                        <h2>Raquel Timoteo</h2>
                        <h3>
                            Palestras  e Treinamentos Corporativos
                        </h3>
                        <p>
                            Desnaturalizar violências, ampliar o possível:
                            Onde há diversidade, há transformação.
                        </p>

                    </div>

                </div>

                <img src={raquel} alt="" />


            </section>


        </StyledCapa>
    )
}