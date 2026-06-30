import styled from "styled-components";

export const StyledCursoCompleto = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 120px 0 50px;

  display: flex;
  justify-content: center;

  #container {
    width: min(1400px, 95%);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    /* border: 2px solid red; */
  }

  h1 {
    font-size: 2.3rem;
    text-align: center;
  }

  h2 {
    font-size: 1.3rem;
    line-height: 1.7;
    text-align: center;
  }

  h3 {
    font-size: 1.2rem;
    line-height: 1.6;
    text-align: center;
  }

  #containerCxTexto {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;

    /* border: 3px solid blue; */
  }

  #cxTexto {
    width: 300px;
    min-height: 430px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

    text-align: center;
  }

  #cxTexto img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
  }

  h4 {
    font-size: 1.1rem;
    font-weight: bold;
    line-height: 1.4;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
  }

  /* ---------- Notebook ---------- */

  @media (max-width: 1200px) {
    #cxTexto {
      width: 45%;
    }
  }

  /* ---------- Tablet ---------- */

  @media (max-width: 768px) {
    h1 {
      font-size: 1.9rem;
    }

    h2 {
      font-size: 1.1rem;
    }

    h3 {
      font-size: 1.05rem;
    }

    #cxTexto {
      width: 100%;
      max-width: 500px;
      min-height: auto;
    }

    #cxTexto img {
      height: 220px;
    }
  }

  /* ---------- Celular ---------- */

  @media (max-width: 480px) {
    padding-top: 100px;

    #container {
      width: 92%;
    }

    h1 {
      font-size: 1.6rem;
    }

    h2 {
      font-size: 1rem;
      text-align: justify;
    }

    h3 {
      font-size: 1rem;
      text-align: justify;
    }

    h4 {
      font-size: 1rem;
    }

    p {
      font-size: 0.95rem;
    }

    #cxTexto {
      padding: 15px;
    }

    #cxTexto img {
      height: 180px;
    }
  }
`;