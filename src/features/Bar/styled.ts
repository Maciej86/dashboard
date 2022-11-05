import styled, { css } from "styled-components";
import { size } from "../../core/theme";
import { ReactComponent as ButtonToggleNav } from "./toggle_nav.svg";

interface AnimationHeader {
  $toggleNav: boolean;
}

export const Header = styled.header<AnimationHeader>`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${size.heightBar}px;
  padding: 0 20px;
  background: ${({ theme }) => theme.backgroundBar};
  border-bottom: 1px solid ${({ theme }) => theme.borderBottomBar};
  color: ${({ theme }) => theme.colorText};
`;

export const ButtonNav = styled(ButtonToggleNav)<AnimationHeader>`
  margin: -10px;
  transform: scale(0.5) rotate(${({ $toggleNav }) => ($toggleNav ? 0 : 180)}deg);
  fill: ${({ theme }) => theme.colorText};
  cursor: pointer;
`;
