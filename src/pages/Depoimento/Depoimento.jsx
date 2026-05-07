
import { StyledDepoimento } from "./styled";
import { useNavigate } from "react-router-dom";
import { PiKeyReturnLight } from "react-icons/pi";

import { MessageSquare, Users, Award, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { Depoimentos } from "../../components/Depoimentos/Depoimentos";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css/effect-creative';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Depoimento() {

    const navigate = useNavigate();

    function Navegar() {
        navigate("/");
    }

    return (
        <StyledDepoimento id="depoimento">



            <section id="container">

                {/*  <PiKeyReturnLight id="icone" onClick={() => navigate("/")} /> */}





                <section id="cxDepoimentos">

                    <h3>DEPOIMENTOS</h3>

                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        navigation
                        pagination={{ clickable: true }}
                        grabCursor={true}
                        slidesPerView={1}
                        observer={true}
                        observeParents={true}
                    >


                        {Depoimentos.map((dep) => (
                            <SwiperSlide key={dep.nome}  >
                                <div id="cxSlider">


                                    <div className="depoimento">

                                        <p>{dep.texto}</p>

                                        <span>{dep.nome}</span>
                                        <small>{dep.profissao}</small>
                                    </div>


                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>

                </section>

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



            </section>

            {/* DEPOIMENTOS */}


        </StyledDepoimento>
    );
}