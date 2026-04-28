import styled from "styled-components";
import { fundo } from '../../constants/Cores';

export const StyledHome = styled.main`
  width: 100%;
  background-color: ${fundo};


  display: flex;
  flex-direction: column;

   


 
 .blocoSticky {
  display: flex;
  min-height: 200vh; 
}

.imagem {
  position: sticky;
  top: 100px; 

  width: 40%;
  height: calc(100vh - 100px);
}

.imagem img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.textos {
  width: 60%;
}

.textos > * {
  min-height: 100vh;
  display: flex;
  align-items: center;
}
 
@media (max-width: 900px) {
  .blocoSticky {
    flex-direction: column;
    min-height: auto;
  }

  .imagem {
    display: none;
  }

  .textos {
    width: 100%;
  }
}

 
`;