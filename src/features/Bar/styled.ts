import styled from "styled-components";
import { size } from "../../core/theme";
import { ReactComponent as ButtonToggleNav } from "./toggle_nav.svg";

interface RotateIcon {
  $toggleNav: boolean;
}

export const Header = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - ${size.widthNawigation}px);
  height: ${size.heightBar}px;
  margin-left: ${size.widthNawigation}px;
  padding: 0 20px;
  background: ${({ theme }) => theme.backgroundBar};
  border-bottom: 1px solid ${({ theme }) => theme.borderBottomBar};
  color: ${({ theme }) => theme.colorText};
`;

export const ButtonNav = styled(ButtonToggleNav)<RotateIcon>`
  margin: -10px;
  transform: scale(0.5) rotate(${({ $toggleNav }) => ($toggleNav ? 0 : 180)}deg);
  fill: ${({ theme }) => theme.colorText};
  cursor: pointer;
`;
