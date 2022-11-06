const localStorageKey = "username";

export const saveDataInLocalStorage = (dataLocal: any) =>
  localStorage.setItem(localStorageKey, JSON.stringify(dataLocal));

export const getThemeInLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey) || "[]") || "";
