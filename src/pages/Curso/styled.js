
import styled from "styled-components";

export const StyledCurso = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #111827, #374151);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  #icone{
    color: #ffffff;
    font-size: 3rem;
    position: absolute;
    top: 10px;
    left: 10px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

export const Card = styled.div`
  background: white;
  margin: 10px;
  padding: 24px;
  border-radius: 16px;
  width: 320px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
`;


export const Title = styled.h1`
  text-align: center;
  font-size: 20px;
  margin-bottom: 16px;
  color: #534b4b;
`;

export const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  width: 40%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background: #2563eb;
  color: white;
  cursor: pointer;
  &:hover { background: #1d4ed8; }
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 16px;
  padding: 16px;
  min-height: 100vh;
  background: #f3f4f6;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Sidebar = styled.div`
  background: white;
  padding: 16px;
  border-radius: 16px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);

  h2 {
    color: #837373;
    margin-bottom: 12px;
  }
`;

export const ModuleHeader = styled.div`
  padding: 10px;
  background: #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Chevron = styled.span`
  display: inline-block;
  transition: transform 0.3s ease;
`;

export const AulaButton = styled.button`
  width: 100%;
  margin-bottom: 6px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: #f9fafb;
  color: #918282;
  cursor: pointer;
  &:hover { background: #e5e7eb; }
`;

export const VideoArea = styled.div`
  background: white;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;
