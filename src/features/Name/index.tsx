import { useState } from "react";
import { useName } from "../../common/hooks/useName";
import { RenderName } from "./RandomName";
import { ButtonCancel, ButtonConfirm } from "../../common/Button/styled";
import { Description } from "../../common/Tile/styled";
import {
  Wrapper,
  Window,
  Title,
  Buttons,
  Form,
  Input,
  ErrorInfo,
} from "./styled";

export const Name = () => {
  const [cancelName, setCancelName] = useState(false);
  const { userName, validateName, setValidateName, onSubmitName } = useName();

  return (
    <Wrapper>
      <Window>
        {cancelName ? (
          <RenderName />
        ) : (
          <>
            <Title>Podaj imię</Title>
            <Form onSubmit={onSubmitName}>
              <Input
                type="text"
                ref={userName}
                maxLength={10}
                onClick={() => setValidateName(false)}
                $validName={validateName}
                placeholder="Podaj nowe imię"
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
            </Form>
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
