import styled from "styled-components";
import { fundo } from "../../constants/Cores";

export const StyledSobre = styled.section`
  width: 100%;
   min-height: 100vh;
  background-color: ${fundo};

  #container {
    width: 100%;
    padding-top: 100px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

      //border: solid 2px blue;
  }

 


  #cxTexto {
    width: 70%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    //border: solid 2px red;
  }
  #texto{
    width: 90%;
    height: 90%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    //border: solid 2px blue;
  }

  h2 {
    font-size: clamp( 1rem, 6vw, 3rem);
    margin-bottom: 10px;
    text-align: center;
  }

  p {
   font-size: clamp(.7rem, 1.5rem, 1rem);
    margin-top: 3%;
    line-height: 1.5;
    text-align: justify;
  }

  #fotoRaquel {
    width: 40%;
    height: 100%;
    object-fit: cover;
  }


  @media (max-width: 900px) {
    #container {
      height: calc(100dvh - 50px); 
      top:50px;

      flex-direction: column;
      text-align: center;
      //border: solid 2px blue;
    }

    #cxTexto {
    width: 95%;
    height: 70vh;

    display: flex;
    align-items: center;
    justify-content: center;
    //border: solid 2px red;
  }
  #texto{
    width: 95%;
    height: 95%;
    //border: solid 2px blue;

      display: flex;
      flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  

    p {
      font-size: .7rem;
      margin-top: 0%;
      line-height: 1.;
    }
    #fotoRaquel {
        width: auto;
        height: 30%;
        object-fit: cover;
        margin-bottom: 2%;

        //border: solid 2px red;
    }

 
  }

`