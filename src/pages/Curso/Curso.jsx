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

export default function Curso() {
  const [logado, setLogado] = useState(
    sessionStorage.getItem("cursoLogado") === "true"
  );
  const [nome, setNome] = useState(
    sessionStorage.getItem("cursoNome") || ""
  );
  const [codigo, setCodigo] = useState("");
  const [aulaSelecionada, setAulaSelecionada] = useState(null);
  const [moduloAberto, setModuloAberto] = useState(null);

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
              type="password"
              placeholder="Digite seu código de acesso"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
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
