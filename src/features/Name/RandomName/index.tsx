import { useDispatch } from "react-redux";
import { ButtonConfirm } from "../../../common/elements/Button/styled";
import { addNewName } from "../sliceName";
import { RandomName } from "./styled";

export const RenderName = () => {
  const dispatch = useDispatch();

  const arrayName = [
    "Maria",
    "Tomek",
    "Sara",
    "Maciej",
    "Ewa",
    "Stefan",
    "Marek",
    "Magda",
    "Mateusz",
    "Ewelina",
    "Dawid",
  ];
  const randomNumber = Math.floor(Math.random() * (arrayName.length - 1));

  const onFromRandomname = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addNewName(arrayName[randomNumber]));
  };

  return (
    <>
      <p>
        Nie podałeś/podałaś żadnego imienia. Zostało ono wylosowane. Pamiętaj,
        że zawsze możesz je zmienić w ustawieniach.
      </p>
      <p>Twoje wylosowane imię to:</p>
      <RandomName>
        <b>{arrayName[randomNumber]}</b>
      </RandomName>
      <form onSubmit={onFromRandomname}>
        <ButtonConfirm>OK</ButtonConfirm>
      </form>
    </>
  );
};
