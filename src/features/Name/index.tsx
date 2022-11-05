import { Wrapper, Window, Title, Description } from "./styled";

export const Name = () => {
  return (
    <Wrapper>
      <Window>
        <Title>Podaj imię</Title>
        <input type="text" />
        <Description>
          Wszystkie ustawienia oraz dane zostaną zapisane lokalnie na Twoim
          urządzeniu. Żadne informacje nie są wysyłane na jakikolwiek serwer.
        </Description>
      </Window>
    </Wrapper>
  );
};
