import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { selectToggleNavState } from "../features/Bar/sliceBar";
import { Navigation } from "../features/Navigation";
import { Bar } from "../features/Bar";
import { Section, Wrapper } from "./styled";
import { themeDefault } from "./theme";

export const App = () => {
  const toggleNav = useSelector(selectToggleNavState);

  return (
    <ThemeProvider theme={themeDefault}>
      <Wrapper>
        <Navigation />
        <Bar />
        <Section $toggleNav={toggleNav}>Tutaj treść całego pulpitu</Section>
      </Wrapper>
    </ThemeProvider>
  );
};
