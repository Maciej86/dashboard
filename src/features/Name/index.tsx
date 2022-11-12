import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewName } from "./sliceName";
import { ButtonCancel, ButtonConfirm } from "../../common/Button/styled";
import {
  Wrapper,
  Window,
  Title,
  Description,
  Buttons,
  From,
  Input,
} from "./styled";
import { RenderName } from "./RandomName";

export const Name = () => {
  const [userName, setUserName] = useState("");
  const [validateName, setValidateName] = useState(false);
  const dispatch = useDispatch();

  const onFromSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userName === "") {
      return alert(
        "Tutaj zaznaczenie pola input na czerowno lub jakiś komunikat."
      );
    }

    const trimUserName = userName.trim();
    dispatch(addNewName(trimUserName));
  };

  return (
    <Wrapper>
      <Window>
        {validateName ? (
          <RenderName />
        ) : (
          <>
            <Title>Podaj imię</Title>
            <From onSubmit={onFromSubmit}>
              <Input
                type="text"
                value={userName}
                maxLength={10}
                onChange={({ target }) => setUserName(target.value)}
              />
              <Buttons>
                <ButtonConfirm>Dodaj</ButtonConfirm>
                <ButtonCancel onClick={() => setValidateName(true)}>
                  Anuluj
                </ButtonCancel>
              </Buttons>
            </From>
            <Description>
              Wszystkie ustawienia oraz dane zostaną zapisane lokalnie na Twoim
              urządzeniu. Żadne informacje nie są wysyłane na jakikolwiek
              serwer.
            </Description>
          </>
        )}
      </Window>
    </Wrapper>
  );
};
