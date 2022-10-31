import styled from "styled-components";

export const Wrapper = styled.main`
  height: 100%;
`;

export const Section = styled.section`
  height: 100%;
  background: ${({ theme }) => theme.backgroundApp};
  padding: 100px 20px 15px 320px;
`;
