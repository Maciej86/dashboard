import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeAutoConfirm,
  removeConfirm,
  selectConfirm,
} from "./sliceConfirm";
import { Wrapper, Popup, Strap, Text } from "./styled";

export const Confirm = () => {
  const dispatch = useDispatch();
  const infoConfirm = useSelector(selectConfirm);

  useEffect(() => {
    const timeRemoveConfirm = setTimeout(() => {
      dispatch(removeAutoConfirm());
    }, 3000);

    return () => {
      clearTimeout(timeRemoveConfirm);
    };
  }, [infoConfirm, dispatch]);

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
