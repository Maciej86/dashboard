import styled from "styled-components";

export const InputText = styled.input`
  width: 100%;
  max-width: 250px;
  margin-top: 10px;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.color.borderInput};
  font-size: 16px;

  &:hover,
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.borderInputHover};
  }
`;
