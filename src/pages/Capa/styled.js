import styled from "styled-components";
import { fundo } from '../../constants/Cores';

export const StyledCapa = styled.main`
  width: 100%;
  height: auto;
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
  }
img{
  display: none;
}
  #cxTexto {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  #texto{
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }

  h2 {
    font-size: clamp(1.5rem, 10vw, 7rem);
    margin-bottom: 10px;
  }
  h3{
    font-size: clamp(1.4rem, 5vw, 2.3rem);
  }

  p {
    width: 70%;
    font-size: 1.2rem;
    text-align: center;
    line-height: 1.5;
    margin-top: 30px;

     display: flex;
    align-items: center;
    justify-content: center;

    
  }



  @media (max-width: 900px) {
    height: auto;
    margin-top: 50px;

   
  #container {
      flex-direction: column;
      text-align: center;
  }

  img{
    display: block;
    width: 90%;
    
}

   
  #cxTexto {
    width: 90%;
    margin-bottom: 5%;

    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
  }
  #texto {
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