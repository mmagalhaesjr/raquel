import styled from "styled-components";
import { fundo } from "../../constants/Cores";

export const StyledDepoimento = styled.section`
  width: 100%;
  height: auto;
  z-index: 0;
  
  background: ${fundo};
 
  

  #container {
    width: 100%;
    height: 100%;
    
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
  }


  //--------------------------------------------------------Depoimento

  #cxDepoimentos {
    width: 80%;
   
    color: white;
    text-align: center;
  }

  .swiper-wrapper {
  width: 100%;
  height: auto;
  align-items: center;
  background: #6b6b6b;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
}



  h3{
    width: 100%;
    height: 50px  ;
    text-align: center;
    font-size: 2rem;
    margin-top: 5%;
    margin-bottom: 10px;
    letter-spacing: 2px;
  }

  #cxSlider {
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }


  #depoimento {
    max-width: 600px;
  }

  #depoimento p {
    margin-bottom: 20px;
    font-style: italic;
  }

  #depoimento span {
    display: block;
    font-weight: bold;
  }

  #depoimento small {
    opacity: 0.8;
  }


.swiper-button-prev,
.swiper-button-next{

 color: #fff;
 margin: 1%;
 
}
.swiper-button-next.swiper-button-disabled,
.swiper-button-prev.swiper-button-disabled {
  display: none;
}

.swiper-pagination-bullet-active {
  background: #fff;
  opacity: 1;
}



//--------------------------------------------------------
  h2{
    width: 100%;
    height: 150px;
    text-align: center;
    font-size: 2rem;

      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
  }

  #beneficios {
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    

    
  }

  .item {
    width: 22%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: #333;
  }

  .item p {
    font-size:.8rem;
  }

 
  #descricao {
    width: 95%;
    height: 150px;
     
    color: #555;
    font-size: 0.9rem;
    line-height: 1.6;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  


 
  @media (max-width: 900px) {
   height: auto;

.swiper-button-prev,
.swiper-button-next {
    display: none;
}


  #container {
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
  }

  h2{
    width: 95%;
    height: 150px;
    font-size: 1.5rem;
    text-align: center;
  }

  #beneficios {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    text-align: center;
  }

    .item {
      width: 100%;
      margin-bottom: 5%;
      
    }
     #descricao {
    width: 100%;
    height: auto;
    color: #555;
    font-size: 0.9rem;
    line-height: 1.6;
    padding-top: 10%;
     padding-bottom: 10%;
  }


    #cxDepoimentos {
    width: 95%;
    height: auto;
  
    color: white;
    position: relative;
  }

    #depoimentos{
      width: 100%;
      height: auto;
      margin-bottom: 5%;
      margin-bottom: 20%;
      
    }

    #cxSlider {
      flex-direction: column;
      gap: 20px;
       padding: 2%;
      
    }
      #descricao {
    width: 95%;
    text-align: justify;

    margin: 0 auto;
    color: #555;
    font-size: 0.9rem;
    line-height: 1.6;
    //border: solid 2px red;
  
  }
    
  }
`;