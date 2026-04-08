import Header from "../../components/Header/Header";
import { StyledPalestras } from "./styled";

import img1 from "../../assets/palestras/img1.png";
import img2 from "../../assets/palestras/img2.png";
import img3 from "../../assets/palestras/img3.png";
import img4 from "../../assets/palestras/img4.png";

export default function Palestras() {
  return (
    <StyledPalestras>
      <Header />

      <section id="container">
        <h2>TEMAS ABORDADOS</h2>

        <div id="cards">

          <div className="card">
            <img src={img1} alt="" />
            <h3>Equidade de gênero e diversidade sexual e identidade de gênero</h3>
            <p>
              Este tema propõe uma reflexão critica sobre os desatos enfrentados pelas mulheres no mercado do itabalho, abordando estereótipos de gênero, padrões sociais e desigualdades estruturais. Da mesma forma aborda questões sobre a comunidade LGBTQIAPN+ e suas vulnerabilidades em ambientes corporativos, mas também em sociedade. A partir de temas como autoestima, cultura, carreira e expressão de identidade os encontros convidam ao dialogo sobre respeito, inclusão e construção de ambientes mais Justos e diversos.
            </p>
          </div>

          <div className="card">
            <img src={img2} alt="" />
            <h3>Etarismo e capacitismo</h3>
            <p>
           A proposta deste tema é ampliar o olhar sobre idade e deficiência no contexto profissional, questionando preconceitos e estigmas que limitam oportunidades. A palestra aborda como são formados alguns preconceitos e como eles influenciam percepções sobre capacidade, produtividade e pertencimento, incentivando uma cultura mais inclusiva e que valorize a diversidade em todas as suas formas.
            </p>
          </div>

          <div className="card">
            <img src={img3} alt="" />
            <h3>Relações étnico-raciais</h3>
            <p>
             Um espaço de análise e conscientização sobre o racismo estrutural e o papel da branquitude na perpetuação das desigualdades racial no Brasil, dentro e fora dos espaços de trabalho. A palestra discute como os vieses inconscientes de raça se formam e impactam decisões e comportamentos, além de provocar reflexões sobre a responsabilidade individual e coletiva na construção de práticas antirracistas nas organizações.
            </p>
          </div>

          <div className="card">
            <img src={img4} alt="" />
            <h3>Assédios no ambiente de trabalho</h3>
            <p>
            O tema trata das diversas formas de assédio no ambiente profissional, unindo teoria e prática para identificação e enfrentamento dessas situações. Com foco em parâmetros legais, conceitos técnicos  e responsabilidade coletiva, as palestras sobre esse tema buscam oferecer repertório teórico-prático para o combate de violências  e a construção de ambientes seguros, respeitosos e livres de assédios.

            </p>
          </div>

        </div>
      </section>
    </StyledPalestras>
  );
}