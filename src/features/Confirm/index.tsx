import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectConfirmState } from "./sliceConfirm";
import { Wrapper, Popup, Strap, Text } from "./styled";

export const Confirm = () => {
  const info = useSelector(selectConfirmState);
  console.log(info);

  return (
    <Wrapper>
      <Popup>
        <Strap $status={true}></Strap>
        <Text></Text>
      </Popup>
    </Wrapper>
  );
};
