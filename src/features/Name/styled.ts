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
  box-shadow: 0 0 15px ${({ theme }) => theme.color.boxShadow};
`;
