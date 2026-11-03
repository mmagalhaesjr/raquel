
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import modeloCertificado from "../../assets/certificado.png";

import { modulos } from "../../components/Curso/ListaVideos/ListaVideos";

import { StyledCertificado } from "./styled";

import { PiKeyReturnLight } from "react-icons/pi";

// ---------- Dados fixos do certificado ----------
const NOME_CURSO = "Treinamento de Diversidade";

// ---------- Progresso do curso ----------
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

  if (n.length !== 11 || /^(\d)\1{10}$/.test(n)) {
    return false;
  }

  const digito = (base) => {
    let soma = 0;

    for (let i = 0; i < base; i++) {
      soma += Number(n[i]) * (base + 1 - i);
    }

    const resto = (soma * 10) % 11;

    return resto === 10 ? 0 : resto;
  };

  return (
    digito(9) === Number(n[9]) &&
    digito(10) === Number(n[10])
  );
}

// ---------- Carregar imagem ----------
function carregarImagem(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => resolve(img);
    img.onerror = reject;

    img.src = src;
  });
}

// ---------- Cores do certificado ----------
const AZUL = [26, 86, 172];
const VERDE = [122, 185, 99];
const CINZA = [60, 60, 60];

// ---------- Gerar PDF ----------
async function gerarCertificadoPdf({ nome, cpf, data }) {
  const { jsPDF } = await import("jspdf");

  const doc = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a4",
  });

  const largura = doc.internal.pageSize.getWidth();
  const altura = doc.internal.pageSize.getHeight();

  // Fundo do certificado
  const fundo = await carregarImagem(modeloCertificado);

  doc.addImage(
    fundo,
    "PNG",
    0,
    0,
    largura,
    altura
  );

  // Centro da área livre do modelo
  const centro = 157;
  const larguraTexto = 150;

  // ---------- Subtítulo ----------
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(...VERDE);

  const subtitulo = "DE CONCLUSÃO";
  const espacamento = 1.5;

  const larguraSubtitulo =
    doc.getTextWidth(subtitulo) +
    espacamento * (subtitulo.length - 1);

  doc.text(
    subtitulo,
    centro - larguraSubtitulo / 2,
    51,
    {
      charSpace: espacamento,
    }
  );

  // ---------- Certificamos que ----------
  doc.setFont("helvetica", "normal");
  doc.setFontSize(14);
  doc.setTextColor(...CINZA);

  doc.text(
    "Certificamos que",
    centro,
    72,
    {
      align: "center",
    }
  );

  // ---------- Nome do funcionário ----------
  const nomeMaiusculo = nome.toUpperCase();

  let tamanhoNome = 26;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(tamanhoNome);

  while (
    doc.getTextWidth(nomeMaiusculo) > larguraTexto &&
    tamanhoNome > 14
  ) {
    tamanhoNome -= 1;
    doc.setFontSize(tamanhoNome);
  }

  doc.setTextColor(...AZUL);

  doc.text(
    nomeMaiusculo,
    centro,
    87,
    {
      align: "center",
    }
  );

  // ---------- Texto principal ----------
  const texto =
    `portador(a) do CPF ${cpf}, concluiu com êxito o curso ` +
    `"${NOME_CURSO}", em ${data}.`;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(13);
  doc.setTextColor(...CINZA);

  const linhas = doc.splitTextToSize(
    texto,
    larguraTexto
  );

  doc.text(
    linhas,
    centro,
    102,
    {
      align: "center",
      lineHeightFactor: 1.5,
    }
  );

  // ---------- Nome do arquivo ----------
  const nomeArquivo =
    `certificado-${nome.trim().replace(/\s+/g, "-").toLowerCase()}.pdf`;

  doc.save(nomeArquivo);
}

// ---------- Componente ----------
export default function Certificado() {
  const navigate = useNavigate();

  // ---------- Login do coordenador ----------
  const logado =
    sessionStorage.getItem("cursoLogado") === "true";

  const nomeLogin =
    sessionStorage.getItem("cursoNome") || "";

  // ---------- Dados do certificado ----------
  const chaveDados = `certificadoDados_${nomeLogin}`;

  const salvo = (() => {
    try {
      return JSON.parse(
        localStorage.getItem(chaveDados)
      );
    } catch {
      return null;
    }
  })();

  // ---------- Estados ----------
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");

  const [gerado, setGerado] = useState(false);
  const [gerando, setGerando] = useState(false);

  // ---------- Controle de acesso ----------
  if (!logado || !cursoFoiConcluido(nomeLogin)) {
    return <Navigate to="/curso" replace />;
  }

  // ---------- Baixar certificado ----------
  async function baixar(dados) {
    setGerando(true);

    try {
      await gerarCertificadoPdf(dados);

      setGerado(true);
    } catch (error) {
      console.error(error);

      alert(
        "Não foi possível gerar o certificado. Tente novamente."
      );
    } finally {
      setGerando(false);
    }
  }

  // ---------- Gerar certificado ----------
  function gerar(e) {
    e.preventDefault();

    if (!nome.trim()) {
      alert("Preencha o nome completo do funcionário.");
      return;
    }

    if (!cpfValido(cpf)) {
      alert("CPF inválido. Confira os números digitados.");
      return;
    }

    const dados = {
      nome: nome.trim(),
      cpf,
      data: new Date().toLocaleDateString("pt-BR"),
    };

    // Salva os dados do certificado atual
    localStorage.setItem(
      chaveDados,
      JSON.stringify(dados)
    );

    baixar(dados);
  }

  // ---------- Baixar novamente ----------
  function baixarNovamente() {
    const dados = JSON.parse(
      localStorage.getItem(chaveDados)
    );

    if (!dados) {
      alert("Não foi possível encontrar os dados do certificado.");
      return;
    }

    baixar(dados);
  }

  // ---------- Gerar novo certificado ----------
  function gerarNovoCertificado() {
    setNome("");
    setCpf("");
    setGerado(false);
  }

  // ---------- Renderização ----------
  return (
    <StyledCertificado>
      <PiKeyReturnLight
        id="icone"
        onClick={() => navigate("/curso")}
      />

      <div id="card">
        {gerado ? (
          <>
            <p id="sucesso">
              Certificado gerado com sucesso!
            </p>

            <button
              id="botao"
              type="button"
              onClick={baixarNovamente}
              disabled={gerando}
            >
              {gerando
                ? "GERANDO..."
                : "BAIXAR CERTIFICADO"}
            </button>

            <button
              id="botao"
              type="button"
              onClick={gerarNovoCertificado}
              disabled={gerando}
            >
              GERAR NOVO CERTIFICADO
            </button>
          </>
        ) : (
          <>
            <p id="intro">
              Parabéns por concluir o curso! Preencha os
              dados do funcionário exatamente como devem
              aparecer no certificado.
            </p>

            <form onSubmit={gerar}>
              <label>
                NOME COMPLETO
              </label>

              <input
                type="text"
                name="nome_completo"
                placeholder="Nome completo do funcionário"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />

              <label>
                CPF
              </label>

              <input
                type="text"
                name="cpf"
                inputMode="numeric"
                placeholder="000.000.000-00"
                value={cpf}
                onChange={(e) =>
                  setCpf(mascaraCpf(e.target.value))
                }
                required
              />

              <button
                id="botao"
                type="submit"
                disabled={gerando}
              >
                {gerando
                  ? "GERANDO..."
                  : "GERAR CERTIFICADO"}
              </button>
            </form>
          </>
        )}
      </div>
    </StyledCertificado>
  );
}
