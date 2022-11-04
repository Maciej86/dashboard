import styled, { keyframes } from "styled-components";
import { size } from "../../core/theme";
import { ReactComponent as LogoSvg } from "./logo.svg";

interface AnimationNavigation {
  $toggleNav: boolean;
}

const hiddenNavigation = keyframes`
  0%{ margin-left: 0; }
  100% { margin-left: -${size.widthNawigation}px; }
`;

const showNavigation = keyframes`
  0%{ margin-left: -${size.widthNawigation}px; }
  100% { margin-left: 0 }
`;

export const Nav = styled.nav<AnimationNavigation>`
  position: fixed;
  width: 300px;
  height: 100%;
  background: ${({ theme }) => theme.backgroundNav};
  animation: ${({ $toggleNav }) =>
      $toggleNav ? hiddenNavigation : showNavigation}
    0.7s ease-out forwards;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${size.heightBar}px;
  background: ${({ theme }) => theme.backgroundLogo};
  border-bottom: 1px solid ${({ theme }) => theme.borderBotomLogo};
`;

export const LogoIcon = styled(LogoSvg)`
  margin-left: -30px;
  transform: scale(0.6);
  fill: ${({ theme }) => theme.colorTextLogo}; ;
`;

export const LogoTitle = styled.h1`
  margin: 0;
  margin-left: -5px;
  font-size: 27px;
  font-weight: 500;
  color: ${({ theme }) => theme.colorTextLogo};
`;
