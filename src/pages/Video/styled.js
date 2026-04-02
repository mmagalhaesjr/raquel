import styled from "styled-components";
import { fundoVideo } from '../../constants/Cores';

export const StyledVideo = styled.main`
    width: 100%;
    height: 100vh;
    background-color: ${fundoVideo};

    display: flex;
    align-items: center;
    justify-content: space-around;


#cxvideos{
  width: 300px;
  height: 90%;
  background-color: #918d8d3b;
  border-radius: 10px;


  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
    
}
#video{
  width: 95%;
  height: 10%;
  background-color: #ffffff;
  cursor: pointer;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h2{
  color: #000000;
  font-size: 2rem;
}

#cxIframe{
  width: 70%;
  height: 90%;
  background-color: aliceblue;
  border-radius: 0px;
  background-color: #918d8d3b;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

    @media (max-width:800px) {
      width: 100%;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: space-around;
      
      #cxIframe{
        width: 100%;
      }

      #cxvideos{
          width: 100%;
          height: 90%;
          background-color: #918d8d3b;
          border-radius: 0px;

          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 10px;
      }
      #video{
        width: 150px;
      }
      h2{
        font-size:1rem;
      }
      
    }

`



