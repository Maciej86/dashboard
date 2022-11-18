import styled, { css } from "styled-components";

interface StrapStatus {
  $status: boolean;
}

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
  cursor: pointer;
`;

export const Strap = styled.div<StrapStatus>`
  height: 10px;
  border-radius: 5px 5px 0 0;

  background: ${({ $status }) =>
    $status
      ? css`
          ${({ theme }) => theme.color.okConfirm};
        `
      : css`
          ${({ theme }) => theme.color.failedConfirm};
        `};
`;

export const Text = styled.p`
  margin: 0;
  padding: 20px;
`;
