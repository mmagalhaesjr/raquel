import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { usuariosAutorizados } from "../../components/Curso/ListaLogin/ListaLogin";
import { modulos } from "../../components/Curso/ListaVideos/ListaVideos";

import {
  AulaButton,
  Button,
  Card,
  Chevron,
  Input,
  Layout,
  ModuleHeader,
  Sidebar,
  StyledCurso,
  Title,
  VideoArea,
} from "./styled";

import { PiKeyReturnLight } from "react-icons/pi";

// ---------- Progresso (localStorage) ----------

// Uma chave por aluno, para não misturar progresso de pessoas
// diferentes que usem o mesmo navegador
function chaveProgresso(nome) {
  return `cursoProgresso_${nome}`;
}

function carregarProgresso(nome) {
  if (!nome) return [];
  try {
    return JSON.parse(localStorage.getItem(chaveProgresso(nome))) || [];
  } catch {
    return [];
  }
}

function salvarProgresso(nome, concluidas) {
  localStorage.setItem(chaveProgresso(nome), JSON.stringify(concluidas));
}

// Identificador de cada aula: "modulo-aula" (ex.: "0-1")
function idAula(moduloIndex, aulaIndex) {
  return `${moduloIndex}-${aulaIndex}`;
}

export default function Curso() {
  const [logado, setLogado] = useState(
    sessionStorage.getItem("cursoLogado") === "true"
  );
  const [nome, setNome] = useState(sessionStorage.getItem("cursoNome") || "");
  const [codigo, setCodigo] = useState("");

  // Guarda a posição da aula, não o objeto, para saber o id dela
  const [aulaSelecionada, setAulaSelecionada] = useState(null); // { m, a }
  const [moduloAberto, setModuloAberto] = useState(null);

  const [concluidas, setConcluidas] = useState(() => carregarProgresso(nome));

  const navigate = useNavigate();

  function handleLogin() {
    const codigoLimpo = codigo.trim().toLowerCase();

    const usuario = usuariosAutorizados.find(
      (pessoa) => pessoa.codigo === codigoLimpo
    );

    if (!usuario) {
      alert("Código inválido");
      return;
    }

    sessionStorage.setItem("cursoLogado", "true");
    sessionStorage.setItem("cursoNome", usuario.nome);
    setNome(usuario.nome);
    setConcluidas(carregarProgresso(usuario.nome));
    setLogado(true);
  }

  // ---------- Regras de progresso ----------

  function aulaConcluida(m, a) {
    return concluidas.includes(idAula(m, a));
  }

  function moduloConcluido(m) {
    return modulos[m].aulas.every((_, a) => aulaConcluida(m, a));
  }

  // Módulo 1 sempre liberado; os demais só depois de concluir o anterior
  function moduloLiberado(m) {
    return m === 0 || moduloConcluido(m - 1);
  }

  function marcarConcluida() {
    if (!aulaSelecionada) return;
    const { m, a } = aulaSelecionada;
    const id = idAula(m, a);

    if (!concluidas.includes(id)) {
      const novas = [...concluidas, id];
      setConcluidas(novas);
      salvarProgresso(nome, novas);
    }

    // Avança automaticamente para a próxima aula
    if (a + 1 < modulos[m].aulas.length) {
      setAulaSelecionada({ m, a: a + 1 });
    } else if (m + 1 < modulos.length) {
      setModuloAberto(m + 1);
      setAulaSelecionada({ m: m + 1, a: 0 });
    }
  }

  function abrirModulo(index) {
    if (!moduloLiberado(index)) {
      alert("Conclua o módulo anterior para liberar este.");
      return;
    }
    setModuloAberto(moduloAberto === index ? null : index);
  }

  // Curso completo = todas as aulas de todos os módulos concluídas
  const cursoConcluido = modulos.every((_, m) => moduloConcluido(m));

  function solicitarCertificado() {
    navigate("/certificado");
  }

  // Progresso geral
  const totalAulas = modulos.reduce((soma, mod) => soma + mod.aulas.length, 0);
  const percentual = totalAulas
    ? Math.round((concluidas.length / totalAulas) * 100)
    : 0;

  const aulaAtual = aulaSelecionada
    ? modulos[aulaSelecionada.m].aulas[aulaSelecionada.a]
    : null;

  return (
    <>
      {!logado ? (
        <StyledCurso>
          <PiKeyReturnLight id="icone" onClick={() => navigate("/")} />

          <Card>
            <Title>Login do Curso</Title>

            <Input
              type="password"
              placeholder="Digite seu código de acesso"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
            />

            <Button onClick={handleLogin}>Entrar</Button>
          </Card>
        </StyledCurso>
      ) : (
        <Layout>
          <Sidebar>

  <PiKeyReturnLight
    onClick={() => navigate("/")}
    title="Voltar"
    style={{ fontSize: "28px", cursor: "pointer", marginBottom: "12px" }}
  />

            <h3 id="nome">Bem-vindo, {nome}</h3>

            <p style={{ margin: "0 0 12px" }}>
              Progresso: {percentual}% ({concluidas.length}/{totalAulas} aulas)
            </p>

            {cursoConcluido && (
              <Button
                onClick={solicitarCertificado}
                style={{ marginBottom: "16px", width: "100%" }}
              >
                Solicitar certificado
              </Button>
            )}

            {modulos.map((modulo, m) => {
              const liberado = moduloLiberado(m);
              const feitas = modulo.aulas.filter((_, a) =>
                aulaConcluida(m, a)
              ).length;

              return (
                <div key={m}>
                  <ModuleHeader
                    onClick={() => abrirModulo(m)}
                    style={{
                      opacity: liberado ? 1 : 0.5,
                      cursor: liberado ? "pointer" : "not-allowed",
                    }}
                  >
                    {liberado ? "" : "🔒 "}
                    {modulo.nome} ({feitas}/{modulo.aulas.length})
                    <Chevron>{moduloAberto === m ? "▲" : "▼"}</Chevron>
                  </ModuleHeader>

                  {moduloAberto === m &&
                    liberado &&
                    modulo.aulas.map((aula, a) => (
                      <AulaButton
                        key={a}
                        onClick={() => setAulaSelecionada({ m, a })}
                        style={{
                          fontWeight:
                            aulaSelecionada?.m === m && aulaSelecionada?.a === a
                              ? "bold"
                              : "normal",
                        }}
                      >
                        {aulaConcluida(m, a) ? "✓ " : ""}
                        {aula.titulo}
                      </AulaButton>
                    ))}
                </div>
              );
            })}
          </Sidebar>

          <VideoArea>
            {aulaAtual ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "100%",
                }}
              >
                <iframe
                  key={aulaAtual.video}
                  width="100%"
                  style={{ flex: 1 }}
                  src={aulaAtual.video}
                  title={aulaAtual.titulo}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

                <div style={{ padding: "12px 0", textAlign: "right" }}>
                  {cursoConcluido ? (
                    <Button onClick={solicitarCertificado}>
                      Solicitar certificado
                    </Button>
                  ) : (
                    <Button onClick={marcarConcluida}>
                      {aulaConcluida(aulaSelecionada.m, aulaSelecionada.a)
                        ? "Próxima aula"
                        : "Marcar como concluída"}
                    </Button>
                  )}
                </div>
              </div>
            ) : (
              <p>Selecione uma aula</p>
            )}
          </VideoArea>
        </Layout>
      )}
    </>
  );
}
