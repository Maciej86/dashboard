import { useState } from "react";
import { Header, ButtonNav } from "./styled";

export const Bar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <Header>
      <div>
        <ButtonNav
          onClick={() => setToggleNav((toggleNav) => !toggleNav)}
          $iconRotate={toggleNav}
        />
      </div>
      <div>
        Witaj <b>Maciej</b>
      </div>
    </Header>
  );
};
