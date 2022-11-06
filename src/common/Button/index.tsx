import { ButtonAnnul, ButtonOk } from "./styled";

interface OptionButton {
  readonly text: string;
}

export const ButtonConfirm = ({ text }: OptionButton) => {
  return <ButtonOk>{text}</ButtonOk>;
};

export const ButtonCancel = ({ text }: OptionButton) => {
  return <ButtonAnnul>{text}</ButtonAnnul>;
};
