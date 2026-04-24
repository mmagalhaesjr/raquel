import styled from "styled-components";
import { fundo } from '../../constants/Cores';

export const StyledHome = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${fundo};

  #container {
    width: 100%;
    height: calc(100vh - 100px); 
    position: relative;
    top:100px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    //border: solid 5px red;
  }

  #cxTexto {
    width: 60%;

    display: flex;
    align-items: center;
    justify-content: center;
    //border: solid 2px red;
  }
  #texto{
      // border: solid 2px blue;
  }

  h2 {
    font-size: clamp(2rem, 5vw, 5rem);
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    max-width: 500px;
  }

  #cxImagem{
    width: 40%;
    height: 100%;
    //border: solid 2px blue;
  }

  #fotoRaquel {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }



  @media (max-width: 900px) {
  #container {
      flex-direction: column;
      text-align: center;
  }

   
  #cxTexto {
    width: 90%;
    height: 40%;

    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
  }
  #texto {
     width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
     
    }

    h1 {
      font-size: 2rem;
      
    }

    p {
      font-size: 1rem;
    }

  #cxImagem{
    width: 90%;
    height: 70%;
   margin-bottom: 20%;
    //border: solid 2px blue;

  }

  #fotoRaquel {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  }
`;