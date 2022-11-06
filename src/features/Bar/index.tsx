import { useDispatch, useSelector } from "react-redux";
import { selectNameState } from "../Name/sliceName";
import { selectToggleNavState, setToggleNav } from "./sliceBar";
import { Header, ButtonNav } from "./styled";

export const Bar = () => {
  const dispatch = useDispatch();
  const toggleNav = useSelector(selectToggleNavState);
  const userName = useSelector(selectNameState);

  return (
    <Header $toggleNav={toggleNav}>
      <div>
        <ButtonNav
          onClick={() => dispatch(setToggleNav())}
          $toggleNav={toggleNav}
        />
      </div>
      <div>
        Witaj <b>{userName}</b>
      </div>
    </Header>
  );
};
