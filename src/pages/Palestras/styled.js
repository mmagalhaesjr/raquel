import styled from "styled-components";
import { fundo } from "../../constants/Cores";

export const StyledPalestras = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: ${fundo};

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
    text-align: center;
    margin-bottom: 40px;
    letter-spacing: 2px;
    color: #444;
  }

  #cards {
    width: 100%;
    height: auto;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    border: solid 2px red;
  }

  .card {
    display: flex;
    flex-direction: column;
  }

  .card img {
    width: 100%;
    height: 140px;
    object-fit: cover;
    margin-bottom: 10px;
  }

  .card h3 {
    font-size: 0.9rem;
    margin-bottom: 10px;
    color: #222;
  }

  .card p {
    font-size: 0.75rem;
    color: #555;
    line-height: 1.4;
  }

  /* 📱 RESPONSIVO */
  @media (max-width: 1024px) {
    #cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    #cards {
      grid-template-columns: 1fr;
    }

    .card img {
      height: 180px;
    }

    .card h3 {
      font-size: 1rem;
    }

    .card p {
      font-size: 0.85rem;
    }
  }
`;