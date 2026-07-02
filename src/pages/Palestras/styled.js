import styled from "styled-components";
import { fundo } from "../../constants/Cores";
import { Star } from 'lucide-react';
import { Button } from '../Curso/styled';

export const StyledPalestras = styled.section`
  width: 100%;
 
  background-color: ${fundo};
  padding: 5%;


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

  
  }



  h2 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 5%;
    margin-top: 2%;
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
    height: 300px;
    object-fit: cover;
    margin-bottom: 10px;
  }

  .card h3 {
    font-size: 0.9rem;
    margin-bottom: 10px;
    color: #222;
  }

  .card  {
    font-size: 0.75rem;
    color: #555;
    line-height: 1.4;
     text-align: justify;
  }

  button{
    cursor: pointer;
    /* border: solid 2px #979595; */
    border: none;
    padding: 2px;
    background-color: transparent;
    margin-top: 5px;
    margin-left: -20px;
  }

/* ul {
  ${({ abrir }) => 
    abrir ? "display: none;" : "display: block;"}
} */

  li {
  display: none;
}

ul{
  padding-left: 20px;
}


ul.ativo li {
 display: list-item;
  list-style-type: disc;
  margin-top: 5px;
}

   li{
     font-size: 0.75rem;
    color: #555;
    line-height: 1.7;
     text-align: justify;
   }

  /* 📱 RESPONSIVO */
  @media (max-width: 1024px) {
    #cxCards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 900px) {
    height: auto;
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
    font-size: 1.5rem;
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