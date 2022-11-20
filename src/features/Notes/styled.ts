import styled from "styled-components";

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
  resize: none;

  &:hover,
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.borderInputHover};
  }
`;
