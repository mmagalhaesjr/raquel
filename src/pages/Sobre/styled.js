import styled from "styled-components";
import { fundo } from "../../constants/Cores";

export const StyledSobre = styled.section`
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

      border: solid 2px blue;
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

  h2 {
    font-size: 3rem;
    margin-bottom: 10px;
    text-align: center;
  }

  p {
   font-size: clamp(.7rem, 2.5vw, 1.5rem);
    margin-top: 5%;
    line-height: 1.5;
  }

  #fotoRaquel {
    width: 40%;
    height: 100%;
    object-fit: cover;
  }


  @media (max-width: 900px) {
    #container {
      flex-direction: column;
      text-align: center;
    }

    #cxTexto {
    width: 100%;
    height: 70vh;

    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 2px red;
  }
  #texto{
    width: 95%;
    height: 95%;
    border: solid 2px blue;

      display: flex;
      flex-direction: column;
    align-items: center;
    justify-content: center;
  }
     h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: .7rem;
      margin-top: 0%;
      line-height: 1.;
    }
    #fotoRaquel {
        width: 50%;
        height: 30%;
        object-fit: cover;
    }

 
  }

`