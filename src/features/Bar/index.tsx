import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectToggleNav as selectToggleNavState,
  setToggleNav,
} from "./sliceBar";
import { Header, ButtonNav } from "./styled";

export const Bar = () => {
  const dispatch = useDispatch();
  const toggleNav = useSelector(selectToggleNavState);

  return (
    <Header>
      <div>
        <ButtonNav
          onClick={() => dispatch(setToggleNav())}
          $iconRotate={toggleNav.toggle}
        />
      </div>
      <div>
        Witaj <b>Maciej</b>
      </div>
    </Header>
  );
};
