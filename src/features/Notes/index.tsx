import { Tile, TileTitle } from "../../common/Tile/styled";
import { ButtonConfirm } from "../../common/Button/styled";
import { TextArea } from "./styled";

export const Notes = () => {
  return (
    <Tile>
      <form>
        <TileTitle>Notatki</TileTitle>
        <TextArea placeholder="Dodaj treść notatki..."></TextArea>
        <ButtonConfirm type="submit">Dodaj notatkę</ButtonConfirm>
      </form>
    </Tile>
  );
};
