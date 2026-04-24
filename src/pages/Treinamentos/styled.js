import styled from "styled-components";
import { fundo } from "../../constants/Cores";

export const StyledTreinamentos = styled.section`
  width: 100%;
  min-height: 100vh;
  background: ${fundo};

  #container {
    width: 100%;
    height: calc(100vh - 100px);
    position: relative;
    top:100px;
    padding: 0 8%;
    
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    

      //border: solid 2px blue;
  }

   #icone{
    color: #ffffff;
    font-size: 3rem;
    position: absolute;
    top: 10px;
    left: 10px;
    cursor: pointer;
  }


  h2 {
  padding-top: 50px;
  
  }


  #beneficios {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 40px;
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
    font-size: 0.9rem;
  }

  /* DESCRIÇÃO */
  #descricao {
    max-width: 800px;
    margin: 0 auto;
    color: #555;
    font-size: 0.9rem;
    line-height: 1.6;
  }

  /* DEPOIMENTOS */
  #depoimentos {
    width: 100%;
    background: #6b6b6b;
    color: white;
    padding: 50px 8%;
    text-align: center;
  }

  #depoimentos h3 {
    margin-bottom: 30px;
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

    #depoimentos{
      margin-bottom: 5%;
      margin-bottom: 20%;
    }

    #slider {
      flex-direction: column;
      gap: 20px;
      
    }
  }
`;