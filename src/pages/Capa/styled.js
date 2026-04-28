import styled from "styled-components";
import { fundo } from '../../constants/Cores';

export const StyledCapa = styled.main`
  width: 100%;
  background-color: ${fundo};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  #container {
    width: 100%;
   
    display: flex;
    align-items: center;
    justify-content: space-between;

   // border: solid 5px red;
  }
img{
  display: none;
}
  #cxTexto {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    //border: solid 2px red;
  }
  #texto{
      //border: solid 2px blue;
      text-align: center;
  }

  h2 {
    font-size: clamp(2rem, 10vw, 7rem);
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    max-width: 500px;
    text-align: center;
    line-height: 1.5;
    
  }



  @media (max-width: 900px) {
    height: 100dvh;
   
  #container {
      flex-direction: column;
      text-align: center;
      height: calc(100dvh); 
      margin-top: 50px;
    
  }

  img{
    display: block;
    width: 90%;
    
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

    p {
      font-size: 1rem;
    }

  }
`;