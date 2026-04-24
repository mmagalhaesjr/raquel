import { StyledContato } from "./styled";
import Header from '../../components/Header/Header';
import { PiKeyReturnLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

export default function Contato() {
   const navigate = useNavigate();

     function Navegar(){
    navigate("/");
  }


  return (
    <StyledContato>
    
      <Header />

      <section id="container">

           <PiKeyReturnLight id="icone" onClick={() => navigate("/")} />

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
        </div>

        <div id="frase">
          <span>"</span>
          <p>
            Falar de Diversidade Equidade Inclusão e Pertencimento
            pode ser uma estratégia de negócio.
          </p>
        </div>

      </section>
    </StyledContato>
  );
}