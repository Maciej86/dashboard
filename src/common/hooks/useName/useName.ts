import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addConfirm } from "../../../features/Confirm/sliceConfirm";
import { addNewName } from "../../../features/Name/sliceName";

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
            textConfirm: "Nie podano imienia",
            id: nanoid(),
          })
        );
        return;
      }

      dispatch(addNewName(trimUserName));
      dispatch(
        addConfirm({
          status: true,
          textConfirm: "Imię zostało zapisane",
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
