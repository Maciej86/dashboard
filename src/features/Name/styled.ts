import styled, { css } from "styled-components";
import { InputText } from "../../common/elements/Input/styled";

interface ValidateName {
  $validName: boolean;
}

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
  font-weight: 500;
  text-align: center;
  box-shadow: 0 0 15px ${({ theme }) => theme.color.boxShadow};

  @media (max-width: ${({ theme }) => theme.media.height800}px) {
    width: 80%;
  }
`;

export const Title = styled.p`
  margin: 0;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.media.height800}px) {
    width: 100%;
  }
`;

export const Input = styled(InputText)<ValidateName>`
  max-width: 200px;
  text-align: center;

  ${({ $validName }) =>
    $validName &&
    css`
      border-color: ${({ theme }) => theme.color.borderInputError};
      box-shadow: 0 0 5px ${({ theme }) => theme.color.borderInputError};

      &:hover,
      &:focus {
        box-shadow: none;
      }
    `}

  @media (max-width: ${({ theme }) => theme.media.height350}px) {
    max-width: 100%;
  }
`;

export const ErrorInfo = styled.p`
  margin: 10px 0 -5px 0;
  color: ${({ theme }) => theme.color.colorTextDescription};
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;

  @media (max-width: ${({ theme }) => theme.media.height350}px) {
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
  }
`;
