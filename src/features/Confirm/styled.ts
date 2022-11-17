import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  padding: 20px;
  bottom: 0;
  z-index: 30;
`;

export const Popup = styled.div`
  width: 260px;
  margin-top: 20px;
  background: ${({ theme }) => theme.color.backgroundConfirm};
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.colorTextBasic};
`;

export const Strap = styled.div`
  height: 10px;
  background: ${({ theme }) => theme.color.okConfirm};
  border-radius: 5px 5px 0 0;
`;

export const Text = styled.p`
  margin: 0;
  padding: 20px;
`;
