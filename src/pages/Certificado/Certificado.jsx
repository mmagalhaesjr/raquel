import { useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

import { modulos } from "../../components/Curso/ListaVideos/ListaVideos";
import { StyledCertificado } from "./styled";

import { PiKeyReturnLight } from "react-icons/pi";

// ---------- Configuração do EmailJS ----------
// Use o mesmo service e public key do Contato, e crie um
// template novo no painel do EmailJS para o certificado.

const EMAILJS_SERVICE = "raquel_id";
const EMAILJS_TEMPLATE = "certificado_id";
const EMAILJS_PUBLIC_KEY = "eeCOFVsYvGBtJAcOR";

// ---------- Mesmas regras de progresso da página do curso ----------
function carregarProgresso(nome) {
  if (!nome) return [];
  try {
    return (
      JSON.parse(localStorage.getItem(`cursoProgresso_${nome}`)) || []
    );
  } catch {
    return [];
  }
}

function cursoFoiConcluido(nome) {
  const concluidas = carregarProgresso(nome);
  return modulos.every((modulo, m) =>
    modulo.aulas.every((_, a) => concluidas.includes(`${m}-${a}`))
  );
}

// ---------- CPF ----------
function mascaraCpf(valor) {
  return valor
    .replace(/\D/g, "")
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function cpfValido(cpf) {
  const n = cpf.replace(/\D/g, "");
  if (n.length !== 11 || /^(\d)\1{10}$/.test(n)) return false;

  const digito = (base) => {
    let soma = 0;
    for (let i = 0; i < base; i++) soma += Number(n[i]) * (base + 1 - i);
    const resto = (soma * 10) % 11;
    return resto === 10 ? 0 : resto;
  };

  return digito(9) === Number(n[9]) && digito(10) === Number(n[10]);
}

export default function Certificado() {
  const navigate = useNavigate();
  const form = useRef();

  const logado = sessionStorage.getItem("cursoLogado") === "true";
  const nomeLogin = sessionStorage.getItem("cursoNome") || "";
  const chaveSolicitado = `certificadoSolicitado_${nomeLogin}`;

  const [cpf, setCpf] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(
    localStorage.getItem(chaveSolicitado) === "true"
  );

  // Só entra quem está logado e concluiu todas as aulas
  if (!logado || !cursoFoiConcluido(nomeLogin)) {
    return <Navigate to="/curso" replace />;
  }

  const dataConclusao = new Date().toLocaleDateString("pt-BR");

  function enviar(e) {
    e.preventDefault();

    if (!cpfValido(cpf)) {
      alert("CPF inválido. Confira os números digitados.");
      return;
    }

    setEnviando(true);

    emailjs
      .sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, form.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        localStorage.setItem(chaveSolicitado, "true");
        setEnviado(true);
      })
      .catch((error) => {
        console.log(error.text);
        alert("Não foi possível enviar agora. Tente novamente em instantes.");
      })
      .finally(() => setEnviando(false));
  }

  return (
    <StyledCertificado>
      <PiKeyReturnLight id="icone" onClick={() => navigate("/curso")} />

      <div id="card">
        

        {enviado ? (
          <p id="sucesso">
            Solicitação enviada! Você receberá seu certificado no e-mail
            informado.
          </p>
        ) : (
          <>
            <p id="intro">
              Parabéns por concluir o curso! Preencha seus dados exatamente
              como devem aparecer no certificado.
            </p>

            <form ref={form} onSubmit={enviar}>
              <label>NOME COMPLETO</label>
              <input
                type="text"
                name="nome_completo"
                placeholder="Seu nome completo"
                defaultValue={nomeLogin}
                required
              />

              <label>CPF</label>
              <input
                type="text"
                name="cpf"
                inputMode="numeric"
                placeholder="000.000.000-00"
                value={cpf}
                onChange={(e) => setCpf(mascaraCpf(e.target.value))}
                required
              />

              <label>E-MAIL</label>
              <input
                type="email"
                name="email"
                placeholder="Seu e-mail"
                required
              />

              {/* Dados extras que vão junto no e-mail */}
              <input type="hidden" name="nome_login" value={nomeLogin} />
              <input type="hidden" name="data_conclusao" value={dataConclusao} />

              <button id="botao" type="submit" disabled={enviando}>
                {enviando ? "ENVIANDO..." : "SOLICITAR CERTIFICADO"}
              </button>
            </form>
          </>
        )}
      </div>
    </StyledCertificado>
  );
}
