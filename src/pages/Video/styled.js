import styled from "styled-components";
import { roxo } from '../../constants/Cores';

export const StyledVideo = styled.main`
    width: 100%;
    height: 100vh;
    background-color: ${roxo};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;



iframe {
 
  width: 30%;
  height: 30%;
  top: 0;
  left: 0;
}

`



