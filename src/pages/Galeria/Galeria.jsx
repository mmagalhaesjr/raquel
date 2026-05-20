import { useState } from "react";
import { ListaFotos } from "../../components/ListaFotos/ListaFotos";
import { StyledGaleria } from "./styled";
import Header from "../../components/Header/Header";

export default function Galeria() {
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  return (
    <StyledGaleria>
      <Header />

      <div id="container">
        {ListaFotos.map((foto, index) => (
          <img
            key={index}
            src={foto.img}
            alt={`Foto ${index + 1}`}
            onClick={() => setFotoSelecionada(foto.img)}
          />
        ))}
      </div>

      {fotoSelecionada && (
        <div
          id="fundo"
          onClick={() => setFotoSelecionada(null)}
        >
          <img src={fotoSelecionada} alt="Foto ampliada" />
        </div>
      )}
    </StyledGaleria>
  );
}