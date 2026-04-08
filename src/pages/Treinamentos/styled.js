import styled from "styled-components";
import { fundo } from "../../constants/Cores";

export const StyledTreinamentos = styled.section`
  width: 100%;
  min-height: 100vh;
  background: ${fundo};

  #container {
    width: 100%;
    min-height: calc(100vh - 80px);
    padding: 0 8%;
    
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    gap: 40px;

      border: solid 2px blue;
  }

  h2 {
  
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

 
  @media (max-width: 768px) {

    #beneficios {
      flex-direction: column;
      align-items: center;
    }

    .item {
      width: 100%;
    }

    #slider {
      flex-direction: column;
      gap: 20px;
    }
  }
`;