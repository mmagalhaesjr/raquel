import Header from "../../components/Header/Header";
import { StyledSobre } from "./styled";
import raquel from '../../assets/raquel.png';
import { PiKeyReturnLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

export default function Sobre() {
    const navigate = useNavigate();


    function Navegar() {
        navigate("/");
    }

    return (
        <StyledSobre>

            <Header />

            <section id='container'>

               {/*  <PiKeyReturnLight id="icone" onClick={() => navigate("/")} /> */} 

              

                <div id='cxTexto'>
                    <div id='texto'>
                        <h2>QUEM É RAQUEL TIMOTEO?</h2>
                        <p>
                            Graduada em Serviço Social pela Universidade Federal de Juiz de Fora (UFJF), a professora possui sólida formação acadêmica, com pós-graduação em Diversidade, Etnicidade e Cultura, além de especialização em Psicologia Organizacional. É autora do capítulo IV do livro “A dimensão técnico-operativa no Serviço Social: desafios contemporâneos”, intitulado “Serviço Social, projeto ético-político e cultura: as intersecções na intervenção do assistente social”, publicado pela editora UFJF.
                        </p>
                        <p>
                            Com ampla atuação como palestrante, acumula experiência em treinamentos, congressos e eventos nos contextos organizacional e educacional. Seu trabalho é voltado especialmente para os temas da diversidade e suas intersecções com a violência e a violação de direitos no ambiente de trabalho, contribuindo para reflexões críticas e práticas institucionais mais inclusivas
                        </p>
                        <p>
                            Sua trajetória é marcada pelo desenvolvimento e implementação de políticas institucionais voltadas à garantia de direitos e à promoção de ambientes organizacionais mais saudáveis, éticos e inclusivos.
                        </p>
                    </div>

                </div>



                <img id='fotoRaquel' src={raquel} alt="" />




            </section>

        </StyledSobre>
    )
}