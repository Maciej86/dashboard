import { useState } from "react";
import { useDispatch } from "react-redux";
import { setNewName } from "./sliceName";
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
    dispatch(setNewName(trimUserName));
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
            <button>Dodaj</button>
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
