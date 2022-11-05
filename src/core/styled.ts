import styled, { css } from "styled-components";
import { size } from "./theme";
interface AnimationSection {
  $toggleNav: boolean;
}

export const Wrapper = styled.main`
  height: 100%;
  overflow: auto;
`;

export const Dashboard = styled.section<AnimationSection>`
  height: 100%;
  background: ${({ theme }) => theme.backgroundApp};
  margin-left: 300px;
  transition: margin-left 0.5s, width 0.5s;

  ${({ $toggleNav }) =>
    $toggleNav &&
    css`
      margin-left: 0;
      width: 100%;
    `}
`;

export const Section = styled.section`
  padding: 20px;
`;
