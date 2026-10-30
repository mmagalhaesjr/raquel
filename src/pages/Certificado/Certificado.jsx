import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import modeloCertificado from "../../assets/certificado.png"; 

import { modulos } from "../../components/Curso/ListaVideos/ListaVideos";
import { usuariosAutorizados } from "../../components/Curso/ListaLogin/ListaLogin";
import { StyledCertificado } from "./styled";

import { PiKeyReturnLight } from "react-icons/pi";

// ---------- Dados fixos do certificado (ajuste aqui) ----------
const NOME_CURSO = "Treinamento de Diversidade";


// ---------- Mesmas regras de progresso da página do curso ----------
function carregarProgresso(nome) {
  if (!nome) return [];
  try {
    return JSON.parse(localStorage.getItem(`cursoProgresso_${nome}`)) || [];
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

// ---------- Verificação na lista de autorizados ----------
// Os 4 últimos dígitos do CPF precisam ser iguais aos 4 últimos
// caracteres do código de algum usuário da lista.
function cpfAutorizado(cpf) {
  const finalCpf = cpf.replace(/\D/g, "").slice(-4);
  return usuariosAutorizados.some(
    (usuario) => usuario.codigo.trim().slice(-4) === finalCpf
  );
}

// ---------- Geração do PDF ----------
function carregarImagem(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

// Cores do modelo
const AZUL = [26, 86, 172];
const VERDE = [122, 185, 99];
const CINZA = [60, 60, 60];

async function gerarCertificadoPdf({ nome, cpf, data }) {
  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
  const largura = doc.internal.pageSize.getWidth(); // 297
  const altura = doc.internal.pageSize.getHeight(); // 210

  // Fundo: o PNG da pasta assets ocupando a página inteira
  const fundo = await carregarImagem(modeloCertificado);
  doc.addImage(fundo, "PNG", 0, 0, largura, altura);

  // Centro da área livre do modelo (alinhado com o título e a assinatura)
  const centro = 157;
  const larguraTexto = 150;

  // Subtítulo
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(...VERDE);
  // O jsPDF não conta o espaçamento entre letras ao centralizar,
  // então a largura é calculada na mão
  const subtitulo = "DE CONCLUSÃO";
  const espacamento = 1.5;
  const larguraSubtitulo =
    doc.getTextWidth(subtitulo) + espacamento * (subtitulo.length - 1);
  doc.text(subtitulo, centro - larguraSubtitulo / 2, 51, {
    charSpace: espacamento,
  });

  // "Certificamos que"
  doc.setFont("helvetica", "normal");
  doc.setFontSize(14);
  doc.setTextColor(...CINZA);
  doc.text("Certificamos que", centro, 72, { align: "center" });

  // Nome do aluno (diminui a fonte se o nome for muito comprido)
  const nomeMaiusculo = nome.toUpperCase();
  let tamanhoNome = 26;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(tamanhoNome);
  while (doc.getTextWidth(nomeMaiusculo) > larguraTexto && tamanhoNome > 14) {
    tamanhoNome -= 1;
    doc.setFontSize(tamanhoNome);
  }
  doc.setTextColor(...AZUL);
  doc.text(nomeMaiusculo, centro, 87, { align: "center" });

  // Texto principal
 
  const texto =
    `portador(a) do CPF ${cpf}, concluiu com êxito o curso ` +
    `${NOME_CURSO}, em ${data}.`;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(13);
  doc.setTextColor(...CINZA);
  const linhas = doc.splitTextToSize(texto, larguraTexto);
  doc.text(linhas, centro, 102, { align: "center", lineHeightFactor: 1.5 });

  const nomeArquivo = `certificado-${nome.trim().replace(/\s+/g, "-").toLowerCase()}.pdf`;
  doc.save(nomeArquivo);
}

export default function Certificado() {
  const navigate = useNavigate();

  const logado = sessionStorage.getItem("cursoLogado") === "true";
  const nomeLogin = sessionStorage.getItem("cursoNome") || "";
  const chaveDados = `certificadoDados_${nomeLogin}`;

  // Se o aluno já gerou antes, recupera os dados para baixar de novo
  const salvo = (() => {
    try {
      return JSON.parse(localStorage.getItem(chaveDados));
    } catch {
      return null;
    }
  })();

  const [nome, setNome] = useState(salvo?.nome || nomeLogin);
  const [cpf, setCpf] = useState(salvo?.cpf || "");
  const [gerado, setGerado] = useState(Boolean(salvo));
  const [gerando, setGerando] = useState(false);

  // Só entra quem está logado e concluiu todas as aulas
  if (!logado || !cursoFoiConcluido(nomeLogin)) {
    return <Navigate to="/curso" replace />;
  }

  async function baixar(dados) {
    setGerando(true);
    try {
      await gerarCertificadoPdf(dados);
      setGerado(true);
    } catch (error) {
      console.log(error);
      alert("Não foi possível gerar o certificado. Tente novamente.");
    } finally {
      setGerando(false);
    }
  }

  function gerar(e) {
    e.preventDefault();

    if (!nome.trim()) {
      alert("Preencha seu nome completo.");
      return;
    }

    if (!cpfValido(cpf)) {
      alert("CPF inválido. Confira os números digitados.");
      return;
    }

    if (!cpfAutorizado(cpf)) {
      alert(
        "CPF não encontrado na lista de participantes. Confira os números ou fale com a organização do curso."
      );
      return;
    }

    // A data de conclusão fica fixa na primeira vez que o certificado é gerado
    const dados = {
      nome: nome.trim(),
      cpf,
      data: salvo?.data || new Date().toLocaleDateString("pt-BR"),
    };

    localStorage.setItem(chaveDados, JSON.stringify(dados));
    baixar(dados);
  }

  function baixarNovamente() {
    const dados = JSON.parse(localStorage.getItem(chaveDados));
    baixar(dados);
  }

  return (
    <StyledCertificado>
      <PiKeyReturnLight id="icone" onClick={() => navigate("/curso")} />

      <div id="card">
        {gerado ? (
          <>
            <p id="sucesso">
              Seu certificado foi gerado! Se o download não começou, clique no
              botão abaixo.
            </p>
            <button
              id="botao"
              type="button"
              onClick={baixarNovamente}
              disabled={gerando}
            >
              {gerando ? "GERANDO..." : "BAIXAR CERTIFICADO"}
            </button>
          </>
        ) : (
          <>
            <p id="intro">
              Parabéns por concluir o curso! Preencha seus dados exatamente
              como devem aparecer no certificado.
            </p>

            <form onSubmit={gerar}>
              <label>NOME COMPLETO</label>
              <input
                type="text"
                name="nome_completo"
                placeholder="Seu nome completo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
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

              <button id="botao" type="submit" disabled={gerando}>
                {gerando ? "GERANDO..." : "GERAR CERTIFICADO"}
              </button>
            </form>
          </>
        )}
      </div>
    </StyledCertificado>
  );
}
