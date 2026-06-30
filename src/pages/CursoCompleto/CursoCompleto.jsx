import { StyledCursoCompleto } from "./styled";
import { useEffect } from "react";
import Header from '../../components/Header/Header';

import img from '../../assets/galeriaFotos/1.jpeg'

export default function CursoCompleto() {

        useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant" // ou remova esta linha
        });
    }, []);

    return (
        <>
            <Header />

            <StyledCursoCompleto>

                <div id="container">

                    <h1>Curso Completo de Diversidade e Inclusão</h1>

                    <h2>
                        Nosso Curso Completo de Diversidade e Inclusão foi desenvolvido para promover conhecimento, conscientização e transformação nas relações profissionais, contribuindo para a construção de ambientes de trabalho mais inclusivos, respeitosos e produtivos.
                        Com carga horária total de 5 horas, o curso é realizado de forma 100% on-line, por meio de videoaulas dinâmicas e de fácil compreensão.
                    </h2>

                    <h3>
                        Ao longo da formação, são abordados sete temas fundamentais para a promoção da diversidade e da inclusão nas organizações:
                    </h3>

                    <div id="containerCxTexto">

                        <div id="cxTexto">
                            <h4>
                                Vieses Inconscientes – Como Nascem os Preconceitos
                            </h4>
                            <img src={img} alt="img" />
                            <p>
                                Compreensão dos mecanismos que influenciam nossas percepções, decisões e comportamentos, muitas vezes de forma automática e sem que percebamos.
                            </p>

                        </div>


                        <div id="cxTexto">
                            <h4>
                                Questões de Gênero – Homens e Mulheres no Ambiente de Trabalho
                            </h4>
                            <img src={img} alt="img" />
                            <p>
                                Reflexão sobre igualdade de oportunidades, respeito às diferenças e valorização da diversidade de gênero nas organizações.
                            </p>

                        </div>

                        <div id="cxTexto">
                            <h4>
                                Relações Raciais
                            </h4>
                            <img src={img} alt="img" />
                            <p>
                                Discussão sobre racismo, desigualdades raciais e práticas que contribuem para a promoção da equidade e do respeito.
                            </p>

                        </div>


                        <div id="cxTexto">
                            <h4>
                                Inclusão de Pessoas com Deficiência no Ambiente de Trabalho
                            </h4>
                            <img src={img} alt="img" />
                            <p>
                                Conceitos de acessibilidade, inclusão e valorização das potencialidades das pessoas com deficiência.
                            </p>

                        </div>


                        <div id="cxTexto">
                            <h4>
                                Comunidade LGBT+ e Homofobia
                            </h4>
                            <img src={img} alt="img" />
                            <p>
                                Conscientização sobre diversidade sexual e de gênero, combate ao preconceito e construção de ambientes acolhedores para todos.
                            </p>

                        </div>


                        <div id="cxTexto">
                            <h4>
                                Pessoas Idosas e Conflitos Geracionais
                            </h4>
                            <img src={img} alt="img" />
                            <p>
                                Entendimento das diferenças entre gerações, valorização da experiência e fortalecimento da convivência intergeracional.
                            </p>

                        </div>

                        <div id="cxTexto">
                            <h4>
                                Assédio Moral e Sexual no Ambiente de Trabalho
                            </h4>
                            <img src={img} alt="img" />
                            <p>
                                Identificação, prevenção e enfrentamento de situações de assédio, promovendo ambientes profissionais seguros e respeitosos
                            </p>

                        </div>


                    </div>


                    <h3>
                        Ao concluir o curso, os participantes estarão mais preparados para reconhecer preconceitos, respeitar as diferenças e atuar de forma ativa na construção de uma cultura organizacional baseada na diversidade, na inclusão e no respeito às pessoas.
                    </h3>
                    <h3>
                        Leve  Esse curso Para seu espaço de trabalho!
                    </h3>
                    <h3>
                        Entre em contato !
                    </h3>

                </div>

            </StyledCursoCompleto>
        </>
    )
}