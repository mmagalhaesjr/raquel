import styled from "styled-components";

export const StyledGaleria = styled.div`
  width: 100%;
  min-height: 100dvh;

  display: flex;
  align-items: center;
  justify-content: center;

  #container {
    width: 90%;
    margin-top: 200px;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;

   
  }

  #container img {
    width: 200px;
    height: 200px;
    padding: 10px;
    object-fit: cover;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transform: scale(1.03);
    }
  }

  #fundo {
    width: 100%;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;

    background: rgba(0, 0, 0, 0.9);

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 999;
  }

  #fundo img {
    width: auto;
    height: auto;

    max-width: 90%;
    max-height: 90vh;

    border-radius: 10px;
  }


  @media (max-width:900px) {
     margin-top:0px;

     #container img {
    width: 100px;
    height: 100px;
    padding: 10px;
    object-fit: cover;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transform: scale(1.03);
    }
  }
  }
`;