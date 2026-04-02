import styled from "styled-components";
import { roxo } from '../../constants/Cores';

export const StyledVideo = styled.main`
    width: 100%;
    height: 100vh;
    background-color: ${roxo};

    display: flex;
    align-items: center;
    justify-content: space-around;


#cxvideos{
  width: 300px;
  height: 90%;
  background-color: aliceblue;


    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
}
#video{
  width: 95%;
  height: 10%;
  background-color: #5f1ec9;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h2{
  color: #ffffff;
  font-size: 2rem;
}

#cxIframe{
  width: 70%;
  height: 90%;
  background-color: aliceblue;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


`



