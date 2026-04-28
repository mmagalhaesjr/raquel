import styled from "styled-components";
import { fundo } from "../../constants/Cores";

export const StyledTreinamentos = styled.section`
  width: 100%;
  min-height: 100vh;
  background: ${fundo};

  #container {
    width: 100%;
    position: relative;
    padding: 0 8%;
    
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-evenly;
  }

   #icone{
    color: #ffffff;
    font-size: 3rem;
    position: absolute;
    top: 10px;
    left: 10px;
    cursor: pointer;
  }


  #beneficios {
    display: flex;
    justify-content: space-between;
    gap: 5%;
    margin-bottom: 0%;
    text-align: center;
    //border: solid 2px red;
   
  }

  .item {
    width: 22%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: #333;
      
   
  }

  .item p {
    font-size:.8rem;
   // border: solid 2px red;
  
  }

 
  #descricao {
    width: 95%;
    text-align: center;
    margin: 0 auto;
    color: #555;
    font-size: 0.9rem;
    line-height: 1.6;
    //border: solid 2px red;
  
  }

  #depoimentos {
    width: 100%;
    height: 200px;
    background: #6b6b6b;
    color: white;
    padding: 40px 8%;
    text-align: center;

    //border: solid 2px red;

  }

  #depoimentos h3 {
    margin-bottom: 10px;
    letter-spacing: 2px;
  }

  #slider {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #slider button {
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
  }

  #depoimento {
    max-width: 600px;
  }

  #depoimento p {
    margin-bottom: 20px;
    font-style: italic;
  }

  #depoimento span {
    display: block;
    font-weight: bold;
  }

  #depoimento small {
    opacity: 0.8;
  }

 
  @media (max-width: 900px) {
  #container {
  height: calc(100dvh - 50px); 
  top:50px;

    display: flex;
    flex-direction:column;
    align-items: center;
   justify-content: flex-start;
    gap: 40px;

    overflow: scroll;

  }

  h2{
    text-align: center;
    margin-top: 20px;
  }

    #beneficios {
      flex-direction: column;
      align-items: center;
    }

    .item {
      width: 100%;
    }
     #descricao {
    width: 100%;
    margin: 0 auto;
    color: #555;
    font-size: 0.9rem;
    line-height: 1.6;
    margin-top: 10%;

  }

    #depoimentos{
      width: 100%;
      height: auto;
      margin-bottom: 5%;
      margin-bottom: 20%;
    }

    #slider {
      flex-direction: column;
      gap: 20px;
      
    }
  }
`;