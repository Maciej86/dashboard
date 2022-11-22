import { useSelector, useDispatch } from "react-redux";
import { removeNote, selectNotes } from "../../../features/Notes/sliceNotes";
import {
  NoNotes,
  IconNoNotes,
  Description,
  WrapperNotes,
  Note,
  DeleteNote,
  DetalisNote,
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
            <p>{note.text}</p>
            <DetalisNote>
              <DeleteNote onClick={() => dispatch(removeNote(note.id))}>
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
