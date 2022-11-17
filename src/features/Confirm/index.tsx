import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectConfirm } from "./sliceConfirm";
import { Wrapper, Popup, Strap, Text } from "./styled";

export const Confirm = () => {
  const info = useSelector(selectConfirm);
  const [popupArray, setPopupArray] = useState<any>([]);

  useEffect(() => {
    info.id !== ""
      ? setPopupArray((popupArray: any) =>
          popupArray.concat(
            <Popup key={info.id}>
              <Strap $status={info.status}></Strap>
              <Text>{info.textConfirm}</Text>
            </Popup>
          )
        )
      : setPopupArray([]);
  }, [info]);

  return <Wrapper>{popupArray}</Wrapper>;
};
