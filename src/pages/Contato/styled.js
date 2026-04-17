import styled from "styled-components";
import { fundo } from "../../constants/Cores";

export const StyledContato = styled.section`
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
    gap: 40px;
    padding: 5%;
    
    border: solid 2px blue;
  }


  #formArea {
    width: 50%;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  label {
    font-size: 0.7rem;
    letter-spacing: 1px;
    color: #555;
  }

  input, textarea {
    width: 100%;
    padding: 10px;
    border: none;
    background: #e5e5e5;
    outline: none;
  }

  textarea {
    height: 120px;
    resize: none;
  }

  #botao {
    margin-top: 10px;
    padding: 12px;
    border: none;
    background: #9a9a9a;
    cursor: pointer;
    transition: 0.3s;
  }

  #botao:hover {
    background: #7a7a7a;
  }


  #frase {
    width: 40%;
    color: #666;
    position: relative;
  }

  #frase span {
    font-size: 4rem;
    position: absolute;
    top: -30px;
    left: -20px;
  }

  #frase p {
    font-size: 1.2rem;
    line-height: 1.6;
  }


  @media (max-width: 900px) {
    #container {
   
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 10px;
        padding: 4%;
        flex-direction: column;
        text-align: center;
    }

    #formArea {
      width: 100%;
    }

    #frase {
      width: 100%;
      margin-top: 30px;
    }

    #frase span {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;