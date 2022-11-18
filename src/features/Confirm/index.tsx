import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectConfirmState } from "./sliceConfirm";
import { Wrapper, Popup, Strap, Text } from "./styled";

export const Confirm = () => {
  const infoConfirm = useSelector(selectConfirmState);
  console.log(infoConfirm);

  return (
    <Wrapper>
      {infoConfirm.map((info) => (
        <Popup key={info.id}>
          <Strap $status={info.status}></Strap>
          <Text>{info.textConfirm}</Text>
        </Popup>
      ))}
    </Wrapper>
  );
};
