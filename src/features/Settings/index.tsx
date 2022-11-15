import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewName, selectNameState } from "../Name/sliceName";
import { ButtonConfirm } from "../../common/Button/styled";
import { Description, Tile, TileTitle } from "../../common/Tile/styled";
import { Form, InputName } from "./styled";

export const Settings = () => {
  const userNameState = useSelector(selectNameState);
  const userName = useRef<HTMLInputElement>(null);
  const [validateName, setValidateName] = useState(false);
  const dispatch = useDispatch();

  const onFromSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userName.current !== null) {
      const trimUserName = userName.current.value.trim();

      if (trimUserName === "") {
        setValidateName(true);
        return;
      }

      dispatch(addNewName(trimUserName));
    }
  };

  return (
    <Tile>
      <TileTitle>Ustawienia imienia</TileTitle>
      <p>
        Twoje obecne imię to <b>{userNameState}</b>
      </p>
      <Form onSubmit={onFromSubmit}>
        <InputName
          type="text"
          ref={userName}
          maxLength={10}
          $validName={validateName}
          placeholder="Podaj nowe imię"
        />
        <ButtonConfirm type="submit">Zmień imię</ButtonConfirm>
      </Form>
      <Description>
        Twoje imię jest zapisywane w pamięci podręcznej przeglądarki.
      </Description>
    </Tile>
  );
};
