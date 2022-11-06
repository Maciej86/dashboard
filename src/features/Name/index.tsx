import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewName } from "./sliceName";
import { ButtonCancel, ButtonConfirm } from "../../common/Button/styled";
import { Wrapper, Window, Title, Description, Buttons, From } from "./styled";
import { InputText } from "../../common/Input/styled";

export const Name = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();

  const onFromSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userName === "") {
      return alert("Zrobić ładna informację o błędzie");
    }

    const trimUserName = userName.trim();
    dispatch(addNewName(trimUserName));
  };

  return (
    <Wrapper>
      <Window>
        <Title>Podaj imię</Title>
        <From onSubmit={onFromSubmit}>
          <InputText
            type="text"
            value={userName}
            onChange={({ target }) => setUserName(target.value)}
          />
          <Buttons>
            <ButtonConfirm>Dodaj</ButtonConfirm>
            <ButtonCancel>Anuluj</ButtonCancel>
          </Buttons>
        </From>
        <Description>
          Wszystkie ustawienia oraz dane zostaną zapisane lokalnie na Twoim
          urządzeniu. Żadne informacje nie są wysyłane na jakikolwiek serwer.
        </Description>
      </Window>
    </Wrapper>
  );
};
