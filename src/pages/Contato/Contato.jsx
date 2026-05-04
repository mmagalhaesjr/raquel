import { StyledContato } from "./styled";

import { RxQuote } from "react-icons/rx";
import { CiInstagram, CiLinkedin } from "react-icons/ci";

import { Link } from "react-router-dom";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contato() {

 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'raquel_id',
      'template_raquel',
      form.current,
      'eeCOFVsYvGBtJAcOR'
    )
      .then((result) => {
        console.log(result.text);
        alert("Mensagem enviada com sucesso!"); 
      })
      .catch((error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <StyledContato id="contato">

      <h2>CONTATO</h2>

      <section id="container">

        <div id="formArea">

          {/* AQUI ESTÁ A LIGAÇÃO COM EMAILJS */}
          <form ref={form} onSubmit={sendEmail}>

            <label>CONTATO</label>
            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              required
            />

            <label>E-MAIL</label>
            <input
              type="email"
              name="email"
              placeholder="Seu email"
              required
            />

            <label>ASSUNTO</label>
            <input
              type="text"
              name="assunto"
              placeholder="Assunto"
              required
            />

            <label>MENSAGEM</label>
            <textarea
              name="mensagem"
              placeholder="Digite sua mensagem"
              required
            ></textarea>

            <button id="botao" type="submit">ENVIAR</button>
          </form>

          <div id="cxLink">
            <Link to="https://www.instagram.com/raqueltimoteoeducacao/" target="_blank">
              <CiInstagram className="icone" />
            </Link>

            <Link to="https://www.linkedin.com/in/raquel-timoteo-39122b67/" target="_blank">
              <CiLinkedin className="icone" />
            </Link>
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