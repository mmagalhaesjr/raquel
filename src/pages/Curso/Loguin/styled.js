import styled from "styled-components";
import { fundo } from '../../../constants/Cores';

export const StyledLoguin = styled.main`
    width: 100%;
    height: 100vh;
    background-color: ${fundo};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    form{
        width: 400px;
        height: 30%;
        background-color: #ffffffff;
        border-radius: 10px;
        

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    } 
    h2{
        font-size: 2rem;
    }
    input{
       
        width: 90%;
        height: 20%;
        outline: none;
        border: none;  
        padding: 5px;
        border-radius: 10px;
        font-size: 1rem;
        color: #000000; ;
        background-color: #f0f0f0f6;
        border: solid 1px #918d8d3b;
    }
    ::-webkit-input-placeholder {
        color:#918d8d3b;/* Para navegadores baseados em Chromium (Chrome, Edge, etc.) */
    }

button{
    width:90% ;
    height: 20%;
    background-color: #5168e9ff;
    color: #ffffff;
    border: none;
    border-radius: 10px;
    font-size: 2rem;
    cursor: pointer;
    &:hover{
         background-color: #2c3d9cff;
    }
}
   
    @media (max-width:800px) {
         form{
            width: 90%;

         }
    }
`;
