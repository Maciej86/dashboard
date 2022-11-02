import styled from "styled-components";
import { size } from "./theme";

export const Wrapper = styled.main`
  height: 100%;
  overflow: auto;
`;

export const Section = styled.section`
  height: 100%;
  background: ${({ theme }) => theme.backgroundApp};
  margin-top: ${size.heightBar}px;
  margin-left: 300px;
  padding: 20px;
`;
