import styled from "styled-components";

export const StyledCursoCompleto = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  #imgInicial {
    width: 100%;
    height: auto;
    display: block;
  }

  #container {
    width: 90%;
    margin: 5% 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  h1 {
    font-size: 2.3rem;
    text-align: center;
  }

  h2 {
    font-size: 1.3rem;
    line-height: 1.8;
    text-align: justify;
  }

  h3 {
    font-size: 1.3rem;
    line-height: 1.6;
    font-weight: bold;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #000;
    border: 2px solid #000;
    padding: 15px 30px;
    cursor: pointer;
    transition: 0.3s;
  }

  a:hover {
    background: #000;
    color: #fff;
  }

  /* ================= TABLET ================= */

  @media (max-width: 992px) {
    #container {
      width: 95%;
      gap: 25px;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.1rem;
    }

    h3 {
      font-size: 1.15rem;
    }
  }

  /* ================= CELULAR ================= */

  @media (max-width: 768px) {
    padding-top: 70px;

    #container {
      width: 94%;
      gap: 20px;
    }

    h1 {
      font-size: 1.8rem;
    }

    h2 {
      font-size: 1rem;
      line-height: 1.7;
    }

    h3 {
      font-size: 1.1rem;
    }

    a {
      width: 100%;
      max-width: 320px;
      text-align: center;
      padding: 14px;
    }
  }

  /* ================= CELULARES PEQUENOS ================= */

  @media (max-width: 480px) {
    padding-top: 55px;

    #container {
      width: 92%;
    }

    h1 {
      font-size: 1.55rem;
    }

    h2 {
      font-size: .95rem;
    }

    h3 {
      font-size: 1rem;
    }
  }
`;

export const StyledMeio = styled.section`
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;

  .card {
    width: 100%;
    display: flex;
    align-items: stretch;
    margin-bottom: 35px;
  }

  .card.invertido {
    flex-direction: row-reverse;
  }

  .cxTexto {
    width: 50%;
    min-height: 400px;
    padding: 40px;
    background: #cec9c9;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .cxImg {
    width: 50%;
    min-height: 400px;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  h4 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 25px;
  }

  p {
    width: 100%;
    font-size: 1.15rem;
    line-height: 1.7;
    text-align: justify;
  }

  /* ================= NOTEBOOK ================= */

  @media (max-width: 1200px) {
    width: 90%;
  }

  /* ================= TABLET ================= */

  @media (max-width: 992px) {
    width: 95%;

    .card,
    .card.invertido {
      flex-direction: column;
    }

    .cxTexto,
    .cxImg {
      width: 100%;
    }

    .cxImg {
      height: 350px;
      min-height: 350px;
    }

    .cxTexto {
      min-height: auto;
      padding: 35px;
    }

    h4 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.05rem;
    }
  }

  /* ================= CELULAR ================= */

  @media (max-width: 768px) {
    width: 100%;

    .card {
      margin-bottom: 40px;
    }

    .cxImg {
      height: 260px;
      min-height: 260px;
    }

    .cxTexto {
      padding: 25px 20px;
    }

    h4 {
      font-size: 1.5rem;
      margin-bottom: 15px;
    }

    p {
      font-size: 1rem;
      line-height: 1.7;
    }
  }

  /* ================= CELULARES PEQUENOS ================= */

  @media (max-width: 480px) {
    .cxImg {
      height: 220px;
      min-height: 220px;
    }

    .cxTexto {
      padding: 20px 15px;
    }

    h4 {
      font-size: 1.3rem;
    }

    p {
      font-size: .95rem;
    }
  }
`;