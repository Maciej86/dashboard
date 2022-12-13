import { nanoid } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { addConfirm } from "../../../features/Confirm/sliceConfirm";
import { removeNote, selectNotes } from "../../../features/Notes/sliceNotes";
import { TextNote } from "../../text/textNote";
import {
  NoNotes,
  IconNoNotes,
  Description,
  WrapperNotes,
  Note,
  DeleteNote,
  DetalisNote,
  EditNote,
} from "./styled";

export const useNotes = () => {
  const notes = useSelector(selectNotes);
  const dispatch = useDispatch();

  const noNotes = (
    <NoNotes>
      <IconNoNotes />
      <Description>Nie utworzono żadnej notatki.</Description>
    </NoNotes>
  );
  const fetchNotes = (
    <WrapperNotes>
      {notes
        .slice(0)
        .reverse()
        .map((note) => (
          <Note key={note.id}>
            <div dangerouslySetInnerHTML={{ __html: note.text }}></div>
            <DetalisNote>
              <EditNote>Edytuj notatke</EditNote>
              <DeleteNote
                onClick={() => {
                  dispatch(removeNote(note.id));
                  dispatch(
                    addConfirm({
                      status: true,
                      textConfirm: TextNote.NOTE_DELETE,
                      id: nanoid(),
                    })
                  );
                }}
              >
                Usuń notatkę
              </DeleteNote>{" "}
              <span>Dodano: {note.time}</span>
            </DetalisNote>
          </Note>
        ))}
    </WrapperNotes>
  );

  return <div>{notes.length === 0 ? noNotes : fetchNotes}</div>;
};
