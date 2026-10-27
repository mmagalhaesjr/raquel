import styled from "styled-components";

export const StyledCertificado = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  position: relative;

  #icone {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 32px;
    cursor: pointer;
  }

  #card {
    width: 100%;
    max-width: 440px;
    background: #fff;
    border-radius: 12px;
    padding: 32px 28px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }

  h2 {
    margin: 0 0 8px;
  }

  #intro,
  #sucesso {
    margin: 0 0 20px;
    line-height: 1.5;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  label {
    font-size: 13px;
    font-weight: 600;
    margin-top: 8px;
  }

  input {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 15px;
  }

  #botao {
    margin-top: 16px;
    padding: 14px;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
  }

  #botao:disabled {
    opacity: 0.6;
    cursor: wait;
  }
`;
