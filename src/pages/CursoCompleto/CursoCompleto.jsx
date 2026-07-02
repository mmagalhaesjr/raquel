import { StyledCursoCompleto, StyledMeio } from "./styled";
import { useEffect } from "react";
import Header from '../../components/Header/Header';

import img from '../../assets/img2.jpeg'
import { ListaCursos } from "../../components/ListaCursos/ListaCursos";
import { Link } from "react-router-dom";

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

                <img id="imgInicial" src={img} alt="Imagem" />

                <div id="container">

                    <h1>Curso Completo de Diversidade e Inclusão</h1>

                    <h2>
                        Nosso Curso Completo de Diversidade e Inclusão foi desenvolvido para promover conhecimento, conscientização e transformação nas relações profissionais, contribuindo para a construção de ambientes de trabalho mais inclusivos, respeitosos e produtivos.
                        Com carga horária total de 5 horas, o curso é realizado de forma 100% on-line, por meio de videoaulas dinâmicas e de fácil compreensão.

                        Ao longo da formação, são abordados sete temas fundamentais para a promoção da diversidade e da inclusão nas organizações:
                    </h2>

                    <h2>

                    </h2>

                    <StyledMeio>
                        {ListaCursos.map((item, index) => (
                            <div
                                className={`card ${index % 2 !== 0 ? "invertido" : ""}`}
                                key={index}
                            >
                                <div className="cxTexto">
                                    <h4>{item.titulo}</h4>
                                    <p>{item.texto}</p>
                                </div>

                                <div className="cxImg" style={{ backgroundImage: `url(${item.img})` }}>

                                </div>
                            </div>
                        ))}
                    </StyledMeio>




                    <h2>
                        Ao concluir o curso, os participantes estarão mais preparados para reconhecer preconceitos, respeitar as diferenças e atuar de forma ativa na construção de uma cultura organizacional baseada na diversidade, na inclusão e no respeito às pessoas.
                    </h2>
                    <h3>
                        Leve  Esse curso Para seu espaço de trabalho!
                    </h3>

                    <Link to={'/'} state={{ scrollToFooter: true }}>
                        <h3>
                            Entre em contato !
                        </h3>
                    </Link>


                </div>

            </StyledCursoCompleto>
        </>
    )
}