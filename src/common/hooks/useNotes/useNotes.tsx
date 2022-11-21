import { useSelector } from "react-redux";
import { selectNotes } from "../../../features/Notes/sliceNotes";
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

  const noNotes = (
    <NoNotes>
      <IconNoNotes />
      <Description>Nie utworzono żadnej notatki.</Description>
    </NoNotes>
  );
  const fetchNotes = (
    <WrapperNotes>
      {notes.map((note) => (
        <Note key={note.id}>
          <p>{note.text}</p>
          <DetalisNote>
            <DeleteNote>Usuń notatkę</DeleteNote>{" "}
            <span>Dodano: {note.time}</span>
          </DetalisNote>
        </Note>
      ))}
    </WrapperNotes>
  );

  return <div>{notes.length === 0 ? noNotes : fetchNotes}</div>;
};
