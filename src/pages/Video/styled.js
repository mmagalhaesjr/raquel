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
  background-color: #ffffffff;
  border-radius: 20px;


  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
  #grupamentoVideo{
    width: 300px;
    height: 90%;
    background-color: #ffffffff;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;
  }
h1{
  font-size: 2rem;
}
#video{
  width: 95%;
  height: 8%;
  background-color: #ffffff;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid #918d8d3b;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover{
    
  }
}
h2{
  color:#918d8db7;
  font-size: 1.5;

}

#cxIframe{
  width: 70%;
  height: 90%;
  background-color: aliceblue;
  border-radius:20px;
  background-color: #ffffffff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
 iframe{
  box-shadow: 5px 5px 10px #000000;
  border-radius: 10px;
  border: solid 3px #000000;
 }

    @media (max-width:800px) {
      width: 100%;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: space-around;
      
      #cxIframe{
        width: 100%;
         border-radius: 0px;
      }

      #cxvideos{
          width: 100%;
          height: 90%;
          background-color: #ffffffff;
          border-radius: 0px;

          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 10px;
      }

  #grupamentoVideo{
    width: 100%;
    height: 90%;
    background-color: #ffffffff;
    border-radius: 0px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;
  }
    
      #video{
        width: 150px;
        height: 60px;
      }
      h2{
        font-size:1rem;
      }
      
    }

`



