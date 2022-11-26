import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addConfirm } from "../../../features/Confirm/sliceConfirm";
import { addNewName } from "../../../features/Name/sliceName";
import { TextConfirm } from "../../text/textConfirm";

export const useName = () => {
  const userName = useRef<HTMLInputElement>(null);
  const [validateName, setValidateName] = useState(false);
  const dispatch = useDispatch();

  const onSubmitName = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userName.current !== null) {
      const trimUserName = userName.current.value.trim();

      if (trimUserName === "") {
        setValidateName(true);
        dispatch(
          addConfirm({
            status: false,
            textConfirm: TextConfirm.NAME_EMPTY,
            id: nanoid(),
          })
        );
        return;
      }

      dispatch(addNewName(trimUserName));
      dispatch(
        addConfirm({
          status: true,
          textConfirm: TextConfirm.NAME_ADD,
          id: nanoid(),
        })
      );
    }
  };

  return {
    userName,
    validateName,
    setValidateName,
    onSubmitName,
  };
};
