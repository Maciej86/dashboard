import styled from "styled-components";
import { ReactComponent as ButtonToggleNav } from "./toggle_nav.svg";

interface AnimationHeader {
  $toggleNav: boolean;
}

export const Header = styled.header<AnimationHeader>`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: ${({ theme }) => theme.size.heightBar}px;
  padding: 0 20px;
  background: ${({ theme }) => theme.color.backgroundBar};
  border-bottom: 1px solid ${({ theme }) => theme.color.borderBottomBar};
  color: ${({ theme }) => theme.color.colorTextBasic};
`;

export const ButtonNav = styled(ButtonToggleNav)<AnimationHeader>`
  margin: -10px;
  transform: scale(0.5) rotate(${({ $toggleNav }) => ($toggleNav ? 0 : 180)}deg);
  fill: ${({ theme }) => theme.color.colorTextBasic};
  cursor: pointer;
`;
