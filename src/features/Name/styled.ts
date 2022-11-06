import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.color.backgroundNameAlpha};
  z-index: 30;
`;

export const Window = styled.div`
  width: 30%;
  padding: 30px 20px;
  background: ${({ theme }) => theme.color.backgroundName};
  border-radius: 5px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  box-shadow: 0 0 15px ${({ theme }) => theme.color.boxShadow};
`;

export const From = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
`;

export const Description = styled.p`
  margin-top: 40px;
  font-size: 14px;
  line-height: 1;
  color: ${({ theme }) => theme.color.colorTextDescription};
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;
