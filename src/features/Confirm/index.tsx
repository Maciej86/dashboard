import { useDispatch, useSelector } from "react-redux";
import { removeConfirm, selectConfirmState } from "./sliceConfirm";
import { Wrapper, Popup, Strap, Text } from "./styled";

export const Confirm = () => {
  const dispatch = useDispatch();
  const infoConfirm = useSelector(selectConfirmState);

  return (
    <Wrapper>
      {infoConfirm.map((info) => (
        <Popup key={info.id} onClick={() => dispatch(removeConfirm(info.id))}>
          <Strap $status={info.status}></Strap>
          <Text>{info.textConfirm}</Text>
        </Popup>
      ))}
    </Wrapper>
  );
};
