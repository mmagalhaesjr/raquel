import styled from "styled-components";
import { fundo } from "../../constants/Cores";
import { Star } from 'lucide-react';

export const StyledPalestras = styled.section`
  width: 100%;
  min-height: 100dvh;
  background-color: ${fundo};

  //border: solid 2px red;

  display: flex;
  align-items: center;
  justify-content: center;
  

  #container {
    width: 100%;
    position: relative;
  
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    gap: 10px;

      border: solid 5px blue;
  }



  h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 5%;
    letter-spacing: 2px;
    color: #444;
   
     
  }

  #cxCards {
    width: 90%;
    height: auto;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5%;
    //border: solid 2px red;
  }

  .card {
    display: flex;
    flex-direction: column;
  }

  .card img {
    width: 100%;
    height: 140px;
    object-fit: cover;
    margin-bottom: 10px;
  }

  .card h3 {
    font-size: 0.9rem;
    margin-bottom: 10px;
    color: #222;
  }

  .card p {
    font-size: 0.75rem;
    color: #555;
    line-height: 1.4;
     text-align: justify;
  }

  /* 📱 RESPONSIVO */
  @media (max-width: 1024px) {
    #cxCards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 800px) {
    #container {
    width: 100%;
   
    position: relative;
   

    display: flex;
    flex-direction:column;
    align-items: center;
   justify-content: flex-start;

    gap: 10px;
   
  }

  h2{
    margin-top:5%;
  }

  #cxCards {
    width: 80%;
    height: auto;

    display: flex;
    flex-direction: column;
    gap: 20px;
    grid-template-columns: 1fr;
     margin-bottom: 20%;
   
    
  }

    .card img {
      height: 180px;
    }

    .card h3 {
      font-size: 1rem;
    }

    .card p {
      font-size: 0.85rem;
    }
  }
`;