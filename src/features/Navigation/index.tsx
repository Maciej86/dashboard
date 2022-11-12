import { useDispatch, useSelector } from "react-redux";
import { selectToggleNavState, setToggleNav } from "../Bar/sliceBar";
import {
  Nav,
  Logo,
  LogoIcon,
  LogoTitle,
  MobileMask,
  MenuItems,
  Item,
} from "./styled";
import { ReactComponent as SettingsIcon } from "./images/settings.svg";
import { ReactComponent as HomeIcon } from "./images/home.svg";
import { Link } from "react-router-dom";

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
        <MenuItems>
          <Item>
            <HomeIcon />
            Pulpit
          </Item>
          <Item>
            <SettingsIcon />
            <Link to={"settings"}>Ustawienia</Link>
          </Item>
        </MenuItems>
      </Nav>
      <MobileMask
        onClick={() => dispatch(setToggleNav())}
        $toggleNav={toggleNav}
      ></MobileMask>
    </>
  );
};
