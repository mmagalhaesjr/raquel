import styled from "styled-components";

export const StyledHeader = styled.header`
width: 100%;
height: 100px;
background-color: #000000;

display: flex;
align-items: center;
justify-content: space-evenly;
position: fixed;
z-index: 1;


h1{ 
    font-size: 1.2rem;
    color: #ffffff;
    cursor: pointer;
    &:hover{
        color:#adadad
    }
}

  button{
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 9;
    margin-bottom: 0px;
  }

 .linha{
    position: relative;
    width: 30px;
    height: 3px;
    background-color:#ffffff;
    display:block;
    margin: 5px auto;
    transform-origin:center;
    transition:.5s;
 }
 .linha:nth-child(1){
    transform: ${(props) => (props.mobile === 'aberto' ? ' translateY(5px) rotate(-40deg)' : 'rotate(0)')};
    transition: 1s;
   }
   .linha:nth-child(2){
    display:${(props) => (props.mobile === 'aberto' ? 'none' : 'block')};
    
    }
    .linha:nth-child(3){
    transform: ${(props) => (props.mobile === 'aberto' ? ' translateY(-3px) rotate(40deg)' : 'rotate(0)')};
    transition: 1s;
}


@media (max-width:900px) {

  height: 50px;
  h1{display:none}



  button{
    display: block;
  
  }
}

`