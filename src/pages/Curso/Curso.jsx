import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { cpfsAutorizados } from "../../components/Curso/ListaLogin/ListaLogin";
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

export default function Curso() {
  const [logado, setLogado] = useState(false);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [aulaSelecionada, setAulaSelecionada] = useState(null);
  const [moduloAberto, setModuloAberto] = useState(null);

  const navigate = useNavigate();

  function formatarCPF(valor) {
    const numeros = valor.replace(/\D/g, "").slice(0, 11);

    return numeros
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
      .slice(0, 14);
  }

  function handleLogin() {
    const cpfLimpo = cpf.replace(/\D/g, "");

    if (cpfLimpo.length !== 11) {
      alert("CPF inválido");
      return;
    }

    const usuario = cpfsAutorizados.find(
      (pessoa) => pessoa.cpf === cpfLimpo
    );

    if (!usuario) {
      alert("CPF não autorizado");
      return;
    }

    setNome(usuario.nome);
    setLogado(true);
  }

  return (
    <>
      {!logado ? (
        <StyledCurso>
          <PiKeyReturnLight
            id="icone"
            onClick={() => navigate("/")}
          />

          <Card>
            <Title>Login do Curso</Title>


            <Input
              type="text"
              placeholder="Seu CPF"
              value={cpf}
              onChange={(e) =>
                setCpf(formatarCPF(e.target.value))
              }
            />

            <Button onClick={handleLogin}>
              Entrar
            </Button>
          </Card>
        </StyledCurso>
      ) : (
        <Layout>
          <Sidebar>
            <h3 id="nome">Bem-vindo, {nome}</h3>

            {modulos.map((modulo, index) => (
              <div key={index}>
                <ModuleHeader
                  onClick={() =>
                    setModuloAberto(
                      moduloAberto === index
                        ? null
                        : index
                    )
                  }
                >
                  {modulo.nome}

                  <Chevron>
                    {moduloAberto === index
                      ? "▲"
                      : "▼"}
                  </Chevron>
                </ModuleHeader>

                {moduloAberto === index &&
                  modulo.aulas.map((aula, i) => (
                    <AulaButton
                      key={i}
                      onClick={() =>
                        setAulaSelecionada(aula)
                      }
                    >
                      {aula.titulo}
                    </AulaButton>
                  ))}
              </div>
            ))}
          </Sidebar>

          <VideoArea>
            {aulaSelecionada ? (
              <iframe
                width="100%"
                height="100%"
                src={aulaSelecionada.video}
                title={aulaSelecionada.titulo}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <p>Selecione uma aula</p>
            )}
          </VideoArea>
        </Layout>
      )}
    </>
  );
}
