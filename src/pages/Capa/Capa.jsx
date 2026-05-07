
import { StyledCapa } from './styled';
import raquel from '../../assets/raquel.png';





export default function Capa() {
    return (
        <StyledCapa id='home'>


            <section id='container'>

                <div id='cxTexto'>
                    <div id='texto'>
                        <h2>Raquel <br></br>Timoteo</h2>
                        <p>
                           palestras  e treinamentos corporativos 
                        </p>
                    </div>

                </div>

                <img src={raquel} alt="" />


            </section>


        </StyledCapa>
    )
}