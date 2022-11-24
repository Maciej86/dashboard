import styled, { css } from "styled-components";
import { InputText } from "../../common/elements/Input/styled";

interface ValidateName {
  $validName: boolean;
}

export const Form = styled.form`
  display: flex;
  gap: 15px;

  @media (max-width: ${({ theme }) => theme.media.height450}px) {
    flex-direction: column;
  }
`;

export const InputName = styled(InputText)<ValidateName>`
  max-width: 200px;

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

  @media (max-width: ${({ theme }) => theme.media.height450}px) {
    max-width: 100%;
  }
`;
