import { useEffect, useState } from "react";
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
  ErrorInfo,
} from "./styled";
import { RenderName } from "./RandomName";

export const Name = () => {
  const [userName, setUserName] = useState("");
  const [cancelName, setCancelName] = useState(false);
  const [validateName, setValidateName] = useState(false);
  const dispatch = useDispatch();

  const onFromSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userName === "") {
      setValidateName(true);
      return;
    }

    const trimUserName = userName.trim();
    dispatch(addNewName(trimUserName));
  };

  return (
    <Wrapper>
      <Window>
        {cancelName ? (
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
                onClick={() => setValidateName(false)}
                $validName={validateName}
              />

              {validateName ? (
                <ErrorInfo>Proszę o podanie imienia</ErrorInfo>
              ) : (
                ""
              )}

              <Buttons>
                <ButtonConfirm>Dodaj</ButtonConfirm>
                <ButtonCancel onClick={() => setCancelName(true)}>
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
