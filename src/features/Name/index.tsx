import { useState } from "react";
import { useDispatch } from "react-redux";
import { ButtonCancel, ButtonConfirm } from "../../common/Button";
import { addNewName } from "./sliceName";
import { Wrapper, Window, Title, Description } from "./styled";

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
        <form onSubmit={onFromSubmit}>
          <input
            type="text"
            value={userName}
            onChange={({ target }) => setUserName(target.value)}
          />
          <div>
            <ButtonConfirm text={"Dodaj"} />
            <ButtonCancel text={"Anuluj"} />
          </div>
        </form>
        <Description>
          Wszystkie ustawienia oraz dane zostaną zapisane lokalnie na Twoim
          urządzeniu. Żadne informacje nie są wysyłane na jakikolwiek serwer.
        </Description>
      </Window>
    </Wrapper>
  );
};
