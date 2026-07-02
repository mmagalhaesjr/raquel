
import { StyledPalestras } from "./styled";

import img1 from '../../assets/galeriaFotos/44.jpeg'
import img2 from "../../assets/galeriaFotos/6.jpeg";
import img3 from "../../assets/galeriaFotos/5.jpeg";
import img4 from "../../assets/galeriaFotos/42-2.jpeg";


import { useNavigate } from "react-router-dom";
import { PiKeyReturnLight } from "react-icons/pi";
import { useState } from "react";

export default function Palestras() {

  const navigate = useNavigate();
  const [abrir, setAbrir] = useState(null)

  function Navegar() {
    navigate("/");
  }

  function vermais(index) {
    setAbrir(abrir === index ? null : index);
  }


  return (
    <StyledPalestras id="palestra">


      <section id="container">

        {/*<PiKeyReturnLight id="icone" onClick={() => navigate("/")} /> */}

        <h2>TEMAS ABORDADOS</h2>

        <div id="cxCards">

          <div className="card">
            <img src={img1} alt="img" />
            <h3>Equidade de gênero e diversidade sexual e identidade de gênero</h3>
            <p>
              Este tema propõe uma reflexão critica sobre os desatos enfrentados pelas mulheres no mercado do itabalho, abordando estereótipos de gênero, padrões sociais e desigualdades estruturais. Da mesma forma aborda questões sobre a comunidade LGBTQIAPN+ e suas vulnerabilidades em ambientes corporativos, mas também em sociedade. A partir de temas como autoestima, cultura, carreira e expressão de identidade os encontros convidam ao dialogo sobre respeito, inclusão e construção de ambientes mais Justos e diversos.
            </p>
            <ul className={abrir === 1 ? "ativo" : ""}>
              <li>Desafios da Mulher no Mercado de trabalho.</li>

              <li>Desconstruindo a “Amélia”: Uma Conversa sobre os Estereótipos de Gênero.</li>

              <li>Com que Roupa Eu Vou? Descobrindo como se Veste a Desigualdade de Gênero no Trabalho.</li>

              <li>Mulheres Reais: discutindo sobre auto estima, cultura e carreira.</li>

              <li>Respeito é Questão de Opinião? Diálogos sobre Diversidade Sexual e de Gênero. (Comunidade LGBT)</li>

              <button onClick={() => vermais(1)}>
                {abrir === 1 ? "Ver menos" : "Ver mais"}
              </button>
            </ul>

          </div>

          <div className="card">
            <img src={img2} alt="img" />
            <h3>Etarismo e capacitismo</h3>
            <p>
              A proposta deste tema é ampliar o olhar sobre idade e deficiência no contexto profissional, questionando preconceitos e estigmas que limitam oportunidades. A palestra aborda como são formados alguns preconceitos e como eles influenciam percepções sobre capacidade, produtividade e pertencimento, incentivando uma cultura mais inclusiva e que valorize a diversidade em todas as suas formas.
            </p>
            <ul className={abrir === 2 ? "ativo" : ""}>

              <li>Velho demais ou jovem demais para o mercado de trabalho?</li>

              <li>Pcd: Olhando para além da deficiência.</li>
              <button onClick={() => vermais(2)}>
                {abrir === 2 ? "Ver menos" : "Ver mais"}
              </button>
            </ul>

          </div>

          <div className="card">
            <img src={img3} alt="img" />
            <h3>Relações étnico-raciais</h3>
            <p>
              Um espaço de análise e conscientização sobre o racismo estrutural e o papel da branquitude na perpetuação das desigualdades racial no Brasil, dentro e fora dos espaços de trabalho. A palestra discute como os vieses inconscientes de raça se formam e impactam decisões e comportamentos, além de provocar reflexões sobre a responsabilidade individual e coletiva na construção de práticas antirracistas nas organizações.
            </p>
            <ul className={abrir === 3 ? "ativo" : ""}>
              <li>Branquitude e Racismo: Desafios para o mundo do trabalho.</li>

              <li>O Papel do Branco na Luta Antirracista.</li>

              <li>Viéses inconscientes: Como nascem os preconceitos.</li>
              <button onClick={() => vermais(3)}>
                {abrir === 3 ? "Ver menos" : "Ver mais"}
              </button>
            </ul>
          </div>


          <div className="card">
            <img src={img4} alt="img" />
            <h3>Assédios no ambiente de trabalho</h3>
            <p>
              O tema trata das diversas formas de assédio no ambiente profissional, unindo teoria e prática para identificação e enfrentamento dessas situações. Com foco em parâmetros legais, conceitos técnicos  e responsabilidade coletiva, as palestras sobre esse tema buscam oferecer repertório teórico-prático para o combate de violências  e a construção de ambientes seguros, respeitosos e livres de assédios.

            </p>
            <ul className={abrir === 4 ? "ativo" : ""}>
              <li>Assédios: Teoria e Prática no Enfrentamento a Situações no Ambiente Trabalho.</li>

              <li>Papo de mulher: Me Entendendo Dentro de uma Situação de Assédio Sexual.</li>

              <li>Papo de homem: Como Contribuir e Viver um Ambiente de Trabalho Seguro.</li>
              <button onClick={() => vermais(4)}>
              {abrir === 4 ? "Ver menos" : "Ver mais"}
            </button>
            </ul>
          </div>

        </div>
      </section>

    </StyledPalestras>
  );
}