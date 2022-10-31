import { ThemeProvider } from "styled-components";
import { Bar } from "../features/Bar";
import { Navigation } from "../features/Navigation";
import { Section, Wrapper } from "./styled";
import { themeDefault } from "./theme";

export const App = () => {
  return (
    <ThemeProvider theme={themeDefault}>
      <Wrapper>
        <Navigation />
        <Bar />
        <Section>Tutaj treść całego pulpitu</Section>
      </Wrapper>
    </ThemeProvider>
  );
};
