import { useState } from "react";
import {  StyledLoguin } from "./styled";
import { ListaLogin } from '../../../components/Curso/ListaLogin/ListaLogin';
import { useNavigate } from "react-router-dom";

export default function Loguin() {
    const [cpf, setCpf] = useState("");
    const [nome, setNome] = useState("");
    const navigate = useNavigate();


    function handleSubmit(e) {
        e.preventDefault();

        // limpa CPF (remove pontos e traços)
        const cpfLimpo = cpf.replace(/\D/g, "");
    const usuario = ListaLogin.find(user => user.cpf === cpfLimpo);

        if (!usuario) {
            alert("CPF não autorizado!");
            return;
        }

        alert(`Bem Vindo ${nome}`);
        navigate("/video");
    }

    return (
        <StyledLoguin>
          

            <form onSubmit={handleSubmit}>
                    <h2>Área do Aluno</h2>

                <input
                    name="nome"
                    className="inputNome"
                    type="text"
                    placeholder="Nome"
                      value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />

                <input
                    name="cpf"
                    className="inputCpf"
                    type="text"
                    placeholder="CPF"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    required
                />

                <button type="submit">Enviar</button>
            </form>
        </StyledLoguin>
    );
}