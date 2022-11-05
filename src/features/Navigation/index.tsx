import { useDispatch, useSelector } from "react-redux";
import { selectToggleNavState, setToggleNav } from "../Bar/sliceBar";
import { Nav, Logo, LogoIcon, LogoTitle, MobileMask } from "./styled";

export const Navigation = () => {
  const dispatch = useDispatch();
  const toggleNav = useSelector(selectToggleNavState);

  return (
    <>
      <Nav $toggleNav={toggleNav}>
        <Logo>
          <LogoIcon />
          <LogoTitle>DashBoard</LogoTitle>
        </Logo>
      </Nav>
      <MobileMask
        onClick={() => dispatch(setToggleNav())}
        $toggleNav={toggleNav}
      ></MobileMask>
    </>
  );
};
