import { useDispatch, useSelector } from "react-redux";
import { selectToggleNavState, setToggleNav } from "./sliceBar";
import { Header, ButtonNav } from "./styled";

export const Bar = () => {
  const dispatch = useDispatch();
  const toggleNav = useSelector(selectToggleNavState);

  return (
    <Header>
      <div>
        <ButtonNav
          onClick={() => dispatch(setToggleNav())}
          $iconRotate={toggleNav}
        />
      </div>
      <div>
        Witaj <b>Maciej</b>
      </div>
    </Header>
  );
};
