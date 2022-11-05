import styled, { css } from "styled-components";
interface AnimationSection {
  $toggleNav: boolean;
}

export const Wrapper = styled.main`
  height: 100%;
  overflow: auto;
`;

export const Dashboard = styled.section<AnimationSection>`
  height: 100%;
  background: ${({ theme }) => theme.color.backgroundApp};
  margin-left: 300px;
  transition: margin-left ${({ theme }) => theme.speed.speedNav}s,
    width ${({ theme }) => theme.speed.speedNav}s;

  ${({ $toggleNav }) =>
    $toggleNav &&
    css`
      margin-left: 0;
      width: 100%;
    `}

  @media (max-width: ${({ theme }) => theme.media.hiddenNav}px) {
    margin-left: 0;
    width: 100%;
  }
`;

export const Section = styled.section`
  width: 95%;
  max-width: 1450px;
  margin: 0 auto;
  padding: 20px;
`;
