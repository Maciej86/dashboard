import styled from "styled-components";

const Button = styled.button`
  padding: 9px 27px;
  font-size: 17px;
  border: none;
  transition: background 0.5s;
  cursor: pointer;
`;

export const ButtonConfirm = styled(Button)`
  background: ${({ theme }) => theme.color.buttonConfirmBg};
  color: ${({ theme }) => theme.color.colorTextWhite};

  &:hover {
    background: ${({ theme }) => theme.color.buttonConfirmBgHover};
  }
`;

export const ButtonCancel = styled(Button)`
  background: ${({ theme }) => theme.color.buttonCancelBg};
  color: ${({ theme }) => theme.color.colorTextBasic};

  &:hover {
    background: ${({ theme }) => theme.color.buttonCancelBgHover};
  }
`;
