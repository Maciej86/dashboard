import styled, { css } from "styled-components";
import { size } from "./theme";
interface AnimationSection {
  $toggleNav: boolean;
}

export const Wrapper = styled.main`
  height: 100%;
  overflow: auto;
`;

export const Section = styled.section<AnimationSection>`
  height: calc(100% - ${size.heightBar}px);
  background: ${({ theme }) => theme.backgroundApp};
  margin-top: ${size.heightBar}px;
  margin-left: 300px;
  padding: 20px;
  transition: margin-left 0.5s, width 0.5s;

  ${({ $toggleNav }) =>
    $toggleNav &&
    css`
      margin-left: 0;
      width: 100%;
    `}
`;
