import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as LogoSvg } from "./images/logo.svg";

interface AnimationNavigation {
  $toggleNav: boolean;
}

export const Nav = styled.nav<AnimationNavigation>`
  position: fixed;
  width: 300px;
  height: 100%;
  background: ${({ theme }) => theme.color.backgroundNav};
  transform: translateX(0);
  transition: transform ${({ theme }) => theme.speed.speedNav}s;
  z-index: 20;

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
  fill: ${({ theme }) => theme.color.colorTextNav};
`;

export const LogoTitle = styled.h1`
  margin: 0;
  margin-left: -5px;
  font-size: 27px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.colorTextNav};
`;

export const MobileMask = styled.div<AnimationNavigation>`
  position: absolute;
  display: ${({ $toggleNav }) => ($toggleNav ? "block" : "none")};
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.color.backgroundNav};
  opacity: 0.7;
  z-index: 10;

  @media (min-width: ${({ theme }) => theme.media.hiddenNav}px) {
    display: none;
  }
`;

export const MenuItems = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  color: ${({ theme }) => theme.color.colorTextNav};
`;

export const Item = styled.li`
  & path {
    transform-origin: center;
    transform: scale(0.5);
    opacity: 0.75;
    fill: ${({ theme }) => theme.color.colorTextNav};
  }
`;

export const ItemLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 7px 0 7px 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.colorTextNav};
  transition: background 0.5s;

  &:hover {
    background: ${({ theme }) => theme.color.backgroundNavHover};
  }
`;
