import styled, { css } from "styled-components";
import { ReactComponent as LogoSvg } from "./logo.svg";

interface AnimationNavigation {
  $toggleNav: boolean;
}

export const Nav = styled.nav<AnimationNavigation>`
  position: fixed;
  width: 300px;
  height: 100%;
  background: ${({ theme }) => theme.color.backgroundNav};
  transform: translateX(0);
  transition: transform 0.5s;
  z-index: 10;

  ${({ $toggleNav }) =>
    $toggleNav &&
    css`
      transform: translateX(-${({ theme }) => theme.size.widthNawigation}px);
    `}

  @media (max-width: ${({ theme }) => theme.media.hiddenNav}px) {
    transform: translateX(-${({ theme }) => theme.size.widthNawigation}px);

    ${({ $toggleNav }) =>
      $toggleNav &&
      css`
        transform: translateX(0);
      `}
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.size.heightBar}px;
  background: ${({ theme }) => theme.color.backgroundLogo};
  border-bottom: 1px solid ${({ theme }) => theme.color.borderBotomLogo};
`;

export const LogoIcon = styled(LogoSvg)`
  margin-left: -30px;
  transform: scale(0.6);
  fill: ${({ theme }) => theme.color.colorTextLogo}; ;
`;

export const LogoTitle = styled.h1`
  margin: 0;
  margin-left: -5px;
  font-size: 27px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.colorTextLogo};
`;
