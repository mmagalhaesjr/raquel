import { StyledContato } from "./styled";

import { PiKeyReturnLight } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { RxQuote } from "react-icons/rx";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { Target } from "lucide-react";

export default function Contato() {
  const navigate = useNavigate();

  function Navegar() {
    navigate("/");
  }


  return (
    <StyledContato id="contato">

      <h2>
        CONTATO
      </h2>

      <section id="container">

        {/* <PiKeyReturnLight id="icone" onClick={() => navigate("/")} /> */}

        <div id="formArea">
          <form>
            <label>CONTATO</label>
            <input type="text" placeholder="Seu nome" />

            <label>E-MAIL</label>
            <input type="email" placeholder="Seu email" />

            <label>ASSUNTO</label>
            <input type="text" placeholder="Assunto" />

            <label>MENSAGEM</label>
            <textarea placeholder="Digite sua mensagem"></textarea>

            <button id="botao" type="submit">ENVIAR</button>
          </form>

          <div id="cxLink">
            <Link to={"https://www.instagram.com/raqueltimoteoeducacao/"} target="_blank"><CiInstagram className="icone" /></Link>
            <Link to={"https://www.linkedin.com/in/raquel-timoteo-39122b67/"} target="_blank"><CiLinkedin className="icone" /></Link>
          </div>
          
        </div>

        <div id="frase">
          <RxQuote className="icone" />
          <p>
            Falar de Diversidade, Equidade, Inclusão e Pertencimento
            pode ser uma estratégia de negócio.
          </p>

        </div>

      </section>



    </StyledContato>
  );
}