import { StyledContato } from "./styled";
import Header from '../../components/Header/Header';

export default function Contato() {
  return (
    <StyledContato>
      <Header />

      <section id="container">

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