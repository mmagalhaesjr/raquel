
import { StyledCapa } from './styled';
import raquel from "../../assets/raquel.png"




export default function Capa() {
    return (
        <StyledCapa>


            <section id='container'>

                <div id='cxTexto'>
                    <div id='texto'>
                        <h2>Raquel Timoteo</h2>
                        <p>
                            Desnaturalizar violências, ampliar o possível:
                            Onde há diversidade, há transformação.
                        </p>
                    </div>

                </div>

                <div id='cxImagem'>
                    <img id='fotoRaquel' src={raquel} alt="" />
                </div>





            </section>


        </StyledCapa>
    )
}