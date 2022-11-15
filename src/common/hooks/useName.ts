import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewName } from "../../features/Name/sliceName";

export const useName = () => {
  const userName = useRef<HTMLInputElement>(null);
  const [validateName, setValidateName] = useState(false);
  const dispatch = useDispatch();

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userName.current !== null) {
      const trimUserName = userName.current.value.trim();

      if (trimUserName === "") {
        setValidateName(true);
        return;
      }

      dispatch(addNewName(trimUserName));
    }
  };

  return {
    userName,
    validateName,
    setValidateName,
    onFormSubmit,
  };
};
