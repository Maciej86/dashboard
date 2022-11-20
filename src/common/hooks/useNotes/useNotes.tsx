import { useSelector } from "react-redux";
import { selectNotes } from "../../../features/Notes/sliceNotes";
import { NoNotes, IconNoNotes, Description, WrapperNotes } from "./styled";

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
        <p>{note.text}</p>
      ))}
    </WrapperNotes>
  );

  return <div>{notes.length === 0 ? noNotes : fetchNotes}</div>;
};
