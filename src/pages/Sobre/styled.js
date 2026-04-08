import styled from "styled-components";
import { fundo } from "../../constants/Cores";

export const StyledSobre = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: ${fundo};

  #container {
    width: 100%;
    min-height: calc(100vh - 80px); 
    
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #cxTexto {
    width: 70%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 2px red;
  }
  #texto{
    width: 90%;
    height: 90%;
    border: solid 2px blue;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 10px;
    text-align: center;
  }

  p {
    font-size: 1.5rem;
    margin-top: 5%;
  }

  #fotoRaquel {
    width: auto;
    height: auto;
    object-fit: cover;
  }


  @media (max-width: 768px) {
    #container {
      flex-direction: column;
      text-align: center;
    }

    #texto {
      width: 100%;
      align-items: center;
    }

    #fotoRaquel {
      width: 80%;
      margin-top: 20px;
    }

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }

`