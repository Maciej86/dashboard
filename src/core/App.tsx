import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { selectNameState } from "../features/Name/sliceName";
import { Name } from "../features/Name";
import { selectToggleNavState } from "../features/Bar/sliceBar";
import { Navigation } from "../features/Navigation";
import { Bar } from "../features/Bar";
import { themeDefault } from "./theme";
import { Confirm } from "../features/Confirm";
import { Wrapper, Dashboard, Section } from "./styled";

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
        <Confirm />
      </Wrapper>
    </ThemeProvider>
  );
};
