import styled from "styled-components";
import { roxo } from '../../constants/Cores';

export const StyledHome = styled.main`
    width: 100%;
    height: 100vh;
    background-color: ${roxo};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    form{
        width: 400px;
        height: 200px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

    } 
    input{
        background-color: #f0f0f0f6;
        width: 100%;
        height: 30%;
        outline: none;
        border: none;  
        padding: 5px;
        border-radius: 10px;
        font-size: 2rem;
    }
    ::-webkit-input-placeholder {
        color: #000000; /* Para navegadores baseados em Chromium (Chrome, Edge, etc.) */
    }

button{
    width:100% ;
    height: 30%;
    background-color: #ffffffff;
    color: #000000;
    border: none;
    border-radius: 10px;
    font-size: 2rem;
    cursor: pointer;
    &:hover{
         background-color: #efff0fbf;
    }
}
   
    
`;
