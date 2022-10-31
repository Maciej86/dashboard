import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    box-sizing: border-box;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }
  
  body {
    height: 100%;
    margin: 0;
    font-family: 'Rajdhani', sans-serif;
    font-size: 18px;
    line-height: 1.5;
    word-break: break-word;
  }
  
  #root {
    height: 100%;
  }
`;
