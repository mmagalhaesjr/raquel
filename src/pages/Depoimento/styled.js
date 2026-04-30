import styled from "styled-components";
import { fundo } from "../../constants/Cores";

export const StyledDepoimento = styled.section`
  width: 100%;
  height: 100dvh;
  
  background: ${fundo};
 

  

  #container {
    width: 100%;
    height: 100%;
    
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:space-evenly;
   
    
  }


  //--------------------------------------------------------Depoimento
  h3{
    width: 100%;
    text-align: center;
    font-size: 2rem;
    margin-top: 5%;
  }

  h2{
    width: 100%;
    text-align: center;
    font-size: 2rem;
    margin-top: 5%;
  }
  #cxDepoimentos {
    width: 80%;
    height: 250px;
    background: #6b6b6b;
    color: white;
    text-align: center;
    position: relative;

  }

  #cxDepoimentos h3 {
    margin-bottom: 10px;
    letter-spacing: 2px;
  }

  #slider {
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

.swiper {
  width: 100%;
 height: 250px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.swiper-wrapper {
  height: auto;
  align-items: center;
  background: #6b6b6b;

  display: flex;
  align-items: center;
  justify-content: space-evenly;


}

.swiper-slide {
    width: 100%;
    height: 250px;
    color: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

}
.swiper-pagination-bullet {
  background: #fff;
  opacity: 0.5;
}

.swiper-pagination-bullet-active {
  background: #fff;
  opacity: 1;
}



//--------------------------------------------------------

  #beneficios {
    display: flex;
    justify-content: space-between;
    gap: 5%;
    margin-bottom: 0%;
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
   // border: solid 2px red;
  
  }

 
  #descricao {
    width: 95%;
    text-align: center;
    margin: 0 auto;
    color: #555;
    font-size: 0.9rem;
    line-height: 1.6;
    //border: solid 2px red;
  
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
    gap: 100px;
  }

  h2{
    font-size: 1.5rem;
    text-align: center;
    margin-top: 20px;
  }

    #beneficios {
      flex-direction: column;
      align-items: center;
    }

    .item {
      width: 100%;
    }
     #descricao {
    width: 100%;
    margin: 0 auto;
    color: #555;
    font-size: 0.9rem;
    line-height: 1.6;
    margin-top: 10%;

  }

    #cxDepoimentos {
    width: 95%;
    height: 250px;
    background: #6b6b6b;
    color: white;
    text-align: center;
    position: relative;

  }

    #depoimentos{
      width: 100%;
      height: auto;
      margin-bottom: 5%;
      margin-bottom: 20%;
    }

    #slider {
      flex-direction: column;
      gap: 20px;
      
    }
    
  }
`;