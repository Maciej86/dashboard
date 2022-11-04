import { useSelector } from "react-redux";
import { selectToggleNavState } from "../Bar/sliceBar";
import { Nav, Logo, LogoIcon, LogoTitle } from "./styled";

export const Navigation = () => {
  const toggleNav = useSelector(selectToggleNavState);

  return (
    <Nav $toggleNav={toggleNav}>
      <Logo>
        <LogoIcon />
        <LogoTitle>DashBoard</LogoTitle>
      </Logo>
    </Nav>
  );
};
