import styled from 'styled-components';
import  { css } from 'styled-components';



export const StyledMenuMobile = styled.div`
  width: 100%;
  height: calc(100dvh - 50px);
  top: 50px;

  background-color: #000000d3;
  color: #ffffff;
  position: fixed;
  z-index: 999;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  
  opacity: 0;
  transform: translateY(-20px);
  pointer-events: none;
  transition: all 0.4s ease;

  .nav-lista {
    width: 100%;
    margin-top: 5%;
    text-align: center;
  }

  nav {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }


  a,
  button {
    width: 100%;
    font-weight: 200;
    text-decoration: none;
    border: none;
    background: transparent;
    cursor: pointer;

    padding: 20px 30px;
    font-size: 16px; 
    color: #ffffff;
    text-align: center;

    transition: all 0.3s ease;

    &:hover {
      background-color: #398462;
    }
  }

 
  ${({ mobile }) =>
    mobile === 'aberto' &&
    css`
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    `}
`;