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
            Ustawienia
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
