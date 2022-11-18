import { useDispatch, useSelector } from "react-redux";
import { selectNameState } from "../Name/sliceName";
import { useCurrentDate } from "./useCurrentData";
import { selectToggleNavState, setToggleNav } from "./sliceBar";
import { Header, ButtonNav } from "./styled";

export const Bar = () => {
  const dispatch = useDispatch();
  const date = useCurrentDate();
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
        <span>{date}</span>
        Witaj <b>{userName}</b>
      </div>
    </Header>
  );
};
