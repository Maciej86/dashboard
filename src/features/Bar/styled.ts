import styled from "styled-components";
import { size } from "../../core/theme";

export const Header = styled.header`
  position: fixed;
  width: calc(100% - ${size.widthNawigation}px);
  height: ${size.heightBar}px;
  margin-left: ${size.widthNawigation}px;
  padding: 0 20px;
  background: ${({ theme }) => theme.backgroundBar};
  color: ${({ theme }) => theme.colorText};
`;
