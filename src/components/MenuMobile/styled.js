import styled from 'styled-components';
import  { css } from 'styled-components';



export const StyledMenuMobile = styled.div`
    
    width: 100%;
    height: calc(100dvh - 50px); 
    top:50px;
    
    background-color: #000000d3;
    color: #ffffff;
    position: fixed;
    z-index:1;
    transition: opacity .5s ease-in-out;
    pointer-events: ${(props) => (props.mobile === 'aberto' ? 'auto' : 'none')};
    
    display: ${(props) => (props.mobile === 'aberto' ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    justify-content: start;

   
   

  
    .nav-lista{
        text-align:center; 
        color: #ffffff;
margin-top: 5%;
         //border: solid 2px red;
    }
   
nav{
    width: 90%;
    color: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

 a{
    font-weight:200;
    text-decoration: none;
    list-style: none;
    display: block;
    padding: 20px 30px;
    font-size: 16pxl;
    color: #ffffff;
    
    &:hover{
    background-color:#398462;
    width: 100%;
    transition: 1s;
   }
}

${({mobile}) => mobile && css`

    opacity:1;
    pointer-events:auto;
    transition: .7s;
    transform: translatex(0);
    color: #ffffff;

    nav{
        transform: scale(1);
       
    }
    
`}
`