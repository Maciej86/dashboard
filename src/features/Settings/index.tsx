import { useSelector } from "react-redux";
import { selectNameState } from "../Name/sliceName";
import { ButtonConfirm } from "../../common/Button/styled";
import { InputText } from "../../common/Input/styled";
import { Description, Tile, TileTitle } from "../../common/Tile/styled";
import { Form } from "./styled";

export const Settings = () => {
  const userName = useSelector(selectNameState);

  return (
    <Tile>
      <TileTitle>Ustawienia imienia</TileTitle>
      <p>
        Twoje obecne imię to <b>{userName}</b>
      </p>
      <Form>
        <InputText type="text" placeholder="Podaj nowe imię" />
        <ButtonConfirm type="submit">Zmień imię</ButtonConfirm>
      </Form>
      <Description>
        Twoje imię jest zapisywane w pamięci podręcznej przeglądarki.
      </Description>
    </Tile>
  );
};
