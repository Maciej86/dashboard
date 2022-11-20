import { useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useNotes } from "../../common/hooks/useNotes/useNotes";
import { addConfirm } from "../Confirm/sliceConfirm";
import { addNotes } from "./sliceNotes";
import { Tile, TileTitle } from "../../common/elements/Tile/styled";
import { ButtonConfirm } from "../../common/elements/Button/styled";
import { WrapperNotes, TextArea } from "./styled";

export const Notes = () => {
  const textNotes = useRef<HTMLTextAreaElement>(null);
  const dispatch = useDispatch();
  const currentDate = new Date();

  const onSubmitNotes = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (textNotes.current !== null) {
      const trimTextNotes = textNotes.current.value.trim();

      if (trimTextNotes === "") {
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
          text: trimTextNotes,
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
    <WrapperNotes>
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

      <Tile>
        <TileTitle>Utworzone notatki</TileTitle>
        {useNotes()}
      </Tile>
    </WrapperNotes>
  );
};
