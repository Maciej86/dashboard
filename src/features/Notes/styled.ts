import styled from "styled-components";
import { ButtonConfirm } from "../../common/elements/Button/styled";

export const WrapperNotes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  margin-bottom: 15px;
  padding: 7px 5px;
  border: 1px solid ${({ theme }) => theme.color.borderInput};
  font-size: 16px;
  line-height: 1.4;
  resize: none;

  &:hover,
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.borderInputHover};
  }
`;

export const ButtonAddNotes = styled(ButtonConfirm)`
  @media (max-width: 400px) {
    width: 100%;
  }
`;
