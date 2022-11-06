import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Name } from "../features/Name";
import { selectToggleNavState } from "../features/Bar/sliceBar";
import { Navigation } from "../features/Navigation";
import { Bar } from "../features/Bar";
import { Wrapper, Dashboard, Section } from "./styled";
import { themeDefault } from "./theme";
import { selectNameState } from "../features/Name/sliceName";

export const App = () => {
  const toggleNav = useSelector(selectToggleNavState);
  const userName = useSelector(selectNameState);

  return (
    <ThemeProvider theme={themeDefault}>
      {Array.isArray(userName) ? <Name /> : ""}
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
