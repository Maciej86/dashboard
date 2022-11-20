import { useSelector } from "react-redux";
import { selectNotes } from "../../../features/Notes/sliceNotes";

export const useNotes = () => {
  const notes = useSelector(selectNotes);

  const noNotes = <p>Brak notatek</p>;
  const fetchNotes = <p>Są notatki</p>;

  return <div>{notes.length === 0 ? noNotes : fetchNotes}</div>;
};
