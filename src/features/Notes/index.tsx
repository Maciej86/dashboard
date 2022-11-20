import { useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addConfirm } from "../Confirm/sliceConfirm";
import { addNotes } from "./sliceNotes";
import { Tile, TileTitle } from "../../common/Tile/styled";
import { ButtonConfirm } from "../../common/Button/styled";
import { TextArea } from "./styled";

export const Notes = () => {
  const textNotes = useRef<HTMLTextAreaElement>(null);
  const dispatch = useDispatch();
  const currentDate = new Date();

  const onSubmitNotes = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (textNotes.current !== null) {
      if (textNotes.current.value === "") {
        dispatch(
          addConfirm({
            status: false,
            textConfirm: "Nie wprowadzono żadnej treści",
            id: nanoid(),
          })
        );
        return;
      }

      dispatch(
        addNotes({
          id: nanoid(),
          text: textNotes.current.value,
          time: currentDate.toLocaleDateString(undefined, {
            day: "numeric",
            month: "numeric",
            year: "numeric",
          }),
        })
      );

      dispatch(
        addConfirm({
          status: true,
          textConfirm: "Notatka została zapisana",
          id: nanoid(),
        })
      );
    }
  };

  return (
    <Tile>
      <form onSubmit={onSubmitNotes}>
        <TileTitle>Notatki</TileTitle>
        <TextArea
          ref={textNotes}
          placeholder="Dodaj treść notatki..."
        ></TextArea>
        <ButtonConfirm type="submit">Dodaj notatkę</ButtonConfirm>
      </form>
    </Tile>
  );
};
