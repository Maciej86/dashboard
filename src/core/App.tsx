import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { selectToggleNavState } from "../features/Bar/sliceBar";
import { Navigation } from "../features/Navigation";
import { Bar } from "../features/Bar";
import { Wrapper, Dashboard, Section } from "./styled";
import { themeDefault } from "./theme";

export const App = () => {
  const toggleNav = useSelector(selectToggleNavState);

  return (
    <ThemeProvider theme={themeDefault}>
      <Wrapper>
        <Navigation />
        <Dashboard $toggleNav={toggleNav}>
          <Bar />
          <Section>Tutaj treść całego pulpitu</Section>
        </Dashboard>
      </Wrapper>
    </ThemeProvider>
  );
};
