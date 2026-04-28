
import { StyledTreinamentos } from "./styled";
import { useNavigate } from "react-router-dom";
import { PiKeyReturnLight } from "react-icons/pi";

import { MessageSquare, Users, Award, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";

export default function Treinamentos() {

    const navigate = useNavigate();

    function Navegar() {
        navigate("/");
    }

    return (
        <StyledTreinamentos>

          

            <section id="container">

                {/*  <PiKeyReturnLight id="icone" onClick={() => navigate("/")} /> */}


                <h2>
                    Quando o treinamento sobre diversidade é parte da estratégia de negócios:
                </h2>

                <div id="beneficios">

                    <div className="item">
                        <MessageSquare size={40} />
                        <p>Aumento da capacidade de inovação e resolução de problema</p>
                    </div>

                    <div className="item">
                        <Users size={40} />
                        <p>Redução de abstenção e faltas no trabalho</p>
                    </div>

                    <div className="item">
                        <Award size={40} />
                        <p>Redução de até 50% nos conflitos internos em comparação com outras organizações</p>
                    </div>

                    <div className="item">
                        <CheckCircle size={40} />
                        <p>Novas culturas de trabalho</p>
                    </div>

                </div>

                <div id="descricao">
                    <p>
                        Empresas que transformam sua cultura organizacional através de programas corporativos que discutem o tema  Diversidade, fomentam a construção de um ambiente inclusivo e respeitoso e criam um caminho motivador para os colaboradores.  Assim é possível formar gestores mais diligentes, aumentar  a percepção de pertencimento da equipe, melhorando a performance de resultados, e assim tornam o negócio mais sustentável.
                    </p>
                </div>

                <section id="depoimentos">

                    <h3>DEPOIMENTOS</h3>

                    <div id="slider">

                        <button><ArrowLeft /></button>

                        <div id="depoimento">
                            <p>
                                ““Tratar violência como violêncoa... sua fala é tão sensível quanto impactante. Obrigada por me deixar incomodada e pensativa... aprendendo sempre!”

                                Adriana Souza
                                Educadora.”
                            </p>

                            <span>Adriana Souza</span>
                            <small>Educadora</small>
                        </div>

                        <button><ArrowRight /></button>

                    </div>

                </section>

            </section>

            {/* DEPOIMENTOS */}


        </StyledTreinamentos>
    );
}