import { Tile, TileTitle } from "../../common/elements/Tile/styled";
import { useNotes } from "../../common/hooks/useNotes/useNotes";

export const Start = () => {
  return (
    <Tile>
      <TileTitle>Notatki</TileTitle>
      {useNotes()}
    </Tile>
  );
};
