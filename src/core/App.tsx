import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { selectNameState } from "../features/Name/sliceName";
import { Name } from "../features/Name";
import { selectToggleNavState } from "../features/Bar/sliceBar";
import { Navigation } from "../features/Navigation";
import { Bar } from "../features/Bar";
import { Wrapper, Dashboard, Section } from "./styled";
import { themeDefault } from "./theme";

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
          <Section>
            <Outlet />
          </Section>
        </Dashboard>
      </Wrapper>
    </ThemeProvider>
  );
};
