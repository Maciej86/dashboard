import { useSelector } from "react-redux";
import { useName } from "../../common/hooks/useName/useName";
import { selectNameState } from "../Name/sliceName";
import { ButtonConfirm } from "../../common/Button/styled";
import { Description, Tile, TileTitle } from "../../common/Tile/styled";
import { Form, InputName } from "./styled";

export const Settings = () => {
  const userNameState = useSelector(selectNameState);
  const { userName, validateName, setValidateName, onSubmitName } = useName();

  return (
    <Tile>
      <TileTitle>Ustawienia imienia</TileTitle>
      <p>
        Twoje obecne imię to <b>{userNameState}</b>
      </p>
      <Form onSubmit={onSubmitName}>
        <InputName
          type="text"
          ref={userName}
          maxLength={10}
          onClick={() => setValidateName(false)}
          $validName={validateName}
          placeholder="Podaj nowe imię"
        />
        <ButtonConfirm type="submit">Zmień imię</ButtonConfirm>
      </Form>
      <Description>
        Twoje imię jest zapisywane w pamięci lokalnej przeglądarki.
      </Description>
    </Tile>
  );
};
