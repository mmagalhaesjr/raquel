import styled from "styled-components";
import { fundo } from "../../constants/Cores";

export const StyledSobre = styled.section`
  width: 100%;
  height:100dvh ;
  background-color: ${fundo};

 

  #container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #texto {
    width: 90%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3%;
  }

  h2 {
    font-size: 3rem;
    font-size: clamp(1rem, 6vw, 3rem);
    margin-bottom: 10px;
    text-align: center;
  }

  p {
    font-size: clamp(0.7rem, 1.5rem, 1rem);
    line-height: 1.5;
    text-align: justify;
  }

  @media (max-width: 900px) {
      height: fit-content;

    #container {
      height: 50vh;
      flex-direction: column;
      text-align: center;
    }

    #texto {
      width: 95%;
    }

    h2{
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
      margin-top: 0%;
      line-height: 1.3;
    }
  }
`;